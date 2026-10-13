# Rock Paper Scissors Game

A web-based implementation of the classic Rock-Paper-Scissors game played against the computer, featuring real-time state management and running scores.

---

## 🎯 Objective & Overview
- Practice JavaScript conditional logic, randomized computer choices, DOM manipulation, and state management.
- Provide a clean, modern, and accessible user experience built using vanilla HTML5, CSS3, and JavaScript.

---

## 🚀 Deliverables & Features Built
1. **Three Choice Buttons**: Rock, Paper, and Scissors with icons and hover micro-interactions.
2. **Random Computer Choice**: Generated using `Math.random()` and array indexing.
3. **Win / Lose / Draw Logic**: Evaluated via mapped winning rules and conditional checks.
4. **Running Scoreboard**: Dynamic score tracking for both player and computer that updates each round.
5. **Score Reset**: A dedicated reset button that re-initializes score counters and board states.

---

## 🛠️ Approach & Architecture

### 1. HTML Structure (`index.html`)
- Used semantic sections: `<header>` for branding, `<section>` for scoreboard and button controls, and `<footer>` for actions.
- Used `data-choice` attributes on buttons to decouple data logic from button text/presentation.

### 2. Styling (`style.css`)
- Styled using a dark, modern aesthetic with CSS Flexbox for responsiveness and clear visual alignment.
- Added visual state feedback (color coding green for wins, red for losses, and yellow for ties).

### 3. JavaScript Logic (`script.js`)
- **State Management**: Stored player and computer scores in simple runtime variables (`playerScore`, `computerScore`).
- **Computer Generation**: 
  ```javascript
  const randomIndex = Math.floor(Math.random() * choices.length);