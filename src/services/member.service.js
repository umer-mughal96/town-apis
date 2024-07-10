const { Member } = require('../models');

const createMembers = (data) => {
  return Member.create(data);
};

const findMember = (obj) => {
  return Member.findById(id);
};

const findMemberAndUpdate = (id, newDocument) => {
  return Member.findOneAndReplace(
    { _id: id }, // The filter to find the document
    newDocument, // The new document to replace the old one
    { new: true } // Options: `new: true` to return the modified document rather than the original
  );
};

module.exports = {
  createMembers,
  findMember,
  findMemberAndUpdate
};
