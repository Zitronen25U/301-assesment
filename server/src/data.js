'use strict';

const DataModel = require('./item-model.js');

const Data = {};

Data.addAnItem = async (req, res, next) => {
  try {
    const data = req.body;
    const item = new DataModel(data);
    item.save();
    res.status(200).json(item);
  } catch (e) { next(e.message); }
}

Data.getAllItems = async (req, res) => {
  try {
    // console.log('getting all');
    const items = await DataModel.find({});
    res.status(200).json(items);
  } catch (e) { next(e.message) };
}

Data.getOneItem = async (req, res) => {
  console.log('getting one');
  const id = req.params.id;
  const items = await DataModel.find({ _id: id });
  res.status(200).json(items[0]);

}

Data.deleteOneItem = async (req, res) => {
  try{
    const id = req.params.id;
    await DataModel.deleteOne({ _id: id });
    res.status(200).json('deleted');
  }catch(e) { next(e.message)};
}

Data.updateOneItem = async (req, res) => {
  try {
    console.log('update');
    const id = req.params.id;
    const data = req.body;
    const item = await DataModel.findByIdAndUpdate(id, data, { new: true, useFindAndModify: false });
    res.status(200).json(item);
  } catch (e) { next(e.message)};
}

module.exports = Data;
