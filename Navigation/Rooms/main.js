let carouselhandle = document.getElementById("descriptions");
let carousel = carouselhandle.getElementsByClassName("room-description");

function btnnext() {
  for (var i = 0; i < carousel.length; i++) {
    var div = carousel[i];
    if (!carousel[i].classList.contains("d-none")) {
      carousel[i].classList.add("d-none")
      if (i === carousel.length - 1) {
        carousel[0].classList.remove("d-none");
      } else {
        carousel[i+1].classList.remove("d-none");
      }
      break;
    }
  }
 }

 function btnnext2() {
  for (var i = 0; i < carousel.length; i++) {
    var div = carousel[i];
    if (!carousel[i].classList.contains("d-none")) {
      carousel[i].classList.add("d-none")
      if (i === 0) {
        carousel[2].classList.remove("d-none");
      } else {
        carousel[i-1].classList.remove("d-none");
      }
      break;
    }
  }
 }
