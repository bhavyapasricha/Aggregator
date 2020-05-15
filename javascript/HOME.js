function main() {
  
	document.getElementById("search_container").style.bottom = "5%";
	document.getElementById("logo").style.top = "1%";
	document.getElementById("l1").style.left = "17%";
	document.getElementById("l2").style.right = "17%";

}
/* for popup menu*/
/* Open login*/
function openLOGIN() {
    document.getElementById("overlay").style.top="0%";
	document.getElementById("item4").style.width="0%";
	document.getElementById("item1").style.background="white";
	document.getElementById("item1").style.color="black";
	document.getElementById("item1").style.opacity="1";
	document.getElementById("item3").style.background="#b9b9b9";
	document.getElementById("item3").style.color="#8E8E8E";
	document.getElementById("item3").style.opacity="0.5";
}
/* Open signup*/
function openSIGNUP() {
    document.getElementById("overlay").style.top="0%";
	document.getElementById("item4").style.width="100%";
	document.getElementById("item3").style.background="white";
	document.getElementById("item3").style.color="black";
	document.getElementById("item3").style.opacity="1";
	document.getElementById("item1").style.background="#b9b9b9";
	document.getElementById("item1").style.color="#8E8E8E";
	document.getElementById("item1").style.opacity="0.5";
	
}
/* Close login*/
function closeFORM() {
    document.getElementById("overlay").style.top="-100%";
	document.getElementById("item4").style.width="0%";
	document.getElementById("item1").style.background="white";
	document.getElementById("item1").style.color="black";
	document.getElementById("item1").style.opacity="1";
	document.getElementById("item3").style.background="#b9b9b9";
	document.getElementById("item3").style.color="#8E8E8E";
	document.getElementById("item3").style.opacity="0.5";
}

