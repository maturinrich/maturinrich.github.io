const dataPacket = document.getElementById('data-packet');
const vpnServer = document.querySelector('.vpn-icon');

dataPacket.addEventListener('animationiteration', () => {
    vpnServer.style.backgroundColor = '#48BB78'; // Turn VPN Server green
    setTimeout(() => {
        vpnServer.style.backgroundColor = '#F56565'; // Reset to red
    }, 1500); // Reset after 1.5 seconds
});
