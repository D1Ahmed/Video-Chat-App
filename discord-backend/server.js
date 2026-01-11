const express =require ('express');
const http=require('http');
const cors =require('cors');
const mongoose=require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const PORT=process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth',authRoutes)

 
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("starting serverrr")
    const server =http .createServer(app);
    server.listen(PORT,function(){
        console.log(`Server is listeing on ${PORT}`);
    });
})
.catch(err=> {
    console.log("database con failed")
})