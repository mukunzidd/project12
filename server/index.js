import express from "express";
import todo from './controllers/Todo';
const bodyParser = require("body-parser");

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.post("/api/v1/todo", todo.create);
app.get("/api/v1/todo", todo.getAll);
app.get("/api/v1/todo/:id", todo.getOne);
app.put("/api/v1/todo/:id", todo.update);
app.delete("/api/v1/todo/:id", todo.delete);
app.use((req, res) => {
  res.status(404).send("Unknown Request");
});

app.listen(8080);