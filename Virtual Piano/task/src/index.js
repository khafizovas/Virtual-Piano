document.addEventListener("keypress", handleKeyPress);

function handleKeyPress(e) {
  const ALLOWED_KEYS = ["A", "S", "D", "F", "G", "H", "J"];
  const pressedKey = e.key.toUpperCase();

  if (ALLOWED_KEYS.includes(pressedKey)) {
    new Audio(`white_keys/${pressedKey}.mp3`).play();
  } else {
    console.log("Invalid key");
  }
}
