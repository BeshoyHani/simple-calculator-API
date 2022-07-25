import express from 'express';
import router from './routes/calculatorRouter.js';
const app = express();

app.use('/', express.urlencoded({extended: false}), router);


app.use((req, res) => {
    res.status(404).json("Page not Found");
});


app.listen(3000, ()=> {
    console.log('Server is running')
})