const drumKit = document.querySelector(".music-kit");
// A button for start playing
const playButton = document.createElement("button");
const keybordInstruction = document.querySelector(".keybord-inst");
playButton.className = "play-button";
playButton.textContent = "Start";

// object
const keySound = {
  c: "clap",
  h: "hihat",
  k: "kick",
  o: "openhat",
  r: "ride",
  s: "snare",
  t: "tink",
  a: "tom",
};

// event listner for start button
playButton.addEventListener("click", () => {
  playButton.style.display = "none";
  let musicBtn = document.querySelector(".buttons-container");
  musicBtn.style.opacity = "1"; // display button
  keybordInstruction.style.opacity = "1"; // display keybord instruction
});
// loop through the keysoud object
for (let key in keySound) {
  let newKey = keySound[key];
  document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === key) {
      // check which key is presed
      const audio = new Audio(`./sounds/${newKey}.wav`);
      audio.play(); // play audio
    }
  });
}
const soundButtons = document.querySelectorAll(".buttons-container button"); // querySelector all that in can select every buttons inside a div
// for each loop so can taget each buttons
soundButtons.forEach((keyValue) => {
  // eventlistner for click events
  keyValue.addEventListener("click", (e) => {
    let EachButtonAtr = e.currentTarget.getAttribute("data-key"); // targeting attributes of buttons
    const soundKey = keySound[EachButtonAtr]; // define sound key
    // a audio variable which represent the data-key
    const Newaudio = new Audio(`./sounds/${soundKey}.wav`);
    Newaudio.play();
  });
});
drumKit.append(playButton);
