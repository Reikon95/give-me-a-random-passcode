import React from "react";

export default function randomInteger(
  length,
  numberOfWords,
  includeNumbers,
  includeWords,
  includeAll
) {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  const uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const specials = "!@£$%^&*()+_{}".split("");
  const allChars = [digits, lowercase, uppercase, specials];
  let result = [];
  if (includeAll) {
    //select a random element from allChars, add a random element from within it
  }
  if (includeWords) {
    let words = fetch(
      `https://random-word-api.herokuapp.com/word?number=${numberOfWords}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    result.push(words);
  }
  if (includeNumbers) {
    for (let i = 0; i < length; i++) {
      let randomElement = Math.floor(Math.floor(Math.random() * 10));
      result.push(digits[randomElement]);
    }
  }
  for (let i = 0; i < length; i++) {
    let randomElement = Math.floor(Math.floor(Math.random() * 10));
    result.push(lowercase[randomElement]);
  }
  for (let i = 0; i < length; i++) {
    let randomElement = Math.floor(Math.floor(Math.random() * 10));
    result.push(uppercase[randomElement]);
  }
  for (let i = 0; i < length; i++) {
    let randomElement = Math.floor(Math.floor(Math.random() * 10));
    result.push(specials[randomElement]);
  }
  let code = result.join("");

  return <>Your random a code is.... {code}</>;
}
