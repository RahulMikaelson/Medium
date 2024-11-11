import express,{Express} from "express";
require("dotenv").config();

const app: Express = express();

app.use(express.json());
app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Welcome to Medium");
})

app.listen(process.env.PORT,()=>{
    console.log("Server started on port 3000");
});