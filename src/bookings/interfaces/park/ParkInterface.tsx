export interface ParkInterface {
    id: string,
    description: string,
    name: string,
    photo: string,
    pricePerDay: number,
    latitude: number,
    longitude: number,
    security: boolean,
    parkingLotType: string,
    capacity: number
}