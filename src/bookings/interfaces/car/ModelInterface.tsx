import {BrandInterface} from "./BrandInterface";

export interface ModelInterface {
    brand: BrandInterface,
    name: string,
    productionYear: string,
    carType: string,
    fuelType: string,
    isGearBoxAutomatic: boolean,
    numberOfDoors: number,
    numberOfSeats: number,
    trunkCapacity: number,
    horsePower: number,
    avgFuelConsumption: number
}