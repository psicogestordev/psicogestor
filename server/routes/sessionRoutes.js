import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { getSessions, getSessionsByPatient, createSession, updateSession, deleteSession } from '../controllers/sessionController.js';

const router = express.Router();

router.use(protect);

router.get('/', getSessions);
router.get('/patient/:patientId', getSessionsByPatient);
router.post('/', createSession);
router.put('/:id', updateSession);
router.delete('/:id', deleteSession);

export default router;