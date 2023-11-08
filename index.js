// Function to navigate to the Calorie Counter page
function goToCalorieCounter() {
    window.location.href = 'calorie.html'; // Assuming 'index.html' is in the same directory
}

// Function to navigate to the Workout Planner page
function goToWorkoutPlanner() {
    window.location.href = 'plan.html'; // Assuming 'plan.html' is in the same directory
}

// Attach the functions to the respective buttons
document.addEventListener('DOMContentLoaded', function() {
    var calorieCounterButton = document.getElementById('calorie-counter-button');
    var workoutPlannerButton = document.getElementById('workout-planner-button');

    calorieCounterButton.addEventListener('click', goToCalorieCounter);
    workoutPlannerButton.addEventListener('click', goToWorkoutPlanner);
});
