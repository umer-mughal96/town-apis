const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const memberSchema = mongoose.Schema(
  {
    ndc: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Ndc',
      required: true
    },
    members: [
      {
        cnic: {
          type: String,
        },
        name: {
          type: String,
        },
        sonOf: {
          type: String,
        },
        address: {
          type: String,
        },
        phoneNo: {
          type: String,
        },
        cnicUpload: {
          type: Object,
        },
        photoUpload: {
          type: Object,
        },
      },
    ],
    buyerWitness: {
      type: Object,
    },
    sellerWitness: {
      type: Object,
    },
    photos: {
      type: Array,
    },
    video: {
      type: Object,
    },
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
