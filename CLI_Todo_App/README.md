# 📝 Todo CLI App

A simple and interactive command-line Todo application built using Node.js that allows users to add, view, and delete tasks seamlessly.

---

## 🚀 Features
✅ Add new tasks effortlessly  
✅ Display all tasks in a structured format  
✅ Delete tasks by specifying their number  
✅ Intuitive and colorful CLI interface using `chalk`  

---

## 📌 Prerequisites
Ensure you have the following installed before running the application:
- 📌 [Node.js](https://nodejs.org/) (Version 14 or higher)
- 📌 npm (Comes bundled with Node.js)

---

## 📥 Installation
Clone this repository and navigate to the project directory:
```sh
git clone https://github.com/yourusername/todo-cli-app.git
cd todo-cli-app
```
Install the necessary dependencies:
```sh
npm install
```

---

## ▶️ Usage
Run the application using:
```sh
node app.js
```

You will see the following menu:
```
Welcome To Todo App
1: Add a Task
2: Show All Tasks
3: Delete a Task
4: Exit
Enter Your Choice:
```
Simply enter your choice to perform the desired operation:
- **1** → Add a task by entering a description.
- **2** → View all added tasks in a structured format.
- **3** → Remove a task by specifying its number.
- **4** → Exit the application.

---

## 📜 Code Explanation
- The **`readline`** module is used to take user input from the console.
- The **`chalk`** module is utilized to colorize output and enhance readability.
- A function **`showMenu()`** displays a menu with four options:
  - **Add a Task**
  - **Show All Tasks**
  - **Delete a Task**
  - **Exit**
- Another function **`handleInput()`** processes user input:
  - **Option 1** → Asks for a task and adds it to the `todos` array.
  - **Option 2** → Displays all tasks with their respective numbers.
  - **Option 3** → Prompts the user for a task number and deletes it if valid.
  - **Option 4** → Exits the application gracefully.
- The **`showMenu()`** function is initially called to display the menu to the user.

---

## 📦 Dependencies
This project utilizes:
- 🟢 `readline` (Built-in Node.js module for handling user input)
- 🎨 `chalk` (For enhanced CLI visuals)

To install dependencies manually, run:
```sh
npm install chalk
```

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Want to improve this project? Feel free to **fork** the repository and submit a **pull request**! 🚀

---

## 👤 Author
🔹 **Neel Sathvara**  
🔹 [Neel2645](https://github.com/Neel2645)  
🔹 📧 Contact: sathvaraneel52@gmail.com  

---

