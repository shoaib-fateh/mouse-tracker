document.querySelector("html").addEventListener("mousemove", getXYcoordinates);
function getXYcoordinates() {
    var XYcoordinates = document.getElementById("XYcoordinates");
    var x = event.pageX;
    var y = event.pageY;
    
    XYcoordinates.querySelector(".Xcoordinates").innerHTML= "X: " + x;
    XYcoordinates.querySelector(".Ycoordinates").innerHTML= "Y: " + y;
    
    document.getElementById("line_X").style.top = y + "px";
    document.getElementById("line_Y").style.left = x + "px";
    
    XYcoordinates.style.top = y + "px";
    XYcoordinates.style.left = x + "px";
}