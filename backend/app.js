require('@tensorflow/tfjs-node');
const express = require('express');
const cors = require('cors');
const tf = require('@tensorflow/tfjs');
const QNA = require('@tensorflow-models/qna');

const universalMiddleware = require('./middlewares/universalMiddleware');

let model;
const app = express();

const loadAIModals = async () => {
    console.log('model started loading');
    await tf.ready();
    model = await QNA.load();
    console.log('\n\n model loaded');
    console.log(model);
};
loadAIModals();

// JSON Parser
app.use(express.json());

// cors
const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000'],
};

app.use(cors(corsOption));

// Serving static files
app.use(express.static(`${__dirname}/public`));
// app.use(express.static(`${__dirname}/build`));

// Middleware
app.use(universalMiddleware.sendTimeStamp);

// Routes

app.get('/', async (req, res) => {
    res.send('i am working');
});

app.post('/api/v1/ai/passage', async (req, res) => {
    console.log(req.body);
    const { passage, question } = req.body;
    const answers = await model.findAnswers(question, passage);
    res.json({
        status: 'ok',
        data: answers,
    });
});


app.all('*', (req, res, next) => {
    console.log('page not found');
});

module.exports = app;
