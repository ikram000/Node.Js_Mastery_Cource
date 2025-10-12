import http from "http"

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // res.end ("<h1> your requested has been accpeted</h1>")
 if (req.url === '/ikramjaved'){
    res.end ("welcome to ikramjaved server")
 }
 else if (req.url === '/ikram'){
    res.end ("we are not able to show anything about this")
 }else{
    res.end("invalid request")
 }

});

const port = 1000;

server.listen(port, () => console.log(`serveris running on port ${port}`));