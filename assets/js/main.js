let cursorSize = 40;
const maxCursorSize = window.innerHeight;

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
        var elemDiv = document.createElement('div');
        elemDiv.className = 'custom-cursor';
        document.body.appendChild(elemDiv);
    } else {
        const cursorX = e.clientX;
        const cursorY = e.clientY;
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
    }
});

document.addEventListener('mousewheel', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursorSize += e.deltaY * -0.1;
    cursorSize = Math.max(10, Math.min(maxCursorSize, cursorSize));
    if (cursor) {
        cursor.style.width = `${cursorSize}px`;
        cursor.style.height = `${cursorSize}px`;
    }
});