
console.log("hello")
function getlogo() {
    console.log("getlogo")
	var logo = document.getElementById("logo");
	logo.onclick = removenavbar; // here function's refernce is passed function itself is not called
}


function removenavbar() {
	console.log("remove navbar");
    document.getElementById("navbar").remove;
}



function remove() {
    var element = document.getElementById("navbar");
    //I have also tried using document.getElementByID(this.id)
    element.remove();
    //I have also tried using element.parentNode.removeChild(element); to remove the element.
  }
