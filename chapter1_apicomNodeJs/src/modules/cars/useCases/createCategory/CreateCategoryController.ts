/* eslint-disable import-helpers/order-imports */
/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController{

    constructor(private CreateCategoryUseCase: CreateCategoryUseCase){}

    handle(request: Request, response:Response): Response {
        const { name, description } = request.body;
    
        this.CreateCategoryUseCase.execute({name,description})
    
        response.status(201).send({ message: "Gravado com sucesso" });
    }
}

export { CreateCategoryController}