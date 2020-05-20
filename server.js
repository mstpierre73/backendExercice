const http = require('http');

const server = http.createServer((request, response) => {
    console.log('header', request.headers);
    console.log('method', request.method);
    console.log('url', request.url);

    const user = {
        name: 'Jean',
        hobby: 'skating'
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user))
})

server.listen(3000);
