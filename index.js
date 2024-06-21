let express = require('express');

app = express();

app.get('/formattedAddress',(req,res)=>{
  console.log("Hello")
})


let PORT = 3000;
app.listen(PORT,()=>{
  console.log(`Server is running on port https://localhost/${PORT}`);
})