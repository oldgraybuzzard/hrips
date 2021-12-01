//Imports models into this area
const User = require('./User');
const Employee = require('./Employee');
const Department = require('./Department');
const Role = require('./Role');

//Associations created in the area below
Employee.belongsTo(Role, {
  foreignKey: 'role_id',
  onDelete: 'SET NULL'
});
Role.belongsTo(Department, {
  foreignKey: 'department_id',
  onDelete: 'SET NULL'
});

module.exports = { User, Employee, Department, Role };