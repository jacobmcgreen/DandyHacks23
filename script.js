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
