const time_arr = [];

for(let i = 0; i < 120; i++)
{
    time_arr.push(i.toString());
}

const labels = [
    '10',
    '20',
    '30',
    '40',
    '50',
    '60',
];

const data = {
    labels: time_arr,
    datasets: [{
        label: 'Starter rise',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: rise_arr,
    }]
};
const config = {
    type: 'line',
    data,
    options: {}
};

// === include 'setup' then 'config' above ===

var myChart = new Chart(document.getElementById('myChart'), config);

