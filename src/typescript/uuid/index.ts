import {
  generateUUID as generateUUIDFn,
  parseUUID as parseUUIDFn,
  isValidUUID as isValidUUIDFn,
  bytesToUUID as bytesToUUIDFn,
} from '../../build/Release/nexium.node'

/** UUID Methods */
export class NUUId {
  /** generate uuid */
  static generate(): string {
    return generateUUIDFn()
  }

  /** parse uuid string to an array of bytes */
  static parse(uuid: string): Uint8Array {
    return parseUUIDFn(uuid)
  }

  /** function to validate if a string is a UUID */
  static isValid(uuid: string): boolean {
    return isValidUUIDFn(uuid)
  }

  /** function to convert bytes to UUID string format */
  static bytesToUUID(bytes: number[]): string {
    return bytesToUUIDFn(bytes)
  }
}
