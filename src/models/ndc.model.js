const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const ndcSchema = mongoose.Schema(
    {
        land: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Land',
        },
        applicantName: {
            type: String
        },
        phbNo: {
            type: String
        },
        membershipNo: {
            type: String
        },
        sonOf: {
            type: String
        },
        block: {
            type: String
        },
        phase: {
            type: String
        },
        area: {
            type: String
        },
        appliedBy: {
            type: Object
        },
        phoneNo: {
            type: String
        },
        applyDate: {
            type: Date,
            default: Date.now
        },
        fileCheckList: {
            type: Object
        },
        status: {
            type: String,
            enum: ["pending", "reject", "success"],
            default: "pending"
        },
        remarks: {
            type: String
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
