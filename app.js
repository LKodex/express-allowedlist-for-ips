const app = require('express')();

// ip logger middleware
app.use((req, _, next) => {
    console.log(`[${process.env.TIME}] [LOG] Got a request from: ${req.ip}`);
    next();
});

// allowed list middleware
app.use((req, res, next) => {
    const allowedList = [ "Copy the allowed IPv4 or IPv6 here" ];
    const isIpAllowed = allowedList.find(value => value == req.ip) != undefined;
    if (isIpAllowed) {
        // if the IP is allowed, procceed handling the request
        next()
    } else {
        // if the ip isn't allowed, stops and return an error message
        res
            .status(200)
            .json({
                time: process.env.TIME,
                error: `Your IP (${req.ip}) isn't allowed.`,
            })
            .end();
    }
});

app.all("/", (_, res) => {
    res
        .status(200)
        .json({
            time: process.env.TIME,
            hello: "world",
        })
        .end();
});

module.exports = app;
