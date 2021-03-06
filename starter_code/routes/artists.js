const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/artists", (req,res,next)=>{
    var userInput = req.query.q
    axios({
        method: "GET",
        headers: {Authorization:`Bearer ${access_token}`},
        url: `https://api.spotify.com/v1/search`,
        params: {
            type: "artist",
            q: userInput,
            limit: 6
        }
    })
    .then((response)=>{
        var itemsArray = response.data.artists.items
        res.render("artists", {itemsArray})
    })
    .catch((err)=>{
        console.log(err);
    })
});

module.exports = router;