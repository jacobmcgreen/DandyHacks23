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
        'Push': ['Bench Press', 'Shoulder Press', 'Tricep Dip', 'Incline Bench', 'Chest Flies', 'Lateral Raises'],
        'Pull': ['Pull-Up', 'Barbell Row', 'Deadlift', 'Lat Row', 'Reverse Flies'],
        'Legs': ['Squat', 'Leg Press', 'Calf Raise', ' Leg Extensions', 'Laying Hamstring Curls', 'Seated Hamstring Curls','Romanian Deadlift', 'Bulgarian Spli-Squat'],
        'Core': ['Plank', 'Russian Twists', 'Leg Raises', 'Crunches'],
        'Cardio': ['Running', 'Cycling', 'Jump Rope']
    };

    // Function to generate the workout plan
    function generateWorkoutPlan(days, time) {
    let plan = '<div class="grid-container">';
    const split = workoutSplits[days] || ['Full Body']; // Default to full body if days are not in the predefined splits

    // Determine the number of exercises based on the time available
    let numExercises;
    if (time >= 120) {
        numExercises = 8; 
    } else if (time >= 60) {
        numExercises = 6;
    } else if (time >= 30) {
        numExercises = 4;
    } else {
        numExercises = 3; 
    }

    // Calculate the total number of sets and sets per exercise
    const totalSets = Math.floor(time / 5); 
    const setsPerExercise = Math.ceil(totalSets / numExercises); 

    split.forEach((workoutType, index) => {
        plan += `<div class="grid-item"><h3>Day ${index + 1}: ${workoutType} Workout</h3><ul>`;
        // Get the exercises based on the number of exercises determined by time
        const selectedExercises = exercises[workoutType].slice(0, numExercises);
        selectedExercises.forEach(exercise => {
            if (workoutType === 'Cardio') {
                // Calculate the time per cardio exercise
                const timePerExercise = Math.floor(time / selectedExercises.length);
                plan += `<li>${exercise} - ${timePerExercise} minutes</li>`;
            } else {
                plan += `<li>${exercise} - ${setsPerExercise} sets</li>`;
            }
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

function goToPlanPage() {
    window.location.href = "calorie.html";
}

function goToIndexPage() {
    window.location.href = "index.html";
}