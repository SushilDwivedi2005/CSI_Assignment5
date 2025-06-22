import mongoose from "mongoose";
//
const url ='mongodb://localhost:27017/note_app'
// const connectToMongoDB = async () => {
//   try {
//     await mongoose.connect(url);
//     console.log('connected to mongo');
    
//   } catch (error) {
//     console.log(error);
//   }
// };

mongoose.connect(url);
const connectToMongoDB=mongoose.connection;
connectToMongoDB.on('open',()=>{
    console.log("connected..")
})

export default connectToMongoDB;
