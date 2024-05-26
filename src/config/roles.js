const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers'],
  com: ['getNdcs', 'createNdcs'],
};

const roles = Object.keys(allRoles);
console.log('🚀 ~ roles:', roles);
const roleRights = new Map(Object.entries(allRoles));
console.log('🚀 ~ roleRights:', roleRights);

module.exports = {
  roles,
  roleRights,
};
