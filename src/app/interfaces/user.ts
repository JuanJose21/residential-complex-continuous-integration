export interface IUser {
  tipoDocumentoResidente: string;
  numeroDocumentoResidente: number;
  nombreResidente: string;
  torre: number;
  apartamento: number;
  propietario: boolean;
  email: string;
  telefono: string;
  genero: string;
}

export interface IUserResponse {
  codRespuesta: number;
  resultado: string;
  usuario: IUser;
}
