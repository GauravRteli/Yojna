const express = require("express");
require("./conn");
const port =  5000;

const newYojna = require("./model/NewYojna");

const app = express();
app.use(express.json());

app.get("/getYojna",async (req, res) => {
  const { district } = req.body;
  console.log(req.body.district);
  const data = await newYojna.find( { district : district} );
  console.log(data);
});
app.post("/addyojna", async (req, res) => {
  const {
      yojnaid,
      yojnaname,
      yojnainfo,
      benifits,
      docsreq,
      applicationreq,
      annualincome,
      age,
      marraigeverification,
      employedverification,
      locality,
      caste,
      centreforapplication,
      address,
      district,
      pincode,
      heademail,
      headpassword,
  } = req.body;

  try{

    const headExist = await newYojna.find( { heademail : heademail } );
    // console.log(headExist);
    if(headExist == []){
        res.json( { message : "Yojna Already Exists !" } );
    }

    const yojna = new newYojna( {
      yojnaid,
      yojnaname,
      yojnainfo,
      benifits,
      docsreq,
      applicationreq,
      annualincome,
      age,
      marraigeverification,
      employedverification,
      locality,
      caste,
      centreforapplication,
      address,
      district,
      pincode,
      heademail,
      headpassword,
      });
    
    console.log(req.body)
      const data=await yojna.save();
  
      console.log(data);
      res.status(200).json({ message : "Success .",data:data });

  }catch (err){
    res.status(500).send( err );
  }

});

app.listen(port, () => {
  console.log("Listening");
});
