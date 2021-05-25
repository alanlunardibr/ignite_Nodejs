/* eslint-disable prettier/prettier */
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest{
    name:string;
    description:string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository){    }

    execute(  { description, name }:IRequest ): void{
        const specificationExists = this.specificationsRepository.findByName(name);

        if (specificationExists){
            throw new Error("Especificação já lançada")
        }
        
        this.specificationsRepository.create({name, description });
    }

}
export { CreateSpecificationUseCase };