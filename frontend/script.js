async function getMessage() {
    const messageElement = document.getElementById("message");
    messageElement.innerText = "Loading...";
    messageElement.classList.add("show");

    try {
        const url = (window.BACKEND_URL && window.BACKEND_URL.trim())
            ? window.BACKEND_URL
            : "";

        if (!url) {
            throw new Error("Missing BACKEND_URL. Set window.BACKEND_URL in the frontend before calling getMessage().");
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Backend API not available");
        }

        const data = await response.json();
        messageElement.innerText = "✓ " + data.message;
    } catch (error) {
        messageElement.innerText = "✗ Error: " + error.message;

    }
}
