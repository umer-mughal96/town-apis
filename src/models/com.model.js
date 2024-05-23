const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const changeOfMemberShipSchema = mongoose.Schema(
  {
    currentOwner: {
      type: Boolean,
      default: false,
    },
    land: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Land',
    },
    cnic: {
      type: String,
    },
    name: {
      type: String,
    },
    sdw: {
      type: String,
    },
    sonOf: {
      type: String,
    },
    fatherHusbandName: {
      type: String,
    },
    transferDate: {
      type: String,
    },
    transferCharges: {
      type: String,
    },
    address: {
      type: String,
    },
    mobile: {
      type: String,
    },
    attachments: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
changeOfMemberShipSchema.plugin(toJSON);

/**
 * @typedef ChangeOfMemberShipSchema
 */
const ChangeOfMemberShipSchema = mongoose.model('Com', changeOfMemberShipSchema);

module.exports = ChangeOfMemberShipSchema;
