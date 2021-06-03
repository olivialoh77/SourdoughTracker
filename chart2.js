const time_arr = [];

for(let i = 0; i < 120; i++)
{
    time_arr.push(i);
}
for(let i = 0; i < 120; i++)
{
    real_time_arr.push(i/2);
}
new Chart("myChart", {
    type: "line",
    data: {
        labels: time_arr,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: rise_arr
        }]
    },
    options: {
        legend: {display: false},
        scales: {
            yAxes: [{ticks: {min: 6, max:16}}],
        }
    }
});

