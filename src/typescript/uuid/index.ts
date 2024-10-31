import { generateUUID as generateUUIDFn, parseUUID as parseUUIDFn } from '../../build/Release/nexium.node'

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
}
