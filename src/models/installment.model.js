const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const installmentSchema = mongoose.Schema(
    {
        land: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Land',
        },
        installmentNo: {
            type: String
        },
        dueDate: {
            type: String
        },
        dueAmount: {
            type: String
        },
        rebatAmount: {
            type: String
        },
        receiveAmount: {
            type: String
        },
        osAmount: {
            type: String
        },
        receiptAmount: {
            type: String
        },
        date: {
            type: String
        },
        adjustmentAmount: {
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
 * @typedef Installment
 */
const Installment = mongoose.model('Installment', installmentSchema);

module.exports = Installment;
