const util = require("util");

module.exports = () => {
  return (err, req, res, next) => {
    res.status(500).json({
      error: util.format(err),
    });
  };
};
