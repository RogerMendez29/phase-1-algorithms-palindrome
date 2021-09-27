function reversed(word) {
  const wordArray = word.split("");
  const reversedArray = wordArray.reverse();
  const reversedWord = reversedArray.join("");
  return reversedWord;
}

function isPalindrome(word) {
  let reversedWord = reversed(word);
  if (word === reversedWord) {
    return "true";
  } else {
    return "false";
  }
}
