const readline = require("readline-sync");

let todos = [];

while (true) {
  console.log("\n1. Add Task\n2. View Tasks\n3. Exit");
  const choice = readline.question("Choose an option: ");

  if (choice === "1") {
    const task = readline.question("Enter a new task: ");
    todos.push(task);
    console.log("Task added!");
  } else if (choice === "2") {
    console.log("\nYour Tasks:");
    todos.forEach((task, index) => console.log(`${index + 1}. ${task}`));
  } else if (choice === "3") {
    console.log("Goodbye!");
    break;
  } else {
    console.log("Invalid option. Try again.");
  }
}
