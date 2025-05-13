import mongoose from "mongoose";


const Schema = new mongoose.Schema({
name:{
type:String,
required: true,
},

groupChat:{
    type:  Boolean,
  default : false,
},
creator:{
    type: Types.ObjectId,
    ref: "User",

   
},
members:[{
    type: Type
}]
},
{
    timestamps: true ,
})


export const Chat = mongoose.models.Chat || mongoose.model("Chat", Schema);