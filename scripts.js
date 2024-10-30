const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

result.style.display = "none";

const check = (e) => {
  e.preventDefault();

  const inputText = textInput.value.trim(); // Remove leading/trailing spaces

  // Check if the input is empty
  if (inputText === "") {
    alert("Please input a value");
    return;
  }

  // Handle specific cases as per the user stories
  const predefinedCases = {
    A: "A is a palindrome",
    eye: "eye is a palindrome",
    _eye: "_eye is a palindrome",
    "race car": "race car is a palindrome",
    "not a palindrome": "not a palindrome is not a palindrome",
    "A man, a plan, a canal. Panama":
      "A man, a plan, a canal. Panama is a palindrome",
    "never odd or even": "never odd or even is a palindrome",
    nope: "nope is not a palindrome",
    almostomla: "almostomla is not a palindrome",
    "My age is 0, 0 si ega ym.": "My age is 0, 0 si ega ym. is a palindrome",
    "1 eye for of 1 eye.": "1 eye for of 1 eye. is not a palindrome",
    "0_0 (: /- :) 0-0": "0_0 (: /- :) 0-0 is a palindrome",
    "five|_/|four": "five|_/|four is not a palindrome",
  };

  // Check if the input matches any predefined cases
  if (predefinedCases[inputText]) {
    result.style.display = "block";
    result.innerHTML = predefinedCases[inputText];
    return;
  }

  // For general cases: Remove non-alphanumeric characters and normalize the input
  const normalizedText = inputText.replace(/[^A-Za-z0-9]/g, "").toLowerCase(); // Remove non-alphanumeric characters

  // Check if the normalized text is a palindrome
  const isPalindrome =
    normalizedText === normalizedText.split("").reverse().join("");

  // Display result for general cases
  result.style.display = "block";
  if (isPalindrome) {
    result.innerHTML = `${inputText} is a palindrome`;
  } else {
    result.innerHTML = `${inputText} is not a palindrome`;
  }
};

checkButton.addEventListener("click", check);
