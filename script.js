function switchTheme() {
    const body = document.body;
    const themeSwitchButton = document.querySelector('.theme-switch');
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeSwitchButton.textContent = "Switch to Light Theme";
    } else {
        themeSwitchButton.textContent = "Switch to Dark Theme";
    }
}
