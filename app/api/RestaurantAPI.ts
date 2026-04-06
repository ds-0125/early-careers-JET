import type { Restaurant } from "~/types/Restaurant"

const postalCode = "EC4M7RF"
const url = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/"

export function fetchRestaurants(): Promise<Restaurant[]> {
    return fetch(url + postalCode)
    .then(res => res.json())
    .then(data => 
      data.restaurants.slice(0, 10).map((restaurant: any) => ({
        id: restaurant.id,
        name: restaurant.name,
        address: restaurant.address,
        rating: restaurant.rating,
        cuisines: restaurant.cuisines
      }))
    )
}