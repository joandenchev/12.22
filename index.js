import express from "express";
const server = express();
//available ports for this project: 40100-40200
const port = 40100

server.get('/images/:loc', (req, res) => {
    const imageLoc = req.params.loc
    res.sendFile('/' + imageLoc + '.jpg', { root: './Files/Images/'})
})


server.listen(port, () => console.log('Server started on port ' + port + '.'))
