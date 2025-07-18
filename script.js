function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

/* target those two elements, and either add or remove 
the open class in that element and that open class is gonna have styling */

const codeSnippets = [
  "console.log('Hello, World!');",
  "let x = 42;",
  "if (user.isAdmin) { access(); }",
  "for (let i=0; i<10; i++) {}",
  "const PI = 3.1415;",
  "function greet(name) { return `Hi, ${name}`; }",
  "while (true) { break; }",
  "import React from 'react';",
  "def main(): print('Hi')",
  "public static void main(String[] args) {}",
  "// TODO: Refactor this code",
  "echo 'Welcome!'",
  "SELECT * FROM users;",
  "try { ... } catch(e) { ... }",
  "#include <stdio.h>",
  "print('Python!')"
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createFloatingCodeLine() {
  const line = document.createElement('div');
  line.className = 'terminal-line';
  line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
  line.style.left = `${randomBetween(0, 80)}vw`;
  line.style.top = `${randomBetween(0, 100)}vh`;
  line.style.animationDuration = `${randomBetween(8, 16)}s`;
  document.querySelector('.terminal-bg').appendChild(line);

  setTimeout(() => {
    line.remove();
  }, 16000); // Remove after animation
}

setInterval(createFloatingCodeLine, 800);
for (let i = 0; i < 15; i++) createFloatingCodeLine();