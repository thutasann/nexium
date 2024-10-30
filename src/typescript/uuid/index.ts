import { generateUUID as generateUUIDFn } from '../../build/Release/nexium.node'

/** UUID Methods */
export class NUUId {
  /** generate uuid */
  static generate(): string {
    return generateUUIDFn()
  }
}
