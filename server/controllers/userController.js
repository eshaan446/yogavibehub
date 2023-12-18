import asyncHandler from 'express-async-handler'
import {prisma} from '../config/prismaConfig.js'
export const createBooking = async (req, res) => {
    const{name,age,batch}=req.body.data;
    console.log(req.body.data)
    try{
        const user=await prisma.user.create({
            data:{
                name,age,batch
            }
        })
        res.send({message:" User with Booking added successfully", user:user})

    }catch(err){
        res.status(400).send("This booking exists")
    }
  
  };
export const getBookings=asyncHandler(async(req,res)=>{
    const bookings=await prisma.user.findMany({
        orderBy:{
            age:"desc"
        }
    })
    res.send(bookings)

})
export const getUser=asyncHandler(async(req,res)=>{
    const{id}=req.params
    try{
        const user=await prisma.user.findUnique({where:{id:id}})
        res.send(user)
    }catch(err){
        throw new Error("cannot find this user")
    }

})

export const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await prisma.user.delete({ where: { id: id } });
      if (deleted) {
        res.send({ message: "User Deleted Successfully" });
      }
    } catch (err) {
      console.log("User wasnt Found");
      throw new Error(err.messsage);
    }
  });
