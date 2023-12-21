let timers = [];

function startClock(clockNumber) {
    const startTime = new Date().getTime();
    
    timers[clockNumber] = setInterval(function () {
        const currentTime = new Date().getTime();
        const elapsedTime = new Date(currentTime - startTime);
        
        const minutes = elapsedTime.getMinutes().toString().padStart(2, '0');
        const seconds = elapsedTime.getSeconds().toString().padStart(2, '0');
        
        document.getElementById(`time${clockNumber}`).innerText = `${minutes}:${seconds}`;
    }, 1000);
}

function stopClock(clockNumber) {
    clearInterval(timers[clockNumber]);
    document.getElementById(`time${clockNumber}`).innerText = 'MM:SS';
}

function stopAllClocks() {
    for (let i = 1; i <= timers.length; i++) {
        clearInterval(timers[i]);
        document.getElementById(`time${i}`).innerText = 'MM:SS';
    }
}

function pauseClock(clockNumber) {
    clearInterval(timers[clockNumber]);
}

function startAllClocks() {
    for (let i = 1; i <= timers.length; i++) {
        startClock(i);
    }
}
