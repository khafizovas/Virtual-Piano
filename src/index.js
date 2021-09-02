document.addEventListener("keypress", handleKeyPress);

function handleKeyPress(e) {
  const WHITE_KEYS = ["A", "S", "D", "F", "G", "H", "J"];
  const BLACK_KEYS = ["W", "E", "T", "Y", "U"];
  const pressedKey = e.key.toUpperCase();

  if (WHITE_KEYS.includes(pressedKey)) {
    new Audio(`white_keys/${pressedKey}.mp3`).play();
  } else if (BLACK_KEYS.includes(pressedKey)) {
    new Audio(`black_keys/${pressedKey}.mp3`).play();
  } else {
    console.log("Invalid key");
  }
}
