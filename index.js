const app = require('./app');
require('dotenv').config();

function updateTimeEnv() {
    const date = new Date();
    process.env.HOURS = new String(date.getHours()).padStart(2, "0");
    process.env.MINUTES = new String(date.getMinutes()).padStart(2, "0");
    process.env.SECONDS = new String(date.getSeconds()).padStart(2, "0");
    process.env.TIME = `${process.env.HOURS}:${process.env.MINUTES}:${process.env.SECONDS}`;
}

setInterval(updateTimeEnv, 1000);
updateTimeEnv();

app.listen(process.env.PORT, () => {
    console.log(`[${process.env.TIME}] [LOG] Listening on localhost:${process.env.PORT}`);
});
