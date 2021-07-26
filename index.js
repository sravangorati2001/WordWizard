const items = [
    "apple",'sravan','javascript', 'sunday','monday','tuesday','wednesday',
    "apricot",'jntuh',"Blue", "Red","Orange", "Yellow",'create',
    "banana",'hello','hai',"pear",'about','act','actually','add','after','again','against','age', "guava",
    "cherry","orange","pineapple","mango", "grapes",
    'animal','another','answer','appear','beauty','because','become','bed','been','before','begin','behind','best',
    'better','between','big','bird','black','blue','boat','body','book','both','bottom','box','boy','bring','brought',
    'build','built','busy','white','who','why','will','wind','winter','with','without','woman','wonder',
'wood','words','work','world','would','write','wrong','year','yes','you','young',
'wait','walk','want','war','warm','was','watch','water','wave','way','week','weight','were','west','what','wheel','where','which',
'under','understand','until','up','upon','us','use','usual','very','voice','vowel','said',
'same','saw','say','school','science','sea','season','second','see','seem','self','sentence','serve','set','several','shape','she','ship','short',
'should','show','shown','side','simple','since','sing','sit','six','size','sleep',
'slow','small','snow','some','something','song','soon','sound','south','space','special','spell',
'spring','stand','star','start','stay','step','stood','stop','story','street','strong','study','such','summer','sun',
'system','page','pair','part','pass','passed','people','perhaps','person','picture','place','plan','plane','plant','play','point','power','probably','problem','product','provide','pull','put',
];

const word=document.getElementById('input');
const list=document.getElementById('lists');

const root=new TrieNode('*');
for( const item of items)
insert(item,root);


document.addEventListener("keyup",myFunc);
var UL=document.createElement("ul");
list.appendChild(UL);
UL.className="list-group";
var totalString
function test(s) {
  //totalString=s;
  var n = s.split(" ");
  var temp=n[n.length - 1]
  if(n.length===1) totalString="";
  else{ 
   totalString.slice(0,s.length-(temp.length+n.length-1));}
  return temp;
}
function myFunc(){
    UL.innerHTML="";
     var str=document.getElementById('input').value;
      totalString=str;
    str=test(str).toLowerCase();
    totalString=totalString.substr(0,totalString.length-str.length);
    if(str==="") return;
     var w=autoSuggestions(root,str);
     for(var ws of w){
      UL.innerHTML+=`<li class="list-group-item list-group-item-action list-group-item-dark" onmouseover="this.style.cursor='pointer'" onclick="handleInput(this)"><b>${str}</b>${ws.substr(str.length)}</li>`
     }
}

 function handleInput(e){
  
   var temp=totalString+(e.innerText);
  //totalString.concat(temp);
  //console.log(len);

  document.getElementById('input').value=temp;
  document.getElementById('input').autofocus=true;
  UL.innerHTML=""
 }
 
  
   
