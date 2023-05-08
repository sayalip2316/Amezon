const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./routes/user.routes")
const {mobileRouter}=require("./routes/mobile.routes")
const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())

app.use("/user",userRouter)
app.use("/mobile",mobileRouter)

app.listen(4500,async()=>{
    try {
        await connection
        console.log("Connected to db")
        console.log("Server is listening at port 4500")
    } catch (error) {
        console.log(error)
    }
    
})