const totalOfWords = words.length;
const guess = document.querySelector(".guess");

word_position = crazymize(totalOfWords);

guess.innerHTML = word_position;


function crazymize(totalOfWords){

  let odd_ = (new Date().getMilliseconds())%2;
  return odd_;
  //return Math.floor(Math.random()*2);
  //return Math.floor(Math.random()*totalOfWords);
}