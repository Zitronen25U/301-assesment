'use strict';

const DataModel = require('./item-model.js');

const Data = { };

Data.addAnItem = async(req,res,next) => {
  try {
    console.log('adding item');
    const data = req.body.item;
    const item = new DataModel(data);
    res.status(200).send(item);
  } catch(e) { next(e.message); }
}

Data.getAllItems = async(req, res) => {
  console.log('getting');
  const items = await DataModel.find({});
  res.status(200).json(items);
}

Data.getOneItem = async(req, res) => {
  console.log('getting');
  const id = req.param.id;
  const items = await DataModel.find({_id:id});
  res.status(200).json(items[0]);
}

Data.deleteOneItem = async(req, res) => {
  
}

Data.updateOneItem = async(req, res) => {
  console.log('update');
  const id = req.param.id;
  const data = req.body;
  const item = await DataModel.findByIdAndUpdate(id, data, {new:true, useFindAndModify:false});
  res.status(200).json(item);
}

module.exports = Data;
