// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('light-mode')
        ? '☀️ Light Mode'
        : '🌙 Dark Mode';
});

// VPN Usage Chart
const ctx = document.getElementById('vpnChart').getContext('2d');
const vpnChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['ExpressVPN', 'NordVPN', 'Surfshark'],
        datasets: [{
            label: 'Market Share (%)',
            data: [35, 30, 25], // Example data
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
