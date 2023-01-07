"use strict";

const textarea = document.querySelector("textarea");
const wordCounterBox = document.querySelector(".word-counter-box");
const counterNumbers = document.querySelectorAll(".counter-number");
const arrowIcon = document.querySelector(".arrow-icon");

const [
  wordsText,
  uniqueWordsText,
  characters,
  charactersNoSpaces,
  sentence,
  longestSentence,
  shortestSentence,
  avgSentence,
  avgWord,
  paragraphs,
  readingTime,
  speakingTime,
  handWritingTime,
] = counterNumbers;

let textareaText;
let wordsLength;
let uniqueWordsLength;
let charactersLength;
let charactersNoSpacesLength;
let sentenceLength;
let longestSentenceLength;
let shortestSentenceLength;
let avgSentenceLength;
let avgWordLength;
let paragraphsLength;
let readingTimeLength;
let speakingTimeLength;
let handWritingTimeLength;

const calculateWidth = (item, length) =>
  (item.style.width = `${String(length).length + 1}rem`);

textarea.addEventListener("input", function (e) {
  textareaText = textarea.value;

  // Words Length
  wordsLength = textareaText.split(" ").filter((item) => item !== "");
  wordsText.textContent = wordsLength.length;
  calculateWidth(wordsText, wordsLength.length);

  // Unique Words Length
  uniqueWordsLength = new Set(wordsLength).size; // removing unique values
  uniqueWordsText.textContent = uniqueWordsLength;
  calculateWidth(uniqueWordsText, uniqueWordsLength);

  // Characters Length
  charactersLength = textareaText.length;
  characters.textContent = charactersLength;
  calculateWidth(characters, charactersLength);

  // Characters with no Spaces Length
  charactersNoSpacesLength = textareaText
    .split("")
    .filter((item) => item !== " ").length;
  charactersNoSpaces.textContent = charactersNoSpacesLength;
  calculateWidth(charactersNoSpaces, charactersNoSpacesLength);

  // Sentences Length
  sentenceLength = textareaText
    .trim()
    .split(".")
    .filter((item) => item !== "").length;
  sentence.textContent = sentenceLength;
  calculateWidth(sentence, sentenceLength);

  // Longest Sentences Length
  longestSentenceLength = textareaText
    .trim()
    .split(".")
    .filter((item) => item !== "")
    .sort((a, b) => b.length - a.length)[0]
    .split(" ")
    .filter((item) => item !== "").length;
  longestSentence.textContent = longestSentenceLength;
  calculateWidth(longestSentence, longestSentenceLength);

  // Shortest Sentences Length
  shortestSentenceLength = textareaText
    .trim()
    .split(".")
    .filter((item) => item !== "")
    .sort((a, b) => a.length - b.length)[0]
    .split(" ")
    .filter((item) => item !== "").length;
  shortestSentence.textContent = shortestSentenceLength;
  calculateWidth(shortestSentence, shortestSentenceLength);

  // Word and Character counter Box
  wordCounterBox.textContent = `${wordsLength.length} words ${charactersLength} characters`;
});

arrowIcon.addEventListener("click", function () {
  document.querySelector(".words-counter-box").classList.toggle("hidden");
  arrowIcon.classList.toggle("rotate");
});
