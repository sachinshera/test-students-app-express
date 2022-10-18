const mongoose = require('mongoose');

// set db url
const dbUrl = `mongodb+srv://sachin:t8vb1Ogd6Oa0WQTr@cluster0.9tvqwmp.mongodb.net/?retryWrites=true&w=majority`;

// connect to db
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// get connection object
const db = mongoose.connection;

// bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});



// export db 

module.exports = db;
