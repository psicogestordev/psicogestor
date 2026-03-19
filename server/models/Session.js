const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient',
            required: true,
        },
        psychologistId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        paymentStatus: {
            type: String,
            enum: ['pendente', 'pago'],
            default: 'pendente',
        },
    },
    {
        timestamps: true,
    }
);
const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;