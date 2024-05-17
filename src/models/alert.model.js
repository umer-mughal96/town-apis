const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const alertSchema = mongoose.Schema(
    {
        land: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Land',
        },
        narration: {
            type: String
        },
        postBy: {
            type: String
        },
        postingDate: {
            type: String
        },
    },
    {
        timestamps: true,
    }
);


// add plugin that converts mongoose to json
alertSchema.plugin(toJSON);

/**
 * @typedef Alert
 */
const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;
