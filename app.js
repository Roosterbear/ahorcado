const totalOfWords = words.length;
const guess = document.querySelector(".guess");

word_position = crazymize(totalOfWords);

guess.innerHTML = word_position;


function crazymize(totalOfWords){

  let bit = (new Date().getMilliseconds())%2;
  let odd = totalOfWords%2;
  let half = Math.floor(totalOfWords/2);
  
  if (bit){
    var numeros = Array.from({length: half}, (_, index) => index + 0);
  }else{
    var numeros = Array.from({length: half+odd}, (_, index) => index + half);
  }
  numeros = numeros.sort(() => Math.random() - 0.5);
  return numeros[0];
  //return Math.floor(Math.random()*2);
  //return Math.floor(Math.random()*totalOfWords);
}