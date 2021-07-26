const s="abcdefghijklmnopqrstuvwxyz";
var words=[];
var count=0;
function TrieNode(letter){
  this.ch=letter,
  this.isTerminal=false,
  this.child={}
}

function insert(str,root){
    var curNode=root;
    for(var i=0;i<str.length;i++){
        if(curNode.child[str[i]]=== undefined){
            curNode.child[str[i]]=new TrieNode(str[i]);
        }
      curNode=curNode.child[str[i]];
    }
    curNode.isTerminal=true;
}
function search(prefix,root){
  var curNode=root;
    for(var i=0;i<prefix.length;i++){
        if(curNode.child[prefix[i]]=== undefined){
            return undefined;
        }
      curNode=curNode.child[prefix[i]];
    }
   return curNode;
}
function isLastNode(temp){
//console.log(s);
  
 for(var i=0;i<26;i++){
   if(temp.child[s[i]]) return false;
 }
  return true;
}
function autoSuggestionsRec(temp,prefix){
  if(temp===undefined) return;
   if(count===5) return;
  if(temp.isTerminal){
   words.push(prefix);
   count++;
  }
  if(isLastNode(temp)) return;

  for(var i=0;i<26;i++){
    if(temp.child[s[i]]){
    var st=prefix.concat(s[i]);
   // console.log(st);

    autoSuggestionsRec(temp.child[s[i]],st);
    }
  }
}
function autoSuggestions(root,prefix){
  words=[]
  count=0;
  var temp=search(prefix,root);
  if(temp===undefined) return [];
  autoSuggestionsRec(temp,prefix);
  return words;
}
