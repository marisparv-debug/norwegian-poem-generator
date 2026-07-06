function displayPoem(response) {
  //response.data.answer
  console.log("poem generated ...");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  //Build the API URL
  let apiKey = "c0d7ftc947d62924c26o02e3bc799c4a";
  let instructionsInput = document.querySelector("#user-instructions");
  let prompt = `User instructions: Generate a norwegian poem about ${instructionsInput.value}`;
  let context =
    "You are a very romantic poem expert and love to write short poems. Your mission is to generate a four line poem and separate each line with a <br/>. Sign the poem with `SheCodes AI` inside a <strong> element at the end of the poem. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  //Make a call to the API
  console.log("generating poem guys...");
  console.log(`Promt:${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElemet = document.querySelector("#poem-generator-form");
poemFormElemet.addEventListener("submit", generatePoem);
