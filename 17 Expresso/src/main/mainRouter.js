import {Router}  from "express";

const router = Router();
router.get("/", (req, res) => {
    let htmlData =  '<h1>Hallo aus meinem Main Router</h1>' +
                    '<p> Das ist ein Text zum Ausgeben<p>';
    res.send(htmlData);
})

export {router}