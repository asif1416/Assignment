const app = require('./app');
app.listen(process.env.RUNNING_PORT, () => {
    console.log(`Server running @ http://localhost:${process.env.RUNNING_PORT}`)
});