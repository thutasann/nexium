import { trimStart as trimStartFn } from '../../build/Release/nexium.node'

/** Function to trim whitespace from the beginning of the string. */
export const trimStart = (str: string): string => {
  return trimStartFn(str)
}
