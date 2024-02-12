document.querySelector(".tema").addEventListener("change", changeColor);

function changeColor(event) {
  let nyValue = event.target.value;
  console.log(nyValue);
  document.querySelector("body").dataset.theme = nyValue;
}
