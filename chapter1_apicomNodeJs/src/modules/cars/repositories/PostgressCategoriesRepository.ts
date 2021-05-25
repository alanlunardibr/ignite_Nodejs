/* eslint-disable prettier/prettier */

import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class PostgressCategoriesRepository implements ICategoriesRepository{
    findByName(name:string) : Category{
        throw new Error("Method")
    }
    list(): Category[]{
        throw new Error("Method not Implemented")
    }
    create({name, description}: ICreateCategoryDTO):void {
        console.log(name,description)
    }
}