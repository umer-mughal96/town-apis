const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService } = require('../services');
const { getLandDoc } = require('../services/land.service');

const getById = async (req, res) => {
  console.log('🚀 ~ getById ~ req:', req.user);
  try {
    const id = req.params.id;
    const land = await getLandDoc({ _id: id }).populate('histories alerts installments bookings');
    if (!land) {
      return res.status(httpStatus.NOT_FOUND).json({ success: false, msg: 'Not Found' });
    }
    res.status(httpStatus.OK).json({ success: true, land });
  } catch (err) {
    console.log(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, error: err.message });
  }
};

const getByRegisNo = async (req, res) => {
  try {
    const regisNo = req.params.value;
    const land = await getLandDoc({ registrationNo: regisNo }).populate('histories alerts installments bookings');
    if (!land) {
      return res.status(httpStatus.NOT_FOUND).json({ success: false, msg: 'Not Found' });
    }
    res.status(httpStatus.OK).json({ success: true, land });
  } catch (err) {
    console.log(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, error: err.message });
  }
};

module.exports = {
  getById,
  getByRegisNo,
};
