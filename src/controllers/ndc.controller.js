const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService } = require('../services');
const { getLandDoc } = require('../services/land.service');
const { createNdcDoc } = require('../services/ndc.service');

const apply = async (req, res) => {
  try {
    const ndcFormData = req.body;
    const ndc = await createNdcDoc(ndcFormData);
    res.status(httpStatus.OK).json({ success: true, ndc });
  } catch (err) {
    console.log(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, error: err.message });
  }
};

const updateNdc = async (req, res) => {
  try {
    const ndcFormData = req.body;
    const ndc = await createNdcDoc(ndcFormData);
    res.status(httpStatus.OK).json({ success: true, ndc });
  } catch (err) {
    console.log(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, error: err.message });
  }
};

module.exports = {
  apply,
  updateNdc
};
