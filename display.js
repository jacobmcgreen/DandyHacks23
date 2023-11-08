
var loader = document.getElementById("loader-overlay");

var wait3seconds = function() {
    // Function to hide the loader
    function hideLoader() {
        document.querySelector('.loader-overlay').style.display = 'none';
    }
    setTimeout(hideLoader, 800); // Wait for 3 seconds before hiding the loader
};

window.onload = function() {
    wait3seconds(); // Start the countdown to hide the loader
    const plan = localStorage.getItem('workoutPlan');
    if (plan) {
        document.getElementById('workout-plan').innerHTML = plan;
    } else {
        document.getElementById('workout-plan').innerHTML = '<p>No workout plan found. Please generate one.</p>';
    }
};
         // Function to hide the loader
    function hideLoader() {
        document.querySelector('.loader-overlay').style.display = 'none';
    }
    function goToPlanPage() {
    window.location.href = "plan.html";
}
