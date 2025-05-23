export const sharedUtils = {
  formatDate: (date: Date) => date.toISOString(),
  capitalize: (str: string) => str.charAt(0).toUpperCase() + str.slice(1),
  sharedUtils: (sharedUtils: any) => sharedUtils,
  getRandomNumber: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min,
  delay: (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
}; 