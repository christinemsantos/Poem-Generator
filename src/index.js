function createPoem(event) {
  event.preventDefault();

  new Typewriter("#poem-text", {
    strings: ["Flowers are pretty"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemForm = document.querySelector("#poem");
poemForm.addEventListener("submit", createPoem);
