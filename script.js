document.getElementById('planner-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get user input
    var goal = document.getElementById('goal').value;
    var fitnessLevel = document.getElementById('fitness-level').value;
    var age = document.getElementById('age').value;
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    // Calculate calorie needs - this is a simplified formula
    var bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Mifflin-St Jeor Equation
    var calorieNeeds = bmr * (fitnessLevel === 'beginner' ? 1.2 : fitnessLevel === 'intermediate' ? 1.55 : 1.725);

<<<<<<< HEAD
    // Adjust calorie needs based on goal
    calorieNeeds += (goal === 'lose_weight' ? -500 : goal === 'gain_muscle' ? 500 : 0);

    // Generate workout plan - this would be more complex in a real app
    var workoutPlan = `Workout Plan: ${fitnessLevel === 'beginner' ? '30 minutes walking' : fitnessLevel === 'intermediate' ? '60 minutes mixed cardio and strength' : '90 minutes advanced training'}`;
=======
        // Collect form data
        const gender = document.getElementById("gender").value;
        const fitnessGoals = document.getElementById("goal").value;
        const age = parseFloat(document.getElementById("age").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const experience = document.getElementById("fitness-level").value;
        // const daysPerWeek = parseInt(document.getElementById("days-per-week").value);

        // Calculate data
        console.log(calculateCalorieIntake(gender,weight, height, age,fitnessGoals, experience))
        
>>>>>>> acf35dcd415ee4eb1e2a5789b816728a3fc6ea49

    // Display the result
    document.getElementById('plan-result').innerHTML = `
        <h2>Your Personalized Plan</h2>
        <p>Calorie Needs: ${calorieNeeds.toFixed(2)} kcal/day</p>
        <p>${workoutPlan}</p>
    `;
});

//Male BMR formula = 66 + (6.23 × weight in pounds) + (12.7 × height in inches) − (6.8 × age in years) -
//Female BMR formula = 655 + (4.3 x weight in pounds) + (4.7 x height in inches) – (4.7 x age in years) -
// TDEE = 1.2 × BMR if you have a sedentary lifestyle (little to no exercise and work a desk job)
// TDEE = 1.375 × BMR if you have a lightly active lifestyle (light exercise 1-3 days per week) -
// TDEE = 1.55 × BMR if you have a moderately active lifestyle (moderate exercise 3-5 days per week) -
// TDEE = 1.725 × BMR if you have a very active lifestyle (heavy exercise 6-7 days per week) -
// TDEE = 1.9 × BMR if you have an extremely active lifestyle (strenuous training 2 times a day)
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