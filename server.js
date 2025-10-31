const http = require('http')
const port = 8000
const students = [
    {"name": "A","prodi": "ti"},
    {"name": "B","prodi": "ti"},
    {"name": "C","prodi": "te"},
    {"name": "D","prodi": "te"},
]
;
const server = http.createServer((req, res)=>{
    res.writeHead(200)
    res.write("<h1>Welcome to My Server</h1>");
    res.end()
})

server.listen(port,()=>{
    console.log (`Server running at http://localhost:${port}`);
})

if (req.url=='/'){
    res.write("<h1>Welcome to My Server</h1>")
}
else if(req.url=='/students'){
    res.write("Student Page")
    res.write(JSON.stringify(students))
}
else if (req.url=='/ti'){
    res.write ("Informatics Students")
    const te = students.filter(s=> s.prodi=='ti')
    res.write(JSON.stringify(ti))
}
else if (req.url=='/te'){
    res.write ("Electrical Student")
    const te = students.filter(s=> s.prodi=='te')
    res.write(JSON.stringify(te))
}
else{
    res.write("404 Not Found")
    res.end()
}

server.listen(port, ()=>{
    console.log('Server running at http://localHost:${port}');
})