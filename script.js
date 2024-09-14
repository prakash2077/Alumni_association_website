// Placeholder for directory search functionality
document.getElementById('search-bar').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const profiles = document.querySelectorAll('.alumni-profile');

    profiles.forEach(function(profile) {
        const name = profile.querySelector('h3').innerText.toLowerCase();
        if (name.includes(query)) {
            profile.style.display = 'block';
        } else {
            profile.style.display = 'none';
        }
    });
});
