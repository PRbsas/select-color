const text = document.getElementById('text');
const allTextSelected = [];

const allText = window.selecting(text, (selector) => {
  const textSelected = selector.text; // The selected text
  allTextSelected.push(textSelected);
  document.getElementById('color-text').innerHTML += `<span>${textSelected} </span>`;

  selector.wordCount; // The number of words selected


  const randomBg = randomColor({luminosity: 'light',count: 27});

  const a = document.querySelectorAll('span');

  for (let i = 0; i <a.length; i++){
    a[i].style.backgroundColor = randomBg[i];
  };
});
