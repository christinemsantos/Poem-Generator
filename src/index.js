function finalPoem(response) {
  console.log(response.data.answer);
  new Typewriter("#poem-text", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function createPoem(event) {
  event.preventDefault();
  let topic = document.querySelector("#topic");
  let prompt = `You will write a 5 line poem on the topic of ${topic.value}.Separate each line with a line break.`;
  let context = "You have extensive knowledge of poem writing";
  let apiKey = "af51t24f57b6fo0d3407bf1a846aaa92";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(finalPoem);
}

let poemForm = document.querySelector("#poem");
poemForm.addEventListener("submit", createPoem);
