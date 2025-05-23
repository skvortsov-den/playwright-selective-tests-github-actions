export const sharedUtils = {
  formatDate: (date: Date) => date.toISOString(),
  capitalize: (str: string) => str.charAt(0).toUpperCase() + str.slice(1),
  sharedUtils: (sharedUtils: any) => sharedUtils
}; 