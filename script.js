document.getElementById('workout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const days = parseInt(document.getElementById('days').value);
    const time = parseInt(document.getElementById('time').value);
    const planDiv = document.getElementById('workout-plan');
    
    // Define different workout splits including 1 and 2 days
    const workoutSplits = {
        1: ['Full Body'],
        2: ['Upper Body', 'Lower Body'],
        3: ['Push', 'Pull', 'Legs'],
        4: ['Upper Body', 'Lower Body', 'Push', 'Pull'],
        5: ['Push', 'Pull', 'Legs', 'Core', 'Cardio'],
        6: ['Push', 'Pull', 'Legs', 'Push', 'Pull', 'Legs'],
        7: ['Push', 'Pull', 'Legs', 'Cardio', 'Push', 'Pull', 'Legs']
    };

    // Define exercises for each type of workout including full body
    const exercises = {
        'Full Body': ['Squats', 'Deadlifts', 'Bench Press', 'Pull-Ups', 'Shoulder Press', 'Barbell Rows', 'Planks'],
        'Upper Body': ['Bench Press', 'Shoulder Press', 'Tricep Dip', 'Pull-Up', 'Barbell Row', 'Bicep Curl'],
        'Lower Body': ['Squat', 'Leg Press', 'Deadlift', 'Calf Raise', 'Leg Curl'],
        'Push': ['Bench Press', 'Shoulder Press', 'Tricep Dip'],
        'Pull': ['Pull-Up', 'Barbell Row', 'Deadlift'],
        'Legs': ['Squat', 'Leg Press', 'Calf Raise'],
        'Core': ['Plank', 'Russian Twists', 'Leg Raises'],
        'Cardio': ['Running', 'Cycling', 'Jump Rope']
    };

    // Function to generate the workout plan
    function generateWorkoutPlan(days, time) {
        let plan = '';
        const split = workoutSplits[days] || ['Full Body']; // Default to full body if days are not in the predefined splits

        split.forEach((workoutType, index) => {
            plan += `<h3>Day ${index + 1}: ${workoutType} Workout</h3><ul>`;
            exercises[workoutType].forEach(exercise => {
                plan += `<li>${exercise} - ${Math.floor(time / exercises[workoutType].length)} minutes</li>`;
            });
            plan += '</ul>';
        });

        return plan;
    }

    // Generate and display the workout plan
    planDiv.innerHTML = generateWorkoutPlan(days, time);
});

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

    // Adjust calorie needs based on goal
    calorieNeeds += (goal === 'lose_weight' ? -500 : goal === 'gain_muscle' ? 500 : 0);

    // Generate workout plan - this would be more complex in a real app
    var workoutPlan = `Workout Plan: ${fitnessLevel === 'beginner' ? '30 minutes walking' : fitnessLevel === 'intermediate' ? '60 minutes mixed cardio and strength' : '90 minutes advanced training'}`;

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


