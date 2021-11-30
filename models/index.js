//Imports models into this area
const User = require('./User');
const Employee = require('./Employee');
const Department = require('./Department');
const Role = require('./Role');

//Associations created in the area below
Role.belongsTomany(Employee, {
  foreignKey: 'role_id',
  onDelete: 'SET NULL'
}),
Role.hasMany(Employee, {
  foreignKey: 'employee_id',
  onDelete: 'SET NULL'
}),
Department.belongsToMany(Employee, {
  foreignKey: 'department_id',
  onDelete: 'SET NULL'
}),
Employee.belongsTo(Department,{
  foreignKey: 'department_id',
  onDelete: 'SET NULL'
}),

module.exports = { User, Employee, Department, Role };