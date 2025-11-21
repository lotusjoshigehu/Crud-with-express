const express=require('express')
const app=express()

const homeRouter=require('./crudroutes/home')
const courseRouter=require('./crudroutes/course')
const studentRouter=require('./crudroutes/students')

app.use('/course',courseRouter)
app.use('/home',homeRouter)
app.use('/students',studentRouter)

app.get('/',(req,res)=>
{
    res.send(`<h1>Welcome to the Student & Course Portal API</h1>`)
})
app.use((req,res)=>
{
    res.status(404).send(`Page not found`)
})
app.listen(4000,()=>
{
    console.log('server is running')
})


