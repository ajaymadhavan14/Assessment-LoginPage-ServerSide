import express  from "express";
import logger from "morgan"
import cors from "cors"

const app = express()
// 
app.use(cors())

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '50mb' }));
app.use(logger('dev'));


app.post('/api/data', (req, res) => {
    console.log(req.body);
    // Simulate data retrieval from a database
    res.json({status:"success"});

  });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});