const mongoose = require('mongoose')
const uri = "mongodb+srv://admin:admin123@cluster0.glogork.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
    try {
        // console.log(process.env.MONGO_URI)
        const con = await mongoose.connect(uri, {
            // useFindAndModify:false,
            // useCreateIndex:true
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`connnection successfull ${con.connection.host}`)
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB