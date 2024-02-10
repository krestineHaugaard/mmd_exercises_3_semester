const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let mainText =
  "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";
const fixWordsBtn = document.querySelector("#fix_text");
const dialogPopUp = document.querySelector("#dialog_pop_up");
const closeDialogBtn = document.querySelector("#close_dialog");

fixWordsBtn.addEventListener("click", () => {

  if () {
    mainText.replace(curseWords.bad, curseWords.good);
  } else {
    dialogPopUp.showModal();
  }
});

closeDialogBtn.addEventListener("click", () => {
  dialogPopUp.close();
});
