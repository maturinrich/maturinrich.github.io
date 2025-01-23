// Dark Mode Toggle
const themeCheckbox = document.getElementById('theme-checkbox');
themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// Animation for VPN Diagram
const startAnimation = () => {
    const steps = document.querySelectorAll('.diagram-node, .tunnel');
    let delay = 0;

    steps.forEach(step => {
        setTimeout(() => {
            step.classList.add('active');
        }, delay);
        delay += 1000; // Delay between each step
    });
};

document.getElementById('start-animation').addEventListener('click', startAnimation);

// VPN Pie Chart
const pieCtx = document.getElementById('vpnPieChart').getContext('2d');
new Chart(pieCtx, {
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

// VPN Line Chart
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
