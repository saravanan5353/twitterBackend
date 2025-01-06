import {Router} from 'express';

const router =Router();

//User Create End Points (Crud Operations)
 //creating User 
 router.post('/',(req,res)=>{
    res.status(501).json({error:'not Implemented'});
});
//List Users
router.get('/',(req,res)=>{
   res.status(501).json({error:'not Implemented'});
});
// Get One User
router.get('/:id',(req,res)=> {
   const {id}=req.params;
   res.status(501).json({error:`not Implemented: ${id}`});
});

//Update User
router.put('/:id',(req,res)=> {
   const {id}=req.params;
   res.status(501).json({error:`not Implemented: ${id}`});
});
// Delete User
router.delete('/?:id',(req,res)=> {
   const {id}=req.params;
   res.status(501).json({error:`not Implemented: ${id}`})
});


export default router;