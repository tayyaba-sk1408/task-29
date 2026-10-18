
const skillsSection = document.getElementById("skillsSection");
const progressBars = document.querySelectorAll(".progress-bar");

function animateSkillBars() {
    progressBars.forEach((bar) => {
        const targetLevel = Number(bar.dataset.level);
        bar.style.width = `${targetLevel}%`;
    });
}

function resetSkillBars() {
    progressBars.forEach((bar) => {
        bar.style.width = "0%";
    });
}

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateSkillBars();
            } else {
                resetSkillBars();
            }
        });
    }, {
        threshold: 0.25
    });

    observer.observe(skillsSection);
} else {
    animateSkillBars();
}
