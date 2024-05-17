const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const installmentSchema = mongoose.Schema(
    {
        land: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Land',
        },
        applicant: {
            type: String
        },
        sonOf: {
            type: String
        },
        landNo: {
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
        propertyDealer: {
            type: String
        },
        phoneNo: {
            type: String
        },
        date: {
            type: String
        },
        status: {
            type: String,
            enum: ["pending", "reject", "success"]
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
installmentSchema.plugin(toJSON);

/**
 * @typedef Land
 */
const Installment = mongoose.model('Installment', installmentSchema);

module.exports = Installment;
