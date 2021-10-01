import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomersRepositories from '../typeorm/repositories/CustomersRepositories';

interface IRequest {
  name: string;
  email: string;
}

class CreateCustomerService {
  public async execute({ name, email }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomersRepositories);
    const emailExists = await customersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email Address already used');
    }

    const custumers = customersRepository.create({
      name,
      email,
    });

    await customersRepository.save(custumers);

    return custumers;
  }
}

export default CreateCustomerService;
