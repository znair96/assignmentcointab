var mysqlConn = require("../config/sql");

module.exports.getHomePage = function (req, res) {
  var sql = "select username,email from user";
  mysqlConn.query(sql, function (err, userResult) {
    if (err) {
      console.log(err);
      return res.redirect("home");
    }
    return res.render("usermanage", {
      result: userResult,
    });
  });
};

module.exports.addUserInDb = function (req, res) {
  let { username, email, password } = req.body;
  console.log(req.body);
  var sql = `INSERT INTO user (username,email,password) VALUES ("${username}","${email}","${password}")`;
  mysqlConn.query(sql, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("1 record inserted");
    return res.redirect("home");
  });
};
