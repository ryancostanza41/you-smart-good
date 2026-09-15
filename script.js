const answers = document.querySelectorAll(".answer");
// const result = document.getElementById("result");

answers.forEach(function(button) {
    button.addEventListener("click", function() {

        const question = button.closest(".q-and-a");
        const result = question.querySelector(".result");

        if (button.dataset.correct === "true") {
            result.textContent = "Correct!";
            result.classList.add("answer-right");
            result.classList.remove("answer-wrong");
        } else {
            result.textContent = "Not quite.";
            result.classList.add("answer-wrong");
            result.classList.remove("answer-right");
        }

    });
});