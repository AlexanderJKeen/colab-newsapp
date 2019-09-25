const express = require('express');
const path = require('path');
const {main} = require('./app')

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/news", async (req, res)=>{
   let data1 = await main(req.query.location);
   let data2 = await main(req.query.type);
   res.send(data);
});
app.listen(3006, () => {
   console.log("listening to port 3006");
})