import { trimStart as trimStartFn, trimEnd as trimEndFn } from '../../build/Release/nexium.node'

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
}
