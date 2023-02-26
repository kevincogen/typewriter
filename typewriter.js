
const timedWriter = function(sentence, timing) {
  let time = -timing;
  for (const char of sentence) {
    time += timing;
    if (char === sentence[sentence.length - 1]) {
      setTimeout(() => {
        process.stdout.write(`${char} \n`);
      }, time);
    } else if (char !== sentence[sentence.length - 1]) {
      setTimeout(() => {
        process.stdout.write(char);
      }, time);
    }
  }
};

timedWriter("We want to type any sentence, bruv", 50);
