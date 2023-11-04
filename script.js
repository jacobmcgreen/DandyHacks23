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

