function toggleDarkMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const navbarmenu = document.querySelector('.mobile-navbar');
    const infoContent = document.querySelector('.info-content');
    const homeContent = document.querySelector('.home-content');
    const footer = document.querySelector('.footer');


    // Toggle dark mode classes
    body.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');
    navbarmenu.classList.toggle('dark-mode');
    infoContent.classList.toggle('dark-mode');
    homeContent.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    // Toggle dark mode icon source
    const darkModeToggle = document.querySelector('.mode-select');
    const isDarkMode = body.classList.contains('dark-mode');

    // Toggle dark mode icon source for both toggles
    const mainDarkModeToggle = document.querySelector('#modeSelectMain');
    const navDarkModeToggle = document.querySelector('#modeSelectNav');

    // Update local storage
    localStorage.setItem('darkMode', isDarkMode);

    if (isDarkMode) {
        darkModeToggle.style.opacity = '0';
        darkModeToggle.style.transform = 'scale(0.8)';
        darkModeToggle.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        setTimeout(() => {
            darkModeToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
          </svg>
        `;
            setTimeout(() => {
                darkModeToggle.style.opacity = '1';
                darkModeToggle.style.transform = 'scale(1)';
            }, 10);
        }, 300);
    } else {
        darkModeToggle.style.opacity = '0';
        darkModeToggle.style.transform = 'scale(0.8)';
        darkModeToggle.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        setTimeout(() => {
            darkModeToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#828282" class="bi bi-moon-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" fill-rule="evenodd"/>
          </svg>
        `;
            setTimeout(() => {
                darkModeToggle.style.opacity = '1';
                darkModeToggle.style.transform = 'scale(1)';
            }, 10);
        }, 300);
    }
}



// Check local storage for dark mode preference
const storedDarkMode = localStorage.getItem('darkMode');
if (storedDarkMode === 'true') {
    toggleDarkMode();
}

document.addEventListener("DOMContentLoaded", function() {
    const collapsibleBtn = document.querySelector(".menu-icon");
    const content = document.querySelector(".content");

    collapsibleBtn.addEventListener("click", function() {
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});