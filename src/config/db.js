const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect('mongodb://localhost:27017/myapp', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// });

// database connection
mongoose.connect(process.env.DB_URI);
// .then(() => { console.log("Connection successful.") })
// .catch((err) => { console.log(err) })

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));
