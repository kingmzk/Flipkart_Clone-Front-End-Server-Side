import mongoose from "mongoose";

export const Connection = async (USERNAME,PASSWORD) =>{


    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@ECOMMERCEDB.fo58si4.mongodb.net/?retryWrites=true&w=majority`;
    try{
     await   mongoose.connect(URL,{useUnifiedTopology: true ,useNewUrlParser: true});
     console.log("Database Connected Successfully");
    }
    catch(error)
    {
        console.log("Error While Connecting With dataBase ",error.message);
    }
}

export default Connection;  