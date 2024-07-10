const allRoles = {
  ndc: ['createNdc', 'updateNdc'],
  admin: ['approveNdc', 'manageUsers'],
  gm: ['verifyNdc'],
  com: ['createNdc', 'updateNdc'],
};

const roles = Object.keys(allRoles);
console.log('🚀 ~ roles:', roles);
const roleRights = new Map(Object.entries(allRoles));
console.log('🚀 ~ roleRights:', roleRights);

module.exports = {
  roles,
  roleRights,
};
