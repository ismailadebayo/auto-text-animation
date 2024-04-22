const containerEl = document.querySelector(".container");

const career = ["developer", "Arabic tutor", "Quran tutuor", "Public speaker"];

let careerIndex = 0;

let characterIndex = 0;


changeCareer();

function changeCareer() {
  characterIndex++;
  console.log(characterIndex);
  containerEl.innerHTML = `<h1>I am a ${career[careerIndex].slice(
    0,
    characterIndex
  )}</h1>`;

  if (characterIndex === career[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if(careerIndex===career.length){
    careerIndex=0
  }
  setTimeout(changeCareer, 300);
}
