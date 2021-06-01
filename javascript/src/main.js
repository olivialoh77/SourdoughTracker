async function runModel() {

  const model = await tf.loadLayersModel('/model/model.json');



  const example = tf.tensor1d([10, 20]).expandDims();
  const prediction = model.predict(example);

  console.log(prediction)
  prediction.print();
}


runModel()
