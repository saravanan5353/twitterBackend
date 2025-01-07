import {Router} from 'express';
import { PrismaClient } from '@prisma/client';
import { error } from 'console';

const router =Router();
const prisma=new PrismaClient();

//User Create End Points (Crud Operations)
 //creating User 
router.post('/', async (req, res) => {
   const { email, name, username } = req.body;
   console.log(email, name, username);
   try {
      const result = await prisma.user.create({
         data: {
            email,
            name,
            username,
            bio: "hello I am new on Twitter",
         }
      })
      res.json(result);
   }
   catch (e) {
      res.status(400).json({ error: "username and email to be unique" })
   }
});
//List Users
router.get('/',async (req,res)=>{
   const allUser= await prisma.user.findMany();
   res.json(allUser);
});
// Get One User
router.get('/:id', async (req,res)=> {
   const {id}=req.params;
   const user =await prisma.user.findUnique({where: {id:Number(id)}}); 
   res.json(user);
});

//Update User
router.put('/:id',async (req,res)=> {
   const {id}=req.params;
   const {bio,name,image} =req.body;
   try {
      const result = await prisma.user.update({
         where :{id: Number(id)},
         data :{
            bio,
            image,
            name
         }
      })
      res.json(result)
   }
   catch (e){
      res.status(400).json({error:`unable to update the user`});
   }
});
// Delete User
router.delete('/:id',async (req,res)=> {
   const {id}=req.params;
   try {
      const result= await prisma.user.delete({where:{id :Number(id)}});
      res.sendStatus(200).json({
         "sucsess":"sucesfully deleted"
      })
   }
   catch (e)
   {
      res.status(400).json({error:`unable to delete user Id ${id} ${e}`})
   }
});


export default router;