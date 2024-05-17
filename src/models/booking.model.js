const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const bookingSchema = mongoose.Schema(
    {
        land: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Land',
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
        receiptNo: {
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
bookingSchema.plugin(toJSON);

/**
 * @typedef Booking
 */
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
