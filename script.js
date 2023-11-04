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
      const fitnesslevel = document.getElementById("fitness-level").value;

      // Calculate data
      const resultValue = Math.floor(calculateCalorieIntake(gender, weight, height, age, fitnessGoals, fitnesslevel));
      
      // Display the result in an HTML element
      const resultElement = document.getElementById("result");
      resultElement.innerHTML = `You should eat <span style="color: orange">${resultValue}</span> calories a day to reach your goal!`;

      // Reset the form
      form.reset();
  });
});

function calculateCalorieIntake(gender, weight, height, age, fitnessGoals, fitnesslevel) {
  let BMR = 0;
  if (gender === "Male") {
      BMR = ((10*(weight*0.453592))+(6.25*(height*2.54))-(5*age)+5);
  } else if (gender === "Female") {
      BMR = ((10*(weight*0.453592))+(6.25*(height*2.54))-(5*age)-161);
  }
  
  let TDEE = 0;
  if (fitnesslevel === "BMR") { 
      TDEE = 1 * BMR;
  } else if (fitnesslevel === "SED") {
      TDEE = 1.2 * BMR;
  } else if (fitnesslevel === "LIG") {
      TDEE = 1.375 * BMR;
  } else if (fitnesslevel === "MOD") {
    TDEE = 1.465 * BMR;
  } else if (fitnesslevel === "ACT") {
    TDEE = 1.55 * BMR;
  } else if (fitnesslevel === "VAA") {
    TDEE = 1.725 * BMR;
  }else if (fitnesslevel === "EAA") {
    TDEE = 1.9 * BMR;
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

function goToPlanPage() {
    window.location.href = "plan.html";
}

function goToAnotherPage() {
    window.location.href = "another_page.html";
}