"use strict";
const Message = require("../../models/Message");

exports.createMessage = async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getMessage = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    }).populate("sender");
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
};
