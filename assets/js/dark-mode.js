function changeDarkMode() {
    const body = document.body;
    const link = document.getElementById('modo-toggle');

    body.classList.toggle('dark-mode');

    link.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
}
