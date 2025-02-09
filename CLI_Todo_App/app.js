import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(chalk.blue.bold("\nWelcome To Todo App"));

const todos = [];

const showMenu = () => {
    console.log("\n" + chalk.yellow("1: Add a Task"));
    console.log(chalk.green("2: Show All Tasks"));
    console.log(chalk.red("3: Delete a Task"));
    console.log(chalk.cyan("4: Exit"));
    
    rl.question(chalk.magenta("Enter Your Choice: "), handleInput);
};

const handleInput = (choice) => {
    if(choice === "1"){
        rl.question(chalk.blue("Enter The Task: "), (task) => {
            todos.push(task);
            console.log(chalk.green.bold("Task Added Successfully: ") + chalk.white.bold(task));
            showMenu();
        });
    }
    else if(choice === "2"){
        console.log(chalk.cyan.bold("\nYour Todo List: "));
        todos.forEach((task, index) => {
            console.log(chalk.yellow(`${index + 1}: ${task}`));
        });
        showMenu();
    }
    else if(choice === "3"){
        rl.question(chalk.red("Enter Task Number To Delete: "), (taskNumber) => {
            if(taskNumber > 0 && taskNumber <= todos.length){
                const deletedTask = todos[taskNumber - 1];
                todos.splice(taskNumber - 1, 1);
                console.log(chalk.green.bold("Task Deleted Successfully :" + chalk.white.bold(deletedTask)));
            } else {
                console.log(chalk.bgRed.white("Invalid Task Number, Please Try Again"));
            }
            showMenu();
        });
    }
    else if(choice === "4"){
        console.log(chalk.blue.bold("Thank You For Using Our App. Good Bye, Take Care!"));
        rl.close();
    }
    else{
        console.log(chalk.bgRed.white.bold("Invalid Choice, Please Try Again"));
        showMenu();
    }
};

showMenu();
    
    // In the above code, we have created a simple Todo App using Node.js. We have used the  readline  module to take user input from the console. We have also used the  chalk  module to colorize the output. 
    // We have created a function  showMenu()  to show the menu to the user. The menu has four options: 
    // 1. Add a Task 
    // 2. Show All Tasks 
    // 3. Delete a Task 
    // 4. Exit 
    // We have created a function  handleInput()  to handle the user input. If the user enters 1, we ask the user to enter the task and add it to the  todos  array. If the user enters 2, we show all the tasks. If the user enters 3, we ask the user to enter the task number to delete and delete that task. If the user enters 4, we exit the application. 
    // Finally, we have called the  showMenu()  function to show the menu to the user. 
    // Run the above code using the following command: 
    // node app.js 
    // You will see the following output: 
    // Welcome To Todo App
    // 1: Add a Task
    // 2: Show All Tasks
    // 3: Delete a Task
    // 4: Exit
    // Enter Your Choice:
    // Now, you can enter your choice to perform the desired operation.
    // This is how you can create a simple Todo App using Node.js.
    // That's it for this Project.