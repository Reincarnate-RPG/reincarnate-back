import { MongoWorldRepository } from '@/repositories/World/MongoWorldRepository';
import { DeleteWorldUseCase } from './DeleteWorldUseCase';
import { DeleteWorldController } from './DeleteWorldController';

const mongodeleteWorldRepository = new MongoWorldRepository();

const deleteWorldUseCase = new DeleteWorldUseCase(mongodeleteWorldRepository);

const deleteWorldController = new DeleteWorldController(deleteWorldUseCase);

export { deleteWorldController };
