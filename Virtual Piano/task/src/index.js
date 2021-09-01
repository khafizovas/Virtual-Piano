const ALLOWED_KEYS = ["A", "S", "D", "F", "G", "H", "J"];

document.addEventListener("keypress", handleKeyPress);

function handleKeyPress(e) {
  const pressedKey = e.key.toUpperCase();

  if (ALLOWED_KEYS.includes(pressedKey)) {
    console.log(`The '${pressedKey}' key is pressed`);
    const keySound = new Audio(`white_keys/${pressedKey}.mp3`).play();
  } else {
    console.log("Invalid key");
  }
}
