//TODO:
//import * as tf from '@tensorflow/tfjs';
//window.dataLayer = window.dataLayer || [];
let model;

let time, starter, flour;
let rise_arr;
const time_arr = [];
let pred1_arr;
let pred2_arr;
let real_time_arr = [];
let myChart;
let myChart2;
let myChart3;
let myChart4;

for(let i = 0; i < 120; i++)
{
    time_arr.push(i);
}


async function start()
{
    time = $('textarea#time').val();
    starter = $('textarea#starter').val();
    flour = $('textarea#flour').val();

    console.log(time);
    console.log(starter)
    console.log(flour)

    model = await tf.loadLayersModel("model/model.json");

    tf.loadLayersModel('model/model.json').then(function(model) {
            window.model = model;
        });


    if (flour && starter)
    {
        let x = document.getElementById("container3");
        x.style.display = "block";
        let y = document.getElementById("container1");
        y.style.display = "none";


        rise_arr = await predict(starter,flour);
        time = await maxPredict(rise_arr);

        document.getElementById("f").innerHTML = "flour: " + flour;
        document.getElementById("s").innerHTML = "starter: " + starter;
        document.getElementById("w").innerHTML = "water: " + flour;
        document.getElementById("t").innerHTML = "time: " + time;

        myChart = new Chart("myChart", {
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

        return;
    }
    else if(flour && time)
    {
        let x = document.getElementById("container3");
        x.style.display = "block";
        let y = document.getElementById("container1");
        y.style.display = "none";

        //TODO:

        const [first, second] = await starterPredict(flour, time);
        rise_arr = second;
        starter = first;

        document.getElementById("f").innerHTML = "flour: " + flour;
        document.getElementById("s").innerHTML = "starter: " + starter;
        document.getElementById("w").innerHTML = "water: " + flour;
        document.getElementById("t").innerHTML = "time: " + time;

        myChart = new Chart("myChart", {
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

        return;
    }
    else if(time && starter){
        let x = document.getElementById("container3");
        x.style.display = "block";
        let y = document.getElementById("container1");
        y.style.display = "none";

        //TODO:


        const [first, second] = await flourPredict(starter, time);
        rise_arr = second;
        flour = first;

        document.getElementById("f").innerHTML = "flour: " + flour;
        document.getElementById("s").innerHTML = "starter: " + starter;
        document.getElementById("w").innerHTML = "water: " + flour;
        document.getElementById("t").innerHTML = "time: " + time;

        myChart = new Chart("myChart", {
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


        return;
    }

    let x = document.getElementById("container2");
    x.style.display = "block";
    let y = document.getElementById("container1");
    y.style.display = "none";

    if (time)
    {
        const [first, second] = await sfPredict(time);
        pred1_arr = first;
        pred2_arr = second;

        console.log(pred1_arr)
        console.log(pred2_arr)

        document.getElementById("param1").innerHTML = "flour: ";
        document.getElementById("param2").innerHTML = "starter: ";

        myChart2 = new Chart("myChart2", {
            type: "line",
            data: {
                labels: pred1_arr,
                datasets: [{
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(0,0,255,0.1)",
                    data: pred2_arr
                }]
            },
            options: {
                legend: {display: false},
                scales: {
                    yAxes: [{ticks: {min: 6, max:16}}],
                }
            }
        });


    }
    else if(flour)
    {
        const [first, second] = await stPredict(flour);
        pred1_arr = first;
        pred2_arr = second;

        console.log(pred1_arr)
        console.log(pred2_arr)

        document.getElementById("param1").innerHTML = "time: ?";
        document.getElementById("param2").innerHTML = "starter: ?";

        myChart2 = new Chart("myChart2", {
            type: "line",
            data: {
                labels: pred1_arr,
                datasets: [{
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(0,0,255,0.1)",
                    data: pred2_arr
                }]
            },
            options: {
                legend: {display: false},
                scales: {
                    yAxes: [{ticks: {min: 6, max:16}}],
                }
            }
        });

    }
    else
    {
        const [first, second] = await ftPredict(starter);
        pred1_arr = first;
        pred2_arr = second;

        console.log(pred1_arr)
        console.log(pred2_arr)

        document.getElementById("param1").innerHTML = "time: ?";
        document.getElementById("param2").innerHTML = "flour: ?";

        myChart2 = new Chart("myChart2", {
            type: "line",
            data: {
                labels: pred1_arr,
                datasets: [{
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(0,0,255,0.1)",
                    data: pred2_arr
                }]
            },
            options: {
                legend: {display: false},
                scales: {
                    yAxes: [{ticks: {min: 6, max:16}}],
                }
            }
        });


    }

}

async function select()
{
    if(time)
    {
        starter = $('textarea#p1').val();
        flour = $('textarea#p2').val();

        rise_arr = await predict(starter, flour);

        document.getElementById("f").innerHTML = "flour: " + flour;
        document.getElementById("s").innerHTML = "starter: " + starter;
        document.getElementById("w").innerHTML = "water: " + flour;
        document.getElementById("t").innerHTML = "time: " + time;

        myChart = new Chart("myChart", {
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
    }
    else if(flour){
        time = $('textarea#p1').val();
        starter = $('textarea#p2').val();

        const [first, second] = await flourPredict(starter, time);
        rise_arr = second;

        document.getElementById("f").innerHTML = "flour: " + flour;
        document.getElementById("s").innerHTML = "starter: " + starter;
        document.getElementById("w").innerHTML = "water: " + flour;
        document.getElementById("t").innerHTML = "time: " + time;

        myChart = new Chart("myChart", {
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
    }
    else {
        time = $('textarea#p1').val();
        flour = $('textarea#p2').val();

        const [first, second] = await starterPredict(flour, time);
        rise_arr = second;

        document.getElementById("f").innerHTML = "flour: " + flour;
        document.getElementById("s").innerHTML = "starter: " + starter;
        document.getElementById("w").innerHTML = "water: " + flour;
        document.getElementById("t").innerHTML = "time: " + time;

        myChart = new Chart("myChart", {
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
    }
}

async function next()
{
    let x = document.getElementById("container3");
    x.style.display = "block";
    let y = document.getElementById("container2");
    y.style.display = "none";
}

async function wait()
{

    //change display for starter formula


    //plot

    //switch pages
    let x = document.getElementById("container4");
    x.style.display = "block";
    let y = document.getElementById("container3");
    y.style.display = "none";
}

async function done()
{

    let x = document.getElementById("container5");
    x.style.display = "block";
    let y = document.getElementById("container4");
    y.style.display = "none";
}

async function again()
{
    starter = 0;
    flour = 0;
    time = 0;



    //let graph2 = document.getElementById("myChart2").getContext("2d");
    myChart.destroy();
    //let graph1 = document.getElementById("myChart").getContext("2d");
    if (myChart2)
    {
        myChart2.destroy();
    }

    let x = document.getElementById("container1");
    x.style.display = "block";
    let y = document.getElementById("container5");
    y.style.display = "none";
}

async function start_train()
{
    let s = parseInt(starter);
    let f = parseInt(flour)
    let input = [s, f]

    for(var i = 0; i < 120; i++)
    {
        real_time_arr.push(i/2);
    }
    train(input, real_time_arr);

}

async function predict(starter,flour) {
    let s = parseFloat(starter);
    let f = parseFloat(flour);

    const example = tf.tensor1d([s, f]).expandDims();
    const prediction = model.predict(example);

    prediction.print();

    const values = prediction.dataSync();
    const arr = Array.from(values);
    console.log(arr);


    return arr;
}

async function maxPredict(arr) {
    max_val = Math.max.apply(Math,arr)*0.9;
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] >= max_val)
            return i;
    }
}

async function flourPredict(starter, time) {
    let s = parseFloat(starter);
    let t = parseFloat(time);
    var predict_opt = []
    var min = 0
    var flour = 0
    for (var i = 0; i < 40; i++) {
        var tensor = tf.tensor1d([s, i + 10]).expandDims();
        var predictions = await model.predict(tensor).data();
        var results = Array.from(predictions);
        let max_p = await maxPredict(results);
        if (i == 0 || Math.abs(t - max_p) < min){
            min = Math.abs(t - max_p)
            predict_opt = results
            flour = i+10
        }
    }
    return [flour, predict_opt]
}

async function starterPredict(flour, time) {
    let f = parseFloat(flour);
    let t = parseFloat(time);

    var predict_opt = []
    var min = 0
    var s = 0
    for (var i = 0; i < 10; i++) {
        var tensor = tf.tensor1d([i + 10, f]).expandDims();
        var predictions = await model.predict(tensor).data();
        var results = Array.from(predictions);
        let max_p = await maxPredict(results);
        if (i == 0 || Math.abs(t - max_p) < min) {
            min = Math.abs(t - max_p)
            predict_opt = results
            s = i+10

        }
    }
    return [s, predict_opt]
}

async function sfPredict(t) {
    var starter_array = []
    var flour_array = []
    for (var i = 0; i < 10; i++) {
        starter_array.push(i+10);
        let [first,second] = await flourPredict(i+10,t);
        flour_array.push(first);
    }
    return [starter_array, flour_array]
}

async function stPredict(f) {
    var time_array = []
    var starter_array = []
    for (var i = 30; i < 90; i = i+5) {
        time_array.push(i)
        let [first,second] = await starterPredict(f, i);
        starter_array.push(first);
    }
    return [time_array, starter_array]
}

async function ftPredict(s) {
    var time_array = []
    var flour_array = []
    for (var i = 30; i < 90; i = i+5) {
        time_array.push(i)
        let [first,second] = await flourPredict(s, i);
        flour_array.push(first);
    }
    return [time_array, flour_array]
}


async function train (input, predicted) {
    model.compile({
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError,
        metrics: ['mse'],
    });   // train model
    return await model.fit(tf.tensor1d(input).expandDims(), tf.tensor1d(predicted).expandDims().expandDims(2), {
        batchSize: 1,
        epochs: 1,
    }).then(info => {
        console.log('Final accuracy', info.history.mse);
    });
}

/*var predict = function(starter,flour) {
    if (window.model) {
        window.model.predict([tf.tensor(starter,flour).reshape([-1, 2])]).array().then(function(scores){
            scores = scores[0];
            predicted = scores.indexOf(Math.max(...scores));
            console.log(predicted);
        });
    } else {
        // The model takes a bit to load, if we are too fast, wait
        setTimeout(function(){predict(starter,flour)}, 50);
    }
}*/