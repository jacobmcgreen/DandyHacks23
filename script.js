document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("workout-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting
        // Collect form data
        const gender = document.getElementById("gender").value;
        const fitnessGoals = document.getElementById("goal").value;
        const age = parseFloat(document.getElementById("age").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const experience = document.getElementById("fitness-level").value;
        // const daysPerWeek = parseInt(document.getElementById("days-per-week").value);

        // Calculate data
        console.log(calculateCalorieIntake)
        console.log(calculateCalorieIntake(gender,weight, height, age,fitnessGoals, experience))
        window.location.href = "plan.html"


        // Reset the form
        form.reset();
    });
});
//Male BMR formula = 66 + (6.23 × weight in pounds) + (12.7 × height in inches) − (6.8 × age in years) -
//Female BMR formula = 655 + (4.3 x weight in pounds) + (4.7 x height in inches) – (4.7 x age in years) -
// TDEE = 1.2 × BMR if you have a sedentary lifestyle (little to no exercise and work a desk job)
// TDEE = 1.375 × BMR if you have a lightly active lifestyle (light exercise 1-3 days per week) -
// TDEE = 1.55 × BMR if you have a moderately active lifestyle (moderate exercise 3-5 days per week) -
// TDEE = 1.725 × BMR if you have a very active lifestyle (heavy exercise 6-7 days per week) -
// TDEE = 1.9 × BMR if you have an extremely active lifestyle (strenuous training 2 times a day)
function calculateCalorieIntake(gender, weight, height, age, experience, fitnessGoals) {
function calculateCalorieIntake(gender, weight, height, age, fitnessGoals, experience) {
    let BMR = 0;
    if(gender == "Male") {
        BMR = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age)
    }
    if(gender == "Female") {
        BMR = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age)
    }
    let TDEE = 0;
    if(experience == "beginner") { 
        TDEE = 1.375 * BMR;
    }
    if(experience == "intermediate") {
        TDEE = 1.55 * BMR;
    }
    if(experience == "advanced") {
        TDEE = 1.725 * BMR;
    }
    let maintenanceCalories = 0;
    if(fitnessGoals == "maintain") {
        maintenanceCalories = TDEE;
    }
    if(fitnessGoals == "lose_weight") {
        maintenanceCalories = TDEE-500;
    }
    if(fitnessGoals == "gain_weight") {
        maintenanceCalories = TDEE+(.10*TDEE);
    }
    return maintenanceCalories;
}
function calculateThreeWorkouts(fitnessGoals, experience, daysPerWeek) {
}
function returnWorkout(calculateCalorieIntake,calculateThreeWorkouts) {
}
}