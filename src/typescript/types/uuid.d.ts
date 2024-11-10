/** nexium.node module type declarations */
declare module '*.node' {
  // ----------- UUID Functions
  export function generateUUID(): string
  export function parseUUID(uuid: string): Uint8Array
  export function isValidUUID(uuid: string): boolean
  export function bytesToUUID(bytes: number[]): string
}
