const express = require("express");
const app = express();


app.use(express.json({extended:false}));

let todos = [{
message:'lil'
},
{
message:'lil'

},
{
message:'lil'

},
{
message:'lil'

}]

app.get('/', (req, res) => {
    res.status(200).json(todos);
});

app.post('/', (req, res) => {
    const newTodo={
        message:req.body.message,
    }
    todos.push(newTodo)
    res.status(201).json(todos);
});
const PORT = 5001;
app.listen(PORT, () => console.log("Server Up and running"));