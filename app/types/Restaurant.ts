import type { Address } from "./Address"
import type { Rating } from "./Rating"
import type { Cuisine } from "./Cuisine"


export interface Restaurant {
    id : string,
    name : string,
    address : Address,
    rating : Rating,
    cuisines : Cuisine[]   
}