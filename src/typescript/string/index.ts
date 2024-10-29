import { trimStart as trimStartFn, trimEnd as trimEndFn, isEmpty as isEmptyFn } from '../../build/Release/nexium.node'

/** String Methods */
export class NString {
  /** Trims whitespace from the beginning of a string */
  static trimStart(str: string): string {
    return trimStartFn(str)
  }

  /** Trims whitespace from the end of a string */
  static trimEnd(str: string): string {
    return trimEndFn(str)
  }

  /** Check if a string is empty or not */
  static isEmpty(str: string): string {
    return isEmptyFn(str)
  }
}
