document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("workout-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Collect form data
        const fitnessGoals = document.getElementById("fitness-goals").value;
        const weight = parseFloat(document.getElementById("weight").value);
        const experience = document.querySelector('input[name="experience"]:checked').value;
        const daysPerWeek = parseInt(document.getElementById("days-per-week").value);

        // You can do something with the data here, e.g., display it or send it to a server
        console.log("Fitness Goals:", fitnessGoals);
        console.log("Weight (kg):", weight);
        console.log("Experience Level:", experience);
        console.log("Days per Week:", daysPerWeek);

        // Reset the form
        form.reset();
    });
});
