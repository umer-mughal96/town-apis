const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const ndcSchema = mongoose.Schema(
  {
    land: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Land',
      required: true,
    },
    member: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Member',
    },
    applicantName: {
      type: String,
    },
    applicantType: {
      type: String,
    },
    sonOf: {
      type: String,
    },
    address: {
      type: String,
    },
    cnic: {
      type: String,
    },
    phoneNo: {
      type: String,
    },
    applyDate: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
    },
    fileCheckList: {
      type: Object,
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'verified', 'approved', 'reject'],
      default: 'pending',
    },
    fees: {
      type: String,
      enum: ['urgent', 'normal'],
    },
    remarks: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
ndcSchema.plugin(toJSON);

/**
 * @typedef NDC
 */
const NDC = mongoose.model('Ndc', ndcSchema);

module.exports = NDC;
