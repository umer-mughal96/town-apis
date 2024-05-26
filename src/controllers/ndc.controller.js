const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService } = require('../services');
const { getLandDoc } = require('../services/land.service');
const { createNdcDoc, allNdcs } = require('../services/ndc.service');

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

const getNdcs = async (req, res) => {
  try {
    let { query, projection, options } = req.query;
    let newQuery = {};
    if (query) {
      query = JSON.parse(query);
      Object.entries(query).map(([key, value]) => {
        if (typeof value === 'string') {
          newQuery[key] = new RegExp(`${value}`, 'i');
        } else {
          newQuery[key] = value;
        }
      });
    }
    if (projection) {
      projection = JSON.parse(projection);
    }
    if (options) {
      options = JSON.parse(options);
    }

    const ndcs = await allNdcs(query, projection, options).populate('land');
    const allNdcsCount = await allNdcs(query);

    let pageLimit;
    let pageNumber;
    if (options) {
      if (options.limit) {
        pageLimit = options.limit;

        if (options.skip) {
          pageNumber = options.skip / options.limit;
        }
      }
    }

    const pagination = {
      total: allNdcsCount.length,
      pageLimit,
      pageNumber,
    };
    res.status(httpStatus.OK).json({ success: true, ndcs, pagination });
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
  updateNdc,
  getNdcs,
};
