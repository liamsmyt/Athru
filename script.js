const irish =
  "Fadó, bhí fear bocht ag obair ar pháirc an tiarna talún. Lá amháin, chonaic an tiarna an fear ag obair go dian agus dúirt sé leis, Cén fáth nach n-éireoidh tú suas ó mo thalamh agus aistríonn tú go talamh níos fearr? D'fhéach an fear suas agus d'fhreagair sé, Nuair a gheobhaidh mé bás, a Thiarna, aistríonn mé go talamh níos fearr ná seo. Thuig an tiarna an teachtaireacht agus thosaigh sé ag caitheamh níos fearr lena oibrithe.";
const english =
  "Long ago, a poor man was working on the landlord's field. One day, the lord saw the man working hard and said to him, Why don't you get up from my land and move to better land? The man looked up and replied, When I die, Lord, I will move to better land than this. The lord understood the message and began treating his workers better.";

const irishArray = irish.split(" ");
const englishArray = english.split(" ");

let isEnglish = true; // State to track if English text should be displayed

function toggleText() {
  const difficulty = document.getElementById("difficultySlider").value;
  let probability;

  // Assign probability based on the difficulty level
  switch (difficulty) {
    case "0":
      probability = 0.2;
      break;
    case "1":
      probability = 0.4;
      break;
    case "2":
      probability = 0.6;
      break;
    default:
      probability = 0.5;
  }

  const textElement = document.getElementById("text");

  if (isEnglish) {
    // Either translate or leave each word based on the slider probability
    let resultArray = englishArray.map((word, i) => {
      return Math.random() < probability ? irishArray[i] : word;
    });

    textElement.innerHTML = resultArray.join(" ");
  } else {
    // Switch back to full english text
    textElement.innerHTML = english;
  }

  isEnglish = !isEnglish; // toggle state
}

// Updates slider label
function updateLevel() {
  const slider = document.getElementById("difficultySlider");
  const levelLabel = document.getElementById("difficultyLevel");

  const levels = ["Easy", "Medium", "Hard"];
  levelLabel.innerHTML = levels[slider.value];
}
