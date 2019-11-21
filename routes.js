const fs = require('fs')

module.exports = requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader("Content-Type", "text/html")
    if (url === '/') {
        res.write(`
        <html>
        <head><title>Enter Message</title></head>
        <body>
        <form action="/message" method="POST">
        <input type="text" name="message">
        <button type="submit">Press</button>
        </form>
        </body>
        </html>
        `);
        return res.end();
    }
    if (url === "/message" && method == "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message, (err) => {
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
}