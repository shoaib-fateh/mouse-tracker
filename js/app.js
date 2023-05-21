const $ = (e) => document.querySelector(e);
$("html").addEventListener("mousemove", (event) => {
  // cursor position
  var x = event.pageX;
  var y = event.pageY;

  //   lines
  $("#line_X").style.top = y + "px";
  $("#line_Y").style.left = x + "px";

  //   values
  $(".Xcoordinates").innerHTML = "X: " + x;
  $(".Ycoordinates").innerHTML = "Y: " + y;

  //   values position
  $("#XYcoordinates").style.top = y + "px";
  $("#XYcoordinates").style.left = x + "px";
});
