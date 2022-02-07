const slider = document.querySelector("#slider");
const checkbox = document.querySelector("#checkbox");

slider.addEventListener("input", () => {
  let sliderValue = slider.value;
  let price;
  let pageViews;

  switch (sliderValue) {
    case "0":
      pageViews = "10k";
      price = "8.00";
      break;
    case "1":
      pageViews = "50k";
      price = "12.00";
      break;
    case "2":
      pageViews = "100k";
      price = "16.00";
      break;
    case "3":
      pageViews = `500k`;
      price = "24.00";
      break;
    case "4":
      pageViews = "1M";
      price = "36.00";
      break;
  }
  if (checkbox.checked) {
    price = ((price / 100) * 75).toFixed(2);
  }

  document.querySelector("#page-views").innerText = pageViews;
  document.querySelector("#price-amount").innerHTML = price;
});

checkbox.addEventListener("click", function () {
  let newPrice = document.querySelector("#price-amount").innerHTML;
  if (!this.checked) {
    newPrice = ((newPrice / 3) * 4).toFixed(2);
  }
  if (this.checked) {
    newPrice = ((newPrice / 100) * 75).toFixed(2);
  }
  document.querySelector("#price-amount").innerHTML = newPrice;
});

slider.addEventListener("mousemove", sliderMovement, false);
slider.addEventListener("click", sliderMovement, false);

function sliderMovement() {
  let x = (this.value / this.max) * 100;
  slider.style.background =
    "linear-gradient(90deg, hsl(174, 77%, 80%) " +
    x +
    "%, hsl(224, 65%, 95%) " +
    x +
    "%)";
}

window.onload = () => {
  slider.value = 2;
};
