// future development
const router = require('express').Router();
const { Sequelize } = require('sequelize/dist');
const { Employee, Role } = require('../../models');
const withAuth = require('../../utils/auth');

 //Get all employees
    router.get('/', (req, res) => {
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
            attributes: ['id', 'title', 'salary', 'department_id']
          }
        ],
      })
        .then(dbEmployeeData => res.json(dbEmployeeData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });
  
//Get a single employee
    router.get('/:id', (req, res) => {
      Employee.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(dbEmployeeData => {
          if (!dbEmployeeData) {
            res.status(404).json({ message: 'No employee found with this id' });
            return;
          }
          res.json(dbEmployeeData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    })

// Add an employee
    router.post('/', (req,res) => {
      Employee.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        manager_id: req.body.manager_id,
        role_id: req.body.role_id
      })
      .then(dbEmployeeData => {
        req.session.save(() => {
          req.session.employee_id = dbEmployeeData.id;
          req.session.first_name = dbEmployeeData.first_name;
          req.session.last_name = dbEmployeeData.last_name;
          req.session.email = dbEmployeeData.email;
          req.session.manager_id = dbEmployeeData.manager_id;
          req.session.role_id = dbEmployeeData.role_id;
    
          res.json(dbEmployeeData);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


// Update the employee
    router.put('/:id', (req, res) => {
      Employee.update(req.body, {
        individualHooks: true,
        where: {
          id: req.params.id
        }
      })
        .then(dbEmployeeData => {
          if (!dbEmployeeData) {
            res.status(404).json({ message: 'No employee found with this id' });
            return;
          }
          res.json(dbEmployeeData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

    //delete and employee
    router.delete('/:id', (req, res) => {
      Employee.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(dbEmployeeData => {
        if (!dbEmployeeData) {
          res.status(404).json({ message: 'No employee found with this id' });
          return;
        }
        res.json(dbEmployeeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

    module.exports = router;