const terminal = document.getElementById("terminal");

const lines = [
    "> Initializing system...",
    "[SYSTEM] Booting personal kernel...",
    "[SYSTEM] Loading modules...",
    "[SYSTEM] Checking memory...       OK",
    "[SYSTEM] Initializing interfaces... OK",
    "[SYSTEM] Mounting filesystem...     OK",
    "[SYSTEM] Starting core services...  OK",
    "[SYSTEM] Calibrating sensors...     OK",
    "[SYSTEM] System ready.",

    "",

    "> Establishing secure connection...",
    "[NETWORK] Resolving host...",
    "[NETWORK] Connecting to server...",
    "[NETWORK] Performing handshake...",
    "[NETWORK] Verifying identity...",
    "[NETWORK] Encrypting channel...",
    "[NETWORK] Sending authentication token...",
    "[NETWORK] Awaiting response...",

    "",

    "> Connection established.",
    "[SERVER] Response: 200 OK",
    "[SERVER] Connection encrypted.",
    "[SERVER] Session initialized.",
    "[SERVER] Access level: GRANTED",

    "",

    "> Searching for user...",
    "[DATABASE] Scanning profiles...",
    "[DATABASE] Matching profiles...",
    "[DATABASE] Analyzing data...",
    "[DATABASE] User found."
];

let index = 0;

function showNextLine() {

    if (index >= lines.length) {
        return;
    }

    const line = document.createElement("p");
    line.textContent = lines[index];

    terminal.appendChild(line);

    index++;

    setTimeout(showNextLine, 450);
}

showNextLine();