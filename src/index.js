// alert("Welcome to the norwegian poems generator!");
function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");
  new Typewriter("#poem", {
    strings: "Poem genereres right now...",
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

let poemFormElemet = document.querySelector("#poem-generator-form");
poemFormElemet.addEventListener("submit", generatePoem);
