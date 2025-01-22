// Mode sombre/claire
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Graphique en camembert
const ctxPie = document.getElementById('vpnPieChart').getContext('2d');
const vpnPieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Entertainment', 'Anonymity', 'Security', 'Business Use'],
        datasets: [{
            data: [56, 35, 25, 20], // Exemple de données
            backgroundColor: ['#3B82F6', '#63B3ED', '#48BB78', '#ECC94B'],
            hoverOffset: 5
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
});
