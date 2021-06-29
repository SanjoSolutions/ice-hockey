import { distance } from './distance.js'

export function intersects(circleA, circleB) {
  return distance(circleA, circleB) <= circleA.radius + circleB.radius
}
