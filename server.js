const express =require("express");
const app =express();

app.set("view engine","ejs")

const userRoutes =require("./routes/routes")

app.use('/',userRoutes)
 app.listen(3000)