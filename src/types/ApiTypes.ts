export enum ApiStatus {
  Initializing,
  Loading,
  Success,
  Error,
  Ending,
}

export interface ApiData {
  data: any;
  error: any;
}
