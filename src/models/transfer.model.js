const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const transferSchema = mongoose.Schema(
  {
    currentOwner: {
      type: Boolean,
      default: false
    },
    land: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Land',
    },
    cnic: {
      type: String
    },
    name: {
      type: String
    },
    sdw: {
      type: String
    },
    sonOf: {
      type: String
    },
    fatherHusbandName: {
      type: String
    },
    transferDate: {
      type: String
    },
    transferCharges: {
      type: String
    },
    address: {
      type: String
    },
    mobile: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);


// add plugin that converts mongoose to json
transferSchema.plugin(toJSON);

/**
 * @typedef Transfer
 */
const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;
