/** nexium.node module type declarations */
declare module '*.node' {
  // ----------- Array Functions
  export function chunkArray<T>(arr: T[], chunkLength: number): T[][]
  export function uniqueArray<T>(arr: T[]): T[]
}
