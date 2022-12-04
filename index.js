import express from "express";
const server = express();
//available ports for this project: 40100-40200
const port = 40100

//http://localhost:40100/images/'FILENAME'
//server requires 'format' header with the extension of the file to run
server.get('/images/:loc', (req, res) => {
    const imageLoc    = (req.params.loc)
    const imageFormat = req.header("format")
    res.sendFile('/' + imageLoc + '.' + (imageFormat ?? 'jpg'), { root: './Files/Images/'})
})

server.post('submit/image', (req, res) => {
    const allowed = (req.header("parola") === "5252") //TO-DO: Implement better security!
    if (allowed){

    } else {
        res.status(403).send('Uploading not allowed!')
    }
})

server.listen(port, () => console.log('Server started on port ' + port + '.'))