const API_URL = "https://gore-deposits-plastics-micro.trycloudflare.com";
//const API_URL = "http://192.168.0.11:8000";

async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,
            password,
            device_name: navigator.userAgent   // optional but useful
        })
    });

    if (!res.ok) {
        document.getElementById("error").innerText = "Invalid login";
        return;
    }

    const data = await res.json();

    // Save device token + user_id
    localStorage.setItem("device_token", data.device_token);
    localStorage.setItem("user_id", data.user_id);

    window.location.href = "dashboard.html";
}