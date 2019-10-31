import { MIRROR } from '../constants/action-types'

export function mirror(payload) {
  return { type: MIRROR, payload }
}
