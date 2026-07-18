const API_URL = "https://gore-deposits-plastics-micro.trycloudflare.com";
//const API_URL = "http://192.168.0.11:8000";

async function apiGet(path) {
    const token = localStorage.getItem("device_token");

    const res = await fetch(`${API_URL}${path}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (res.status === 401) {
        // Token invalid → force login
        localStorage.removeItem("device_token");
        window.location.href = "login.html";
        return;
    }

    return res.json();
}
