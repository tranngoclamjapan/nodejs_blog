const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/kawaiistore_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect OK')
    } catch (error) {
        console.log('Connect fail')
    }

}
module.exports = { connect};