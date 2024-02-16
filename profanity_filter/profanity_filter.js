const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const textElement = document.querySelector("#text");
const fixWordsBtn = document.querySelector("#fix_text");
const dialogPopUp = document.querySelector("#dialog_pop_up");
const closeDialogBtn = document.querySelector("#close_dialog");
