import express from "express"
import cors from "cors";

import { client } from "./src/connectionDb.js";
import { addMenuItem, getAllMenuItems } from "./src/menu.js";

const app = express()
app.use(cors())
app.use(express.json())

//Add some routes
app.get("/", (req, res) => {
    res.send('hello')
})
app.get("/menu", getAllMenuItems)

app.post("/menu", addMenuItem)
const port = 3000;
app.listen(port, () => console.log (`Listening on port ${port}`))
