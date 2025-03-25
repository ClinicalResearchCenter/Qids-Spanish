document.getElementById("qidsForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let totalScore = 0;

    // Sleep: highest of Q1–Q4
    const sleep = getMaxScore(["q1", "q2", "q3", "q4"]);

    // Q5: Sad Mood
    const sad = getScore("q5");

    // Appetite/Weight: highest of Q6–Q9
    const appetite = getMaxScore(["q6", "q7", "q8", "q9"]);

    // Q10–Q14: Direct sum
    const q10 = getScore("q10");
    const q11 = getScore("q11");
    const q12 = getScore("q12");
    const q13 = getScore("q13");
    const q14 = getScore("q14");

    // Psychomotor: highest of Q15–Q16
    const psychomotor = getMaxScore(["q15", "q16"]);

    // Final QIDS-SR16 total
    totalScore = sleep + sad + appetite + q10 + q11 + q12 + q13 + q14 + psychomotor;

    const severity = getSeverity(totalScore);

    document.getElementById("result").textContent =
        `Total Score: ${totalScore} (${severity})`;
});

// Get score for a single question
function getScore(name) {
    const selected = document.querySelector(`input[name="${name}"]:checked`);
    return selected ? parseInt(selected.value) : 0;
}

// Get highest score in a group
function getMaxScore(names) {
    return Math.max(...names.map(getScore));
}

// Interpret severity
function getSeverity(score) {
    if (score <= 5) return "No Depression";
    if (score <= 10) return "Mild Depression";
    if (score <= 15) return "Moderate Depression";
    if (score <= 20) return "Severe Depression";
    return "Very Severe Depression";
}
