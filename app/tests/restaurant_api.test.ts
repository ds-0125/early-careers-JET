import { test, expect } from 'vitest'

import mock_restaurant from './mock_restaurant.json'
import { processRestaurant } from '~/api/restaurant_api'

import type { Restaurant } from '~/types/Restaurant'
import type { Address } from '~/types/Address'
import type { PointLocation } from '~/types/Location'
import type { Rating } from '~/types/Rating'
import type { Cuisine } from '~/types/Cuisine'

var id : string = '92519'
var name : string = 'Curry Queen'

var location : PointLocation = {
    type : 'Point',
    coordinates : [-0.08, 51.531169]
}

var address : Address = {
    city : 'London',
    firstLine : '1 Shenfield Street',
    postalCode : 'N1 6SE',
    location
}

var rating : Rating = {
    count : 2186,
    starRating: 5,
    userRating: null
}

var cuisine00 : Cuisine = {
    name : 'Indian',
    uniqueName : 'indian'
}

var cuisine01 : Cuisine = {
    name : 'Curry',
    uniqueName : 'curry'
}

var cuisine02 : Cuisine = {
    name : 'Halal',
    uniqueName : 'halal'
}

var cuisine03 : Cuisine = {
    name : 'Deals',
    uniqueName : 'deals'
}

var cuisines : Cuisine[] = [cuisine00, cuisine01, cuisine02, cuisine03]

var expected : Restaurant = {
    id,
    name,
    address,
    rating,
    cuisines
}

test("JSON to Restaurant object", () => {
    expect(processRestaurant(mock_restaurant)).toStrictEqual(expected)
})