const handleRequest = (req, res) => {
    if (req.url === '/getServerInfo' && req.method === 'GET') {
        const serverInfo = {
            serverName: 'My Node.js Server',
            requestInfo: {
                url: req.url,
                method: req.method,
                headers: req.headers,
            }
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(serverInfo));
        return true;
    }else if (req.url === '/postInfo' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const data = JSON.parse(body);
            console.log(data);
            const responseData = { message: 'Data received successfully!' };
            const jsonResponse = JSON.stringify(responseData);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(jsonResponse);
        });
        return true;
    } else {
        return false;
    }
};

module.exports = { handleRequest };
