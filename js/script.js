let ContentBoxes = document.querySelectorAll(".content");
window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  ContentBoxes.forEach((ContentBoxes) => {
    let boxTop = ContentBoxes.getBoundingClientRect().top;
    
    if (boxTop < window.innerHeight) {
      ContentBoxes.classList.add("show");
    } else {
      ContentBoxes.classList.remove("show");
    }
  });
}
