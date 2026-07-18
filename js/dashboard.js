async function loadDashboard() {
    const userId = localStorage.getItem("user_id");

    const data = await apiGet(`/round/current/progress/${userId}`);

    document.getElementById("stats").innerHTML = `
        <p>Steps: ${data.steps}</p>
        <p>Moderate: ${data.moderate_minutes}</p>
        <p>Vigorous: ${data.vigorous_minutes}</p>
        <p>Total Score: ${data.total_score}</p>
    `;

    new Chart(document.getElementById("scoreChart"), {
        type: "line",
        data: {
            labels: data.daily_dates,
            datasets: [{
                label: "Score",
                data: data.daily_scores,
                borderColor: "blue"
            }]
        }
    });
}

loadDashboard();

