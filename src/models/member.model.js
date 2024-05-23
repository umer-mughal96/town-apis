const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const memberSchema = mongoose.Schema(
  {
    ndc: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Ndc',
    },
    members: [
      {
        cnic: {
          type: String,
        },
        name: {
          type: String,
        },
        fatherHusbandName: {
          type: String,
        },
        address: {
          type: String,
        },
        mobile: {
          type: String,
        },
        city: {
          type: String,
        },
        thumbImpression: {
          type: Object,
        },
        picture: {
          type: Object,
        },
        video: {
          type: Object,
        },
        sign: {
          type: Object,
        },
        witnessSign: {
          type: Object,
        },
        thumbImpression: {
          type: Object,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
memberSchema.plugin(toJSON);

/**
 * @typedef Member
 */
const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
