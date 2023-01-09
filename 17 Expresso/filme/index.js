import {Router}  from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("<h1>Filme</h1>")
})

router.get("/listen", (req, res) => {
    res.send("<h1>Filmlisten</h1>")
})

export {router}