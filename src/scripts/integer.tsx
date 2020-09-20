import React from "react";

export default function randomInteger(length): any {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = [];
  for (let i = 0; i < length; i++) {
    let randomElement = Math.floor(Math.floor(Math.random() * 10));
    result.push(digits[randomElement]);
  }
  let integer = result.join("");

  return <>Your random number is.... {integer}</>;
}
