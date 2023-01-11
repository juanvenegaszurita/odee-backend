export interface ResponseInterface<T> {
  code?: number;
  message?: string;
  payload?: T;
  monitoringCode?: string;
  errors?: string[];
}
