var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/workouts", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // blog route loads blog.html
  app.get("/workouts/range", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

};
