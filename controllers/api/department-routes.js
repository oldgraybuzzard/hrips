// future development
const router = require('express').Router();
const { Department } = require('../../models');

//Get all departments
router.get('/', (req, res) => {
  Department.findAll()
  .then()
  .then(dbDepartmentData => res.json(dbDepartmentData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

  //Get one department
  router.get('/:id', (req, res) => {
    Department.findOne({
      where: {
          id: req.params.id
      },
    })
    .then(dbDepartmentData => {
      if (!dbDepartmentData) {
        res.status(404).json({ message: 'No department found with this id' });
        return;
      }
      res.json(dbDepartmentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Delete one department
router.delete('/:id', (req, res) => {
  Department.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbDepartmentData => {
    if (!dbDepartmentData) {
      res.status(404).json({ message: 'No department found with this id' });
      return;
    }
    res.json(dbDepartmentData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


//Add a department
router.post('/', (req, res) => {
  Department.create({
    name: req.body.name,
  })
  .then(dbDepartmentData => {
    req.session.save(() => {
      req.session.department_id = dbDepartmentData.id;
      req.session.name = dbDepartmentData.name;
      
      res.json(dbDepartmentData);
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  Department.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
      .then(dbDepartmentData => {
        if (!dbDepartmentData) {
          res.status(404).json({ message: 'No department found with this id' });
          return;
        }
        res.json(dbDepartmentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

module.exports = router;