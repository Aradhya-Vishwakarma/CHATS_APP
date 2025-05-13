import mongoose from "mongoose";


const Schema = new mongoose.Schema({
  status:{
    type: String,
    enum: ["active", "inactive" , "pending"],
    default: "pending",
  },

sender:{
  type: Types.ObjectId,
  ref: "User",
  required: true,
},
receiver:{
 type: Types.ObjectId,
 ref: "User",
 required: true,
},

},
{
    timestamps: true ,
})


export const Request = mongoose.models.Request || mongoose.model("Request", Schema);