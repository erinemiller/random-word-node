console.log("Hello world from Node!")

console.log(__dirname)

let fs = require('fs')
let colors = require('colors')
let http = require('http')
// require meets go get me that file system modules
// catch it in the variable 
//http network traffic
let curseWords = [
    'shit',
    'twat',
    'bitch',
    'hell',
    'damn'
]

//the order??

fs.readFile(__dirname + '/message.txt', {encoding: 'utf-8'}, (err, data) => {
    console.log("got file!".rainbow)
    console.log(err, data)
});


http.createServer(function (req, res) {
    // (request, response)
    // the request that came in and the response that came out
    console.log(`got a request on port 1337!!!`.red)
    // console.log(req)
    res.setHeader('Access-Control-Allow-Origin', '*');
    //so that the ajax request gets to the server
    res.writeHead(200, {"content-type": "text/html"})

    // var word = "fuck"

    // if (req.url === "/pg13"){
    //     word = "butt"
    // }

    var choseWord = curseWords[Math.floor(Math.random()*curseWords.length)];

    res.end(choseWord)
    //how you send out the final message

}).listen(1337)

// to make a new server tell it what port number
// port network number is -- 
// creating the server stays in node land ** stays running **
// local host: 1337 -- safari

// var word = "fuck"
// res.end(word)