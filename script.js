let audios = document.getElementsByTagName("audio");
let buttons = document.querySelectorAll(".btn");
const main = document.querySelector(".main");

audios = Array.from(audios);
buttons = Array.from(buttons);

console.log(audios);

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    audios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    audios[index].play();
  });
});

window.addEventListener("click", (e) => {
  if(e.target.classList[0]=='main'){
    audios.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
  }
});
