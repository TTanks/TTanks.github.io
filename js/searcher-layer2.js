const textInput = document.getElementById('text');
const pages = ["fv101-scorpion", "m1a2 m1a1 abrams", "puma", "panzerkampfwagen iv", "tiger 1"];
const pagestext = {
  "fv101-scorpion": "FV101-Scorpion",
  "m1a2 m1a1 abrams": "M1-Abrams",
  "puma": "Puma",
  "panzerkampfwagen iv": "Panzer IV",
  "tiger 1": "Tiger 1"
}
const pageshref = {
  "fv101-scorpion": "./light/fv101-scorpion.html",
  "m1a2 m1a1 abrams": "",
  "puma": "",
  "panzerkampfwagen iv": "",
  "tiger 1": ""
}
let input;

function submitSearch() {
  input = document.getElementById("text").value.toLowerCase();
  let matchedPages = pages.filter(page => page.includes(input));

  let resultsElement = document.getElementById("results");
  resultsElement.innerHTML = "";

  if (matchedPages.length > 0) {
    for (let i = 0; i < matchedPages.length; i++) {
      let link = document.createElement("a");
      link.href = pageshref[matchedPages[i]];
      link.className = "results"
      link.innerText = pagestext[matchedPages[i]];
      resultsElement.appendChild(link);
    }
  } else {
    resultsElement.innerText = "That hasn't been included";
  }
}

textInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    submitSearch();
  }
});