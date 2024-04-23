const { default: ShortUniqueId } = require("short-unique-id");
const URL = require("../Models/url");

const generateNewShortUrl = async(req,res)=>{
    const {url} = req.body;
    if(!url){
        return res.status(400).json("Please provide url")
    }

    const uid= new ShortUniqueId({length:6});
    console.log(uid.rnd());

    const entry =await URL.create({
        shortid : uid.rnd(),
        redirectedURL : url,
        totalVisit:[]
    })
    return res.status(200).json(entry)
}


const getShortUrl= async(req,res)=>{
    const {shortid} = req.params;
    console.log(req.params);
    if(!shortid){
        return res.status(400).json("Please provide data...")
    }
    const entry = await URL.findOneAndUpdate({shortid},{
        $push:{
            totalVisit: {
                timestamp:  Date.now(),
            },
        },
        $inc:{
            clicks:1
        }
    })
    return res.status(200).json(entry);
}


const rediretTo= async(req,res)=>{
    const {shortid} = req.params;
    console.log(req.params);
    if(!shortid){
        return res.status(400).json("Please provide data...")
    }
    const entry = await URL.findOne({
        shortid
    })
    res.status(200).redirect(entry.redirectedURL)
}

module.exports ={
    generateNewShortUrl,
    getShortUrl,
    rediretTo
}