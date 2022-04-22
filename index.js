const frac = value => value % 1
const SEED = 31337.1337
const hash = value => Math.abs(frac(Math.sin(value) * SEED))
const randomRange = (seed, min, max) => Math.floor(hash(seed) * (max - min + 1)) + min

const MAP_WIDTH = 5
const MAP_HEIGHT = 5
const MAP = []

for (let i = 0; i < MAP_WIDTH * MAP_HEIGHT; i++) {
  MAP[i] = randomRange(i, 0, 5)
}
