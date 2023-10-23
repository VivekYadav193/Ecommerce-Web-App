const mongoose = require('mongoose');
const dotenv = require('dotenv');   



const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    }).then(() => 
    {
        console.log('Database Connected');
    }
    )
}

module.exports = connectDatabase;