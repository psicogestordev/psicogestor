const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
    {
        psychologistId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
        },
        sessionPrice: {
            type: Number,
            required: true,
        },
        scheduleDays: {
            type: [String],
        },
        scheduleTime: {
            type: String, 
        },
        documentLinks: [
            {
                title: String,
                url: String,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;