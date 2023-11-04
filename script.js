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

      // Calculate data
      const resultValue = Math.floor(calculateCalorieIntake(gender, weight, height, age, fitnessGoals, experience));
      
      // Display the result in an HTML element
      const resultElement = document.getElementById("result");
      resultElement.innerHTML = `You should eat ${resultValue} calories a day to reach your goal!`;

      // Reset the form
      form.reset();
  });
});

function calculateCalorieIntake(gender, weight, height, age, fitnessGoals, experience) {
  let BMR = 0;
  if (gender === "Male") {
      BMR = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
  } else if (gender === "Female") {
      BMR = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age);
  }
  
  let TDEE = 0;
  if (experience === "beginner") { 
      TDEE = 1.375 * BMR;
  } else if (experience === "intermediate") {
      TDEE = 1.55 * BMR;
  } else if (experience === "advanced") {
      TDEE = 1.725 * BMR;
  }
  
  let maintenanceCalories = 0;
  if (fitnessGoals === "maintain") {
      maintenanceCalories = TDEE;
  } else if (fitnessGoals === "lose_weight") {
      maintenanceCalories = TDEE - 500;
  } else if (fitnessGoals === "gain_weight") {
      maintenanceCalories = TDEE + (0.10 * TDEE);
  }
  
  return maintenanceCalories;
}
