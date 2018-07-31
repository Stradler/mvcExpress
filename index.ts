import axios from "axios";
import * as Axios from "axios";
import * as bodyParser from "body-parser";
import * as express from "express";
import * as mongoose from "mongoose";

const app = express();
mongoose.connect("mongodb://vironitdb:vironitdb42@ds161411.mlab.com:61411/vironitdb");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const dogSchema = new mongoose.Schema({
    url: String,
});

const Dog = mongoose.model("Dog", dogSchema);

app.get("/", (req: express.Request, res: express.Response) => {
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then((response: Axios.AxiosResponse) => {
        Dog.find({}, (err: mongoose.Error, dogs) => {
            res.render("index", {dogObject: response.data, dogImages: dogs});
        });
    });
});

app.post("/", (req: express.Request, res: express.Response) => {
    const urlString = req.body.string;
    Dog.create({url: urlString}, (err: mongoose.Error, createdDog: mongoose.Document[]) =>{
        res.redirect("/");
    });
});

app.listen(3000, "localhost", () =>  true);
