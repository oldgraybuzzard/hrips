// future development
const router = require('express').Router();
const { Role } = require('../../models');
const withAuth = require('../../utils/auth');

 //Get all Roles
 router.get('/', (req, res) => {
  Role.findAll()
    .then(dbRoleData => res.json(dbRoleData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get a single Role
router.get('/:id', (req, res) => {
  Role.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbRoleData => {
      if (!dbRoleData) {
        res.status(404).json({ message: 'No Role found with this id' });
        return;
      }
      res.json(dbRoleData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

// Add an Role
router.post('/', (req,res) => {
  Role.create({
    title: req.body.title,
    salary: req.body.salary,
    department_id: req.body.department_id
  })
  .then(dbRoleData => {
    req.session.save(() => {
      req.session.Role_id = dbRoleData.id;
      req.session.title = dbRoleData.title;
      req.session.salary = dbRoleData.salary;
      req.session.department_id = dbRoleData.department_id;

      res.json(dbRoleData);
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// Update the Role
router.put('/:id', (req, res) => {
  Role.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbRoleData => {
      if (!dbRoleData) {
        res.status(404).json({ message: 'No Role found with this id' });
        return;
      }
      res.json(dbRoleData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete and Role
router.delete('/:id', (req, res) => {
  Role.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbRoleData => {
    if (!dbRoleData) {
      res.status(404).json({ message: 'No Role found with this id' });
      return;
    }
    res.json(dbRoleData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;