const steps = document.querySelectorAll(".step");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const stop = document.getElementById("stop"); 

let currentStep = 0;
let isStopped = false; 

function updateSteps(forward) {
    if (isStopped) return; 

    steps.forEach((step, index) => {
        if (index <= currentStep) {
            step.classList.add("active");
            step.classList.remove("prev");
        } else {
            step.classList.remove("active");
        }
    });

    if (!forward && currentStep < steps.length - 1) {
        steps[currentStep + 1].classList.add("prev");
    }

    prev.disabled = currentStep === 0;
    next.disabled = currentStep === steps.length - 1;
}

next.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateSteps(true);
    }
});

prev.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        updateSteps(false);
    }
});

stop.addEventListener("click", () => {
    isStopped = !isStopped; 
    stop.classList.toggle("active");
    stop.textContent = isStopped ? "▶ Run" : "⏸ Stop";
});

updateSteps(true);
