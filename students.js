const express=require('express')
const router=express.Router()

const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

]

router.get('/',(req,res)=>
{
   const names=students.map(s=>s.name).join(', ')
   res.send(`Students:${names}`)
})

router.get('/:id',(req,res)=>
{
   const id=req.params.id
   const snames=students.find(s=>s.id==id)
   if(!snames)
   {
    res.send(`Student not Found`)
   }
   res.send(`student ${snames.name}`)
})

module.exports=router
