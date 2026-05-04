import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { getPatients, getPatientById, createPatient, updatePatient, deletePatient } from '../controllers/patientController.js';

const router = express.Router();

router.use(protect);

router.get('/', getPatients);
router.get('/:id', getPatientById);
router.post('/', createPatient);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

export default router;