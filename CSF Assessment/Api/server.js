const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 5100;
app.use(express.json());

app.use((req, res, next)=>{
    console.log(req.path,req.method);
    next();
})


app.use(cors());
app.use("/api",routes);


app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);});

module.exports = app;