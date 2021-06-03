//TODO:
//import * as tf from '@tensorflow/tfjs';
//window.dataLayer = window.dataLayer || [];
let model;

var time, starter, flour;
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

        //TODO:

        /*tf.loadLayersModel('model/model.json').then(function(model) {
            window.model = model;
        });*/
        predict(starter,flour)
        return;
    }
    else if(flour && time)
    {
        let x = document.getElementById("container3");
        x.style.display = "block";
        let y = document.getElementById("container1");
        y.style.display = "none";

        /*//TODO:

        tf.loadLayersModel('model/model.json').then(function(model) {
            window.model = model;
        });*/
        //predict(flour)


        return;
    }
    else if(time && starter){
        let x = document.getElementById("container3");
        x.style.display = "block";
        let y = document.getElementById("container1");
        y.style.display = "none";

        //TODO:

        /*tf.loadLayersModel('model/model.json').then(function(model) {
            window.model = model;
        });*/
        //predict(time)

        return;
    }

    let x = document.getElementById("container2");
    x.style.display = "block";
    let y = document.getElementById("container1");
    y.style.display = "none";
    if (time)
    {
        document.getElementById("param1").innerHTML = "flour: ?";
        document.getElementById("param2").innerHTML = "starter: ?";
    }
    else if(flour)
    {
        document.getElementById("param1").innerHTML = "time: ?";
        document.getElementById("param2").innerHTML = "starter: ?";
    }
    else
    {
        document.getElementById("param1").innerHTML = "time: ?";
        document.getElementById("param2").innerHTML = "flour: ?";
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

    let x = document.getElementById("container1");
    x.style.display = "block";
    let y = document.getElementById("container5");
    y.style.display = "none";
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
    for (i = 0; i < arr.length; i++)
    {
        if (arr[i] > max_val)
            return i;
    }
}

//TODO:

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