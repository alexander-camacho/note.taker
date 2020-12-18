const fs = require('fs')
const notesData = require('../db/db.json')


module.exports = function (app) {


    app.get("/api/notes", function (req, res) {
        res.json(notesData);
    });


    app.post("/api/notes", function (req, res) {


        if (notesData.length === 0){
            req.body.id = 0
        } else {
            req.body.id = notesData.length
        }

        notesData.push(req.body)

        updateDb(notesData)

        res.json(req.body)
    })


    function updateDb(notes) {

        notes = JSON.stringify(notes)
        console.log(notes)
        fs.writeFileSync('db/db.json', notes, err => {
            if (err) throw err
        })
    }


    app.delete("/api/notes/:id", function(req,res) {

        console.log(req.params.id)



    })
}