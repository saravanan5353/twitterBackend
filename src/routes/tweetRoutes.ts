import {Router} from 'express';

const router =Router();

//Tweet Create End Points (Crud Operations)
 router.post('/',(req,res)=>{
    res.status(501).json({error:'not Implemented'});
});
//List Tweet
router.get('/',(req,res)=>{
   res.status(501).json({error:'not Implemented'});
});
// Get One Tweet
router.get('/:id',(req,res)=> {
   const {id}=req.params;
   res.status(501).json({error:`not Implemented: ${id}`});
});

//Update Tweet
router.put('/:id',(req,res)=> {
   const {id}=req.params;
   res.status(501).json({error:`not Implemented: ${id}`});
});
// Delete Tweet
router.delete('/?:id',(req,res)=> {
   const {id}=req.params;
   res.status(501).json({error:`not Implemented: ${id}`})
});


export default router;