const express=require('express')
const router=express.Router()

const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

]

router.get('/',(req,res)=>
{
   const coursesnames=courses.map(c=>c.name).join(', ')
   res.send(`Courses:${coursesnames}`)
})

router.get('/:id',(req,res)=>
{
   const id=req.params.id
   const coursesid=courses.find(c=>c.id==id)
   if(!coursesid)
   {
       return res.send(`Course not Found`)
   }
   res.send(`Course ${coursesid.name},Description ${coursesid.description}`)
})

module.exports=router
