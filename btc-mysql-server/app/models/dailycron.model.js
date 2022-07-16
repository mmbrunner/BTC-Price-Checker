var cron = require('node-cron');

cron.schedule('0 6-18/1 * * *',() => {
    console.log('running every hour between 6am & 6pm')
},{
    scheduled: true,
    timezone: "America/Dallas"
});