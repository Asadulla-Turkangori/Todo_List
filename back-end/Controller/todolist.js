const Lists = require('../Models/Lists');

exports.getAllLists = async (req,res)=>{
    try{
        const [data] = await Lists.fetchAll();
        res.status(200).json(data);
    }
    catch(err){
        return err;
    }
};



exports.insertList = async (req,res)=>{
    try{
        const postResponse = await Lists.post(req.body.description);
        res.status(201).json(postResponse);
    }
    catch(err){
        return err;
    }
};



exports.updateList = async (req,res)=>{
    try{
        const putResponse = await Lists.update(req.body.id,req.body.description);
        res.status(200).json(putResponse);
    }
    catch(err){
        return err;
    }
};


exports.deleletList = async (req,res)=>{
    try{
        const deleteResponse = await Lists.delete(req.params.id);
        res.status(200).json(deleteResponse);
    }
    catch(err){
        return err;
    }
};


exports.updateActive = async (req,res)=>{
    try{
        const putActive = await Lists.updateAct(req.params.id,req.body.active);
        res.status(200).json(putActive);
    }
    catch(err){
        return err;
    }
};
