document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher & Persistence
    const themeBtn = document.getElementById('themeSwitcher');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('theme-dark');
        if (themeIcon) themeIcon.innerText = "☀️";
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('theme-dark');
            const isDark = document.body.classList.contains('theme-dark');
            localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
            if (themeIcon) themeIcon.innerText = isDark ? "☀️" : "🌙";
            
            const feedback = document.createElement('div');
            feedback.className = 'theme-feedback animate-up';
            feedback.innerText = isDark ? "Dark Mode Active" : "Light Mode Active";
            document.body.appendChild(feedback);
            setTimeout(() => feedback.remove(), 2000);
        });
    }

    // Dynamic Greeting
    const greetingElement = document.getElementById('timeGreeting');
    if (greetingElement) {
        const hours = new Date().getHours();
        greetingElement.innerText = hours < 12 ? "Good Morning!" : hours < 18 ? "Good Afternoon!" : "Good Evening!";
    }

    // Bio Toggle
    const toggleBtn = document.getElementById('toggleBioBtn');
    const bioDiv = document.getElementById('quickBio');
    if (toggleBtn && bioDiv) {
        toggleBtn.addEventListener('click', () => {
            const isHidden = bioDiv.style.display === "none";
            bioDiv.style.display = isHidden ? "block" : "none";
            toggleBtn.innerText = isHidden ? "Hide Bio" : "Read Bio";
            if (isHidden) toggleBtn.classList.add('active-state');
            else toggleBtn.classList.remove('active-state');
        });
    }
});