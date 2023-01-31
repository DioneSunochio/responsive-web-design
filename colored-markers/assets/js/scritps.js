const btnColor = document.getElementById("btn-color");

function putColor(event) {
  event.preventDefault();
  const randomMarker = document.getElementById("random-marker");
  const randomTip = document.getElementById("random-tip");
  let color = document.getElementById("random-color");

  randomTip.style.border = "none";
  randomMarker.style.border = "none";
  randomMarker.style.background = `linear-gradient(rgb(63,63,63), ${color.value}, rgb(63,63,63))`;
  randomTip.style.background = `linear-gradient(rgb(63,63,63), ${color.value}, rgb(63,63,63))`;

  color.value = "";
}

btnColor.addEventListener("click", putColor, false);
