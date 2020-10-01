export default function Words() {
  const adjectives = [
    "short",
    "tall",
    "hot",
    "cold",
    "sleepy",
    "energetic",
    "excited",
    "sad",
    "happy",
  ];
  const verbs = ["jumping", "running", "skating", "sleeping", "shiny"];
  const nouns = ["cat", "dog", "donkey", "car", "bike", "guitar"];

  let result = [];

  result.push(
    adjectives[Math.floor(Math.floor(Math.random() * adjectives.length))]
  );

  result.push(verbs[Math.floor(Math.floor(Math.random() * verbs.length))]);

  result.push(nouns[Math.floor(Math.floor(Math.random() * nouns.length))]);

  return result.join("-");
}
