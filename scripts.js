// Toggle Dark Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode')
        ? '☀️ Light Mode'
        : '🌙 Dark Mode';
});

// Pie Chart for VPN Usage
const pieCtx = document.getElementById('vpnPieChart').getContext('2d');
const vpnPieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Entertainment', 'Anonymity', 'Security', 'Business Use'],
        datasets: [{
            data: [56, 35, 25, 20],
            backgroundColor: ['#3B82F6', '#63B3ED', '#48BB78', '#ECC94B']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Line Chart for VPN Market Growth
const lineCtx = document.getElementById('vpnLineChart').getContext('2d');
const vpnLineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'VPN Market Growth (in Billion $)',
            data: [30, 35, 40, 44.6, 50],
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
