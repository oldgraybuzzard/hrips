const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Employee, Role } = require('../models');

// get all employees for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Employee.findAll({
    attributes: [
      'id',
      'first_name',
      'last_name',
      'email',
      'manager_id',
      'role_id'
    ],
    include: [
      {
        model: Role,
        attributes: ['id', 'title', 'salary', 'department_id'],
      },
    ]
  })
    .then(dbEmployeeData => {
      const employees = dbEmployeeData.map(employees => employees.get({ plain: true }));

      res.render('homepage', {
        employees,
        // loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single employee
router.get('/employee/:id', (req, res) => {
  Employee.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'first_name',
      'last_name',
      'email',
      'manager_id',
      'role_id'
    ],
    include: [
      {
        model: Role,
        attributes: ['id', 'title', 'salary', 'department_id'],
      },
    ]
  })
    .then(dbEmployeeData => {
      if (!dbEmployeeData) {
        res.status(404).json({ message: 'No employee found with this id' });
        return;
      }

      const employee = dbEmployeeData.get({ plain: true });

      res.render('employee', {
        employee,
        // loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
