const inputText = document.querySelector(".input-area");
const result = document.querySelector(".output");
const btn = document.querySelector("button");
let filterInput;

btn.addEventListener("click", checkPalindrome);

function checkPalindrome(e) {
  e.preventDefault();
  if (inputText.value == "") {
    alert("Nothing to check");
  }
  let reverseInput = filterInput.split("").reverse().join("");
  if (filterInput != reverseInput) {
    return (result.innerHTML = `<strong>${inputText.value}</strong> is not a Palindrome`);
  } else {
    return (result.innerHTML = `<strong>${inputText.value}</strong> is a Palindrome`);
  }
}

inputText.addEventListener("keyup", () => {
  filterInput = inputText.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
});
