//TODO:
/*window.dataLayer = window.dataLayer || [];*/

var time, starter, flour;
async function init()
{
    time = $('textarea#time').val();
    starter = $('textarea#starter').val();
    flour = $('textarea#flour').val();
    console.log(time);
    console.log(starter)
    console.log(flour)

    if (flour && starter)
    {
        let x = document.getElementById("container3");
        x.style.display = "block";
        let y = document.getElementById("container1");
        y.style.display = "none";

        //TODO:
        /*
        tf.loadLayersModel('model/model.json').then(function(model) {
            window.model = model;
        });*/

        return;
    }
    else if(flour && time)
    {
        let x = document.getElementById("container3");
        x.style.display = "block";
        let y = document.getElementById("container1");
        y.style.display = "none";

        //TODO:
        /*
        tf.loadLayersModel('model/model.json').then(function(model) {
            window.model = model;
        });
        predict()
        */

        return;
    }
    else if(time && starter){
        let x = document.getElementById("container3");
        x.style.display = "block";
        let y = document.getElementById("container1");
        y.style.display = "none";

        //TODO:
        /*
        tf.loadLayersModel('model/model.json').then(function(model) {
            window.model = model;
        });
        predict()
         */
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

//TODO:
/*
var predict = function(input) {
    if (window.model) {
        window.model.predict([tf.tensor(input).reshape([1, 28, 28, 1])]).array().then(function(scores){
            scores = scores[0];
            predicted = scores.indexOf(Math.max(...scores));
            $('#number').html(predicted);
        });
    } else {
        // The model takes a bit to load, if we are too fast, wait
        setTimeout(function(){predict(input)}, 50);
    }
}*/