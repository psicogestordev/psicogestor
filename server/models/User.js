import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({}); // TODO: Implementar schema do usuário
export default mongoose.model('User', userSchema);