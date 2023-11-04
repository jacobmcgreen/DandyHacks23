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
        let plan = '<div class="grid-container">';
        const split = workoutSplits[days] || ['Full Body']; // Default to full body if days are not in the predefined splits

        split.forEach((workoutType, index) => {
            plan += `<div class="grid-item"><h3>Day ${index + 1}: ${workoutType} Workout</h3><ul>`;
            exercises[workoutType].forEach(exercise => {
                plan += `<li>${exercise} - ${Math.floor(time / exercises[workoutType].length)} minutes</li>`;
            });
            plan += '</ul></div>';
        });

        plan += '</div>';
        return plan;
    }

    // Generate the workout plan
    const plan = generateWorkoutPlan(days, time);

    // Store the plan
    localStorage.setItem('workoutPlan', plan);

    // Redirect to the display page
    window.location.href = 'display.html';

});
