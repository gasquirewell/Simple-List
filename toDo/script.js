var menu= document.getElementsByClassName('menu');

console.log(menu);

for(var i=0; i<menu.length;i++){
    menu[i].setAttribute("target",'_blank');
    menu[i].setAttribute("href", "http://google.com");
    

}

var title2= document.createElement("h2");
var text= document.createTextNode("Morning routine");

console.log(title2);
console.log(text);

title2.appendChild(text);
console.log(title2);

var main= document.getElementsByTagName("main");
main[0].appendChild(title2);

var p1= document.getElementById("p1").style.display= "none";
style.display= "none" ;

main[0].removeChild(title2);
main[0].removeChild(p1);

var title1 = document.createElement("h1");
var text1 = document.createTextNode("The new To Do List");
title1.appendChild(text1);

var header = document.getElementsByTagName("header");

var oldTtile = document.getElementsByTagName("h1");

console.log(oldTtile);

header[0].replaceChild(title1,oldTitle[0]);