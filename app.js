(function () {

    // Navigation controls
    const sections = document.querySelectorAll(".container");
    const controls = document.querySelectorAll(".control");

    controls.forEach(button => {

        button.addEventListener("click", function () {

            // Remove active button
            document.querySelector(".active-btn")
                .classList.remove("active-btn");

            // Add active button
            this.classList.add("active-btn");

            // Remove active section
            document.querySelector(".active")
                .classList.remove("active");

            // Show selected section
            document.getElementById(button.dataset.id)
                .classList.add("active");
        });

    });

    // Theme toggle
    const themeBtn = document.querySelector(".theme-btn");

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

})();