const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Employee, Role, Department } = require('../models');

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
        model: Department,
        attributes: ['id', 'title', 'salary', 'department_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
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
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
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
