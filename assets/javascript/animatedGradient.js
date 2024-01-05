document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, #1e1e1e, #141414 100%)`;
})