const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const user = require("./storage/users.js");

module.exports = {
  register: async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (!username && !password) {
      res.status(400).json({
        error: {
          message: "Username or password is not set"
        }
      });
      return;
    }

    let userExists = await user.findOne({
      where: {
        username
      }
    });

    if (userExists) {
      res.status(400).json({
        error: {
          message: "Username is already used"
        }
      });
      return;
    }

    let hash = bcrypt.hashSync(password);

    user
      .create({
        username,
        password: hash
      })
      .then(newUser => {
        res.status(201).json({
          data: {
            token: jwt.sign({ userId: newUser.id }, process.env.TOKEN_SECRET)
          }
        });
      })
      .catch(() => {
        res.status(500).json({
          error: {
            message: "Problem registering, please try again later"
          }
        });
        return;
      });
  },

  login: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (!username && !password) {
      res.status(400).json({
        error: {
          message: "Username or password is empty"
        }
      });
      return;
    }

    user
      .findOne({
        where: {
          username
        }
      })
      .then(user => {
        if (bcrypt.compareSync(password, user.password)) {
          res.status(201).json({
            data: {
              token: jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET)
            }
          });
        } else {
          res.status(400).json({
            error: {
              message: "Username or password is wrong"
            }
          });
        }
      });
  }
};
