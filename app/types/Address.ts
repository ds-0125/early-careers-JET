import type { PointLocation } from "./Location"


export interface Address {
    city : string,
    firstLine : string,
    postalCode : string,
    location : PointLocation
}