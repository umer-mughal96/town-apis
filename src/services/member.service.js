
const { Member } = require('../models');

const createMembers = (data) => {
  return Member.create(data);
};

module.exports = {
  createMembers,
};
