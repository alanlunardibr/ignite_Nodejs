/* eslint-disable prettier/prettier */
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ description, name }: IRequest): void {
    const categoriaExiste = this.categoriesRepository.findByName(name);

    if (categoriaExiste) {
      throw new Error("Category já lançada")
    }

    this.categoriesRepository.create({ name, description });
  }
}
export { CreateCategoryUseCase };