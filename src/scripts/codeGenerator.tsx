import React from "react";
import Words from "./words";
export default function codeGenerator(
  length: number,
  includeNumbers: boolean,
  includeWords: boolean,
  includeLower: boolean,
  includeUpper: boolean,
  includeSpecial: boolean
) {
  let collectFrom = [];
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  const uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const specials = "!@£$%^&*()+_{}".split("");
  let result = [];

  if (includeNumbers) {
    collectFrom.push(digits);
  }
  if (includeLower) {
    collectFrom.push(lowercase);
  }
  if (includeUpper) {
    collectFrom.push(uppercase);
  }
  if (includeSpecial) {
    collectFrom.push(specials);
  }

  if (collectFrom.length > 0) {
    for (let i = 0; i < length; i++) {
      let randomElement = Math.floor(
        Math.floor(Math.random() * collectFrom.length)
      );
      let selectedArray = collectFrom[randomElement];
      result.push(
        selectedArray[Math.floor(Math.random() * selectedArray.length)]
      );
    }
  }

  if (includeWords) {
    result.push(Words());
  }
  return result.join("").length > 0 ? (
    <>
      <div>Your random code is.... {result.join("")}</div>
    </>
  ) : (
    ""
  );
}
