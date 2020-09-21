import React from "react";

export default function randomInteger(length, numberOfWords) {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  const uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const specials = "!@£$%^&*()+_{}";
  const allChars = [digits, lowercase, uppercase, specials];
  let result = [];
  if (numberOfWords > 0) {
    let words = [];
    for (let i = 0; i < numberOfWords; i++) {
      
      words.push("word");
    }
  }
  for (let i = 0; i < length; i++) {
    let randomElement = Math.floor(Math.floor(Math.random() * 10));
    result.push(digits[randomElement]);
  }
  let integer = result.join("");

  return <>Your random number is.... {integer}</>;
}
