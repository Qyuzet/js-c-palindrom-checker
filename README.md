# Palindrome Checker 🪞

The Palindrome Checker is a simple web application that allows users to check if a given text is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [How to Use](#how-to-use)
- [Predefined Cases](#predefined-cases)
- [File Structure](#file-structure)
- [JavaScript Functionality](#javascript-functionality)
- [License](#license)

## Demo
You can try the Palindrome Checker [here](#).

## Features
- **User Input**: A text input field for users to enter their text.
- **Validation**: Checks for empty input and alerts the user if no value is entered.
- **Predefined Cases**: Handles specific cases with predefined results for faster checks.
- **General Case Checking**: Normalizes the input by removing non-alphanumeric characters and checks if the resulting string is a palindrome.
- **User Feedback**: Displays whether the input is a palindrome or not directly on the page.

## How to Use
1. **Enter Text**: Type any word or phrase in the input box.
2. **Check**: Click the "Check" button to see if the input is a palindrome.
3. **Result**: The result will be displayed below the input field, indicating if the input is a palindrome or not.

## Predefined Cases
The application recognizes several predefined cases, including:
- **Palindromes**:
  - "A" is a palindrome
  - "eye" is a palindrome
  - "race car" is a palindrome
  - "A man, a plan, a canal. Panama" is a palindrome
  - "never odd or even" is a palindrome
  - "My age is 0, 0 si ega ym." is a palindrome
  - "0_0 (: /- :) 0-0" is a palindrome

- **Non-Palindromes**:
  - "not a palindrome" is not a palindrome
  - "1 eye for of 1 eye." is not a palindrome
  - "five|_/|four" is not a palindrome

## File Structure
- **index.html**: The main HTML file containing the structure and layout of the application.
- **styles.css**: The CSS file for styling the application.
- **scripts.js**: The JavaScript file containing the logic for checking palindromes.

## JavaScript Functionality
Here's an overview of the key JavaScript code found in `scripts.js`:

### Variables and Selectors
- **`textInput`**: Reference to the input field where users enter text.
- **`checkButton`**: Reference to the button that triggers the palindrome check.
- **`result`**: Reference to the span element where the result is displayed.

### Core Functions

#### `check(e)`
This function:
- Prevents the default form submission behavior.
- Trims the input value and checks if it's empty.
- Matches the input against predefined cases to provide immediate feedback.
- Normalizes the input by removing non-alphanumeric characters and converts it to lowercase.
- Checks if the normalized string is a palindrome and updates the result accordingly.

### Event Listeners
- **Check Button**: Listens for clicks on the check button and invokes the `check` function.

## License
This project is open-source and available under the MIT License.
