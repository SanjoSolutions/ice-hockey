export function collide(roundObjectA, roundObjectB) {
  const forceVectorA = calculateForceVector(roundObjectA.kineticForce)
  const forceVectorB = calculateForceVector(roundObjectB.kineticForce)

}

export function calculateForceVector(force) {
  const {direction, amount} = force
  const x = amount * Math.cos(direction)
  const y = amount * Math.sin(direction)
  return {x, y}
}
