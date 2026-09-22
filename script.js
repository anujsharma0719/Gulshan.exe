const terminal = document.getElementById("terminal");

function addLine(text, delay) {

    setTimeout(function() {

        const line = document.createElement("p");

        line.textContent = text;

        terminal.appendChild(line);

    }, delay);
}


addLine("> INITIALIZING SYSTEM...", 500);

addLine("", 1200);

addLine("[SYSTEM] Booting personal kernel...       OK", 1700);

addLine("[SYSTEM] Loading modules...               OK", 2300);

addLine("[SYSTEM] Checking memory...               OK", 2900);

addLine("[SYSTEM] Initializing interfaces...       OK", 3500);

addLine("[SYSTEM] Mounting filesystem...           OK", 4100);

addLine("[SYSTEM] Starting core services...        OK", 4700);

addLine("[SYSTEM] Calibrating sensors...           OK", 5300);

addLine("[SYSTEM] System ready.                    OK", 5900);

setTimeout(function() {

    const progress = document.createElement("p");

    progress.textContent =
        "[SYSTEM] Initialization complete...   100%";

    terminal.appendChild(progress);

}, 6600);

const connectionPanel = document.getElementById("connectionPanel");
const progressBar = document.getElementById("progressBar");
const connectionPercent = document.getElementById("connectionPercent");
const connectionStatus = document.getElementById("connectionStatus");


setTimeout(function() {

    connectionPanel.style.display = "block";

}, 7200);


let progress = 0;

setTimeout(function() {

    const progressInterval = setInterval(function() {

        progress++;

        progressBar.style.width = progress + "%";
        connectionPercent.textContent = progress + "%";

        if (progress >= 78) {

            clearInterval(progressInterval);

            connectionStatus.textContent = "SECURE ✓";

        }

    }, 45);

}, 7600);
const userPanel = document.getElementById("userPanel");

setTimeout(function() {

    userPanel.style.display = "block";

}, 11700);
