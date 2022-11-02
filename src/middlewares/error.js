const errorCheck = (error, req, res, _next) => {
  const { statusCode, message } = error;
  return res.status(statusCode || 500).json({ message });
};

module.exports = errorCheck;