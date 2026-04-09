import type { Restaurant } from "~/types/Restaurant"

const postalCode = "EC4M7RF"
const url = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/"

export function fetchRestaurants(): Promise<Restaurant[]> {
    return fetch(url + postalCode)
    .then(res => res.json())
    .then(data => 
      data.restaurants.slice(0, 10).map((restaurant: any) => (processRestaurant(restaurant)))
    )
}

export function processRestaurant(restaurant: { id: any; name: any; address: any; rating: any; cuisines: any }): Restaurant {
  return {
    id : restaurant.id,
    name: restaurant.name,
    address: restaurant.address,
    rating: restaurant.rating,
    cuisines: restaurant.cuisines
  }
}