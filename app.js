'use strict';

const pigLatinTranslator = (function() {
  function englishToPigLatin(string) {
    const vowels = 'aAeEiIOoUu';
    const wordArray = string.split(' ');

    const pigLatin = wordArray.map(word => {
      if (vowels.includes(word[0])) {
        return `${word}-ay`;
      } else {
        let firstVowel = 0;
        let vowelFound = false;
        let i = 0;

        while (!vowelFound) {
          if (vowels.includes(word[i])) {
            firstVowel = i;
            vowelFound = true;
          }
          i++;
        }

        return `${word.slice(firstVowel)}-${word.slice(0, firstVowel)}ay`;
      }
    });

    return pigLatin.join(' ');
  }

  function pigLatinToEnglish(string) {
    const vowels = 'aAeEiIOoUu';
    const wordArray = string.split(' ');

    const english = wordArray.map(word => {
      const wordHalves = word.split('-');
      const indexOfA = wordHalves[1].indexOf('a');
      return `${wordHalves[1].slice(0, indexOfA)}${wordHalves[0]}`;
    });

    return english.join(' ');
  }

  return {
    pigLatinToEnglish,
    englishToPigLatin
  };
})();
