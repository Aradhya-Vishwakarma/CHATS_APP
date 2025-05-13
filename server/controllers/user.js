import {User} from "../models/user.js";


const newUser = async( req, res ) => {

   const {name, username, password} = req.body;

const avatar = {
   public_id : "abcd",
   url:"dsca",
};
   
await User.create({
   name:"Aradhya",
   username:"aaru",
   password:"aradhya@12345",
   avatar,
})

   res.status(201).json({message: "User created successfully "});
};


 const login = (req, res) => {
  res.json( "Login route working!" );
};
export { newUser, login };

