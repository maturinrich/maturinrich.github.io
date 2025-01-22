// Toggle Dark Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode')
        ? '☀️ Light Mode'
        : '🌙 Dark Mode';
});

// Data Packet Interaction with VPN Server
const dataPacket = document.getElementById('data-packet');
const vpnServer = document.querySelector('.vpn-icon');

dataPacket.addEventListener('animationiteration', () => {
    vpnServer.style.backgroundColor = '#48BB78'; // Turn VPN Server green
    setTimeout(() => {
        vpnServer.style.backgroundColor = '#F56565'; // Reset back to red
    }, 1500);
});

// Pie Chart for Dashboard
const pieCtx = document.getElementById('vpnPieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Entertainment', 'Anonymity', 'Security', 'Business Use'],
        datasets: [{
            data: [56, 35, 25, 20],
            backgroundColor: ['#3B82F6', '#63B3ED', '#48BB78', '#ECC94B']
        }]
    }
});

// Line Chart for Dashboard
const lineCtx = document.getElementById('vpnLineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'VPN Market Growth',
            data: [30, 35, 40, 44.6, 50],
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: '#3B82F6',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});
