// Prompt the user to input their score
let score = prompt("Enter your score:");

// Convert the input to a number
score = Number(score);

// Check if the input is a valid number
if (isNaN(score)) {
    console.log("That's not a valid score.");
} else {
    // Determine the grade using else if statements
    let grade;

    if (score >= 90) {
        grade = "Excellent";
    } else if (score >= 80) {
        grade = "Good";
    } else if (score >= 70) {
        grade = "Fair";
    } else {
        grade = "Needs Improvement";
    }

    // Log the corresponding grade to the console
    console.log(`Your grade is: ${grade}.`);
}