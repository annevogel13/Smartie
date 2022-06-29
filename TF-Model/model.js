// importing the data 
console.log("Loading data .. ")
const train_features = tf.data.csv("./ModelData/train_features.csv")
const train_labels = tf.data.csv("./ModelData/train_labels.csv")
const test_features = tf.data.csv("./ModelData/test_features.csv")
const test_labels = tf.data.csv("./ModelData/test_labels.csv")

const totaal = tf.data.csv(
    "./ModelData/totaal.csv", {
    columnConfigs: {
        hasHeader : true,
        Clusters: {
            isLabel: true
        }
    }
});

const csvUrl = "./ModelData/totaal.csv"

async function predicateSingleColumn() {
    // We want to predict single column "indus".
    const list = ['k1', 'k2', 'k3', 'k4', 'k5', 's1', 's2', 'd4', 'Clusters'];
    const csvDataset = tf.data.csv(
        csvUrl, {
        hasHeader: true,
        columnNames: list,
        columnConfigs: {
            Clusters: {
                isLabel: true
            }
        },
        configuredColumnsOnly: true,
        delimWhitspace: true
    });
    console.log("Trial1 ", csvDataset)
}

predicateSingleColumn()
// Function call


// creating the model 
console.log("Loading data NOT succesfull")

const model = tf.sequential({
    layers: [
        tf.layers.dense({ inputShape: [784], units: 16, activation: 'relu' }),
        tf.layers.dense({ units: 16, activation: 'relu' }),
        tf.layers.dropout({ rate: .3, inputShape: [16] }),
        tf.layers.gaussianNoise({ stddev: 0.2 }),
        tf.layers.dense({ units: 16, activation: 'relu' }),
        tf.layers.dense({ units: 1 }),
    ]
});
console.log("Compiling the model ")
// compiling the model 
model.compile({
    optimizer: 'adam',
    loss: 'meanSquaredError',
    metrics: ['accuracy']
});


function onBatchEnd(batch, logs) {
    console.log('Accuracy', logs.acc);
}

console.log("Training the model ")
// Training the data 
model.fit(train_features, train_labels, {
    epochs: 200,
    batchSize: 32,
    callbacks: { onBatchEnd }
}).then(info => {
    console.log('Final accuracy', info.history.acc);
});

// predictions 
const prediction = model.predict(tf.randomNormal([3, 784]));
prediction.print();


const modelT = tf.loadLayersModel('./finalModel/model.json');
