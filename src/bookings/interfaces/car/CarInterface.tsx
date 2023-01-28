import {ItemInterface} from "../ItemInterface";
import {ModelInterface} from "./ModelInterface";

export interface CarInterface extends ItemInterface {
    id: string,
    model: ModelInterface,
    mileage: number,
    equipment: string[],
    dayPrice: number,
    color: string,
    photos: string[]
}