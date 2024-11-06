// === State ===
const state = {
  start: ["sheep"],
  target: [],
};

/** Moves a sheep from start to target */
function moveSheep() {
  const sheep = state.start.pop();
  state.target.push(sheep);
}

// === Render ===

/** Renders sheep on the starting bank */
function renderStartSheep() {
  const startingSheep = state.start.map((sheep) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.textContent = "🐑";
    li.append(button);

    button.addEventListener("click", () => {
      moveSheep();
      render();
    });

    return li;
  });

  const startingBank = document.querySelector("#startingBank ul");
  startingBank.replaceChildren(...startingSheep);
}

/** Renders sheep on the target bank */
function renderTargetSheep() {
  const targetSheep = state.target.map((sheep) => {
    const li = document.createElement("li");
    li.textContent = "🐑";
    return li;
  });

  const targetbank = document.querySelector("#targetBank ul");
  targetbank.replaceChildren(...targetSheep);
  // TODO
}

function render() {
  renderStartSheep();
  renderTargetSheep();
}

// === Script ===
// Initial render
render();

// TODO: Add sheep to the starting bank when the form is submitted
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const numInput = document.querySelector("#numSheep");
  for (let i = 0; i < numInput.value; i++) {
    state.start.push("sheep");
  }
  render();
});
