const mongoose = require('mongoose');

const yojnaSchema = new mongoose.Schema({

    yojnaid:{
        type:Number,
        require:true
    },
    yojnaname:{
        type:String,
        require: true
    },
    yojnainfo:{
        type:String,
        require:true
    },
    benifits:{
        type:String,
        require:true
    },
    docsreq:{
        type:String,
        require:true
    },
    applicationreq:{
        type:String,
        require:true
    },
    //eligibilty crieteria starts,
    annualincome:{
        type:Number,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    marriageverification:{
        type:Boolean,
        require:true
    },
    employedverification:{
        type:Boolean,
        require:true
    },
    locality:{
        type:String,
        require:true
    },
    caste:{

        type:String,
        require:true
    },
    centreforapplication:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    district:{
        type:String,
        require:true
    },
    pincode:{
        type:Number,
        require:true
    },
    //Head Details
    heademail:{
        type:String,
        require:true
    },
    headpassword:{
        type:String,
        require:true
    }
    
});

const newYojna = mongoose.model("yojna",yojnaSchema);

module.exports = newYojna;