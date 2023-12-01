var navLinks = document.getElementById('navLinks');
function showMenu(){
    navLinks.style.right="0";
}
function hideMenu(){
    navLinks.style.right="-200px";

}
/*----------- Services -------------*/

var btn = document.getElementsByClassName("btn");
var banner = document.getElementById("banner")
btn[0].onclick = function(){
    banner.src = "picc3.jpg";
    animation();
    this.classList.add("active");
}
btn[1].onclick = function(){
    banner.src = "picc2.jpeg";
    animation();
    this.classList.add("active");
    
}
btn[2].onclick = function(){
    banner.src = "picc1.jpeg";
    animation();
    this.classList.add("active");
    
}
function animation(){
    banner.classList.add("zoom");
setTimeout(function(){
    banner.classList.remove("zoom");
},500);

for (b of btn){
    b.classList.remove("active");
}

}



