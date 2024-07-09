window.onload = function() {
  document.querySelector("header").classList.add("active")
  document.querySelectorAll(".component .box").forEach((box) => {
    box.classList.add("active")
  })
}


let check = 0;

document.querySelector(".btn").onclick = function () {
  if (check === 0) {
    document.querySelector(".btn p").style.cssText =
      "left: 5px; transition: 0.3s linear;";
    document.querySelectorAll(".month").forEach((el) => {
      el.style.display = "none";
    });
    document.querySelectorAll(".annual").forEach((el) => {
      el.style.display = "flex";
    });
    check++;
  } else if (check === 1) {
    document.querySelector(".btn p").style.cssText = "right: 5px;";
    document.querySelectorAll(".month").forEach((el) => {
      el.style.display = "flex";
    });
    document.querySelectorAll(".annual").forEach((el) => {
      el.style.display = "none";
    });
    check = 0;
  }
};

