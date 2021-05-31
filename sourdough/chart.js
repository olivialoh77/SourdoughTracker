const labels = [
    '10',
    '20',
    '30',
    '40',
    '50',
    '60',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Starter rise',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};
const config = {
    type: 'line',
    data,
    options: {}
};

// === include 'setup' then 'config' above ===

var myChart = new Chart(document.getElementById('myChart'), config);

