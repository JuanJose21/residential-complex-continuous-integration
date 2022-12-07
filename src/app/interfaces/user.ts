export interface IUser {
  tipo_documento_residente: string;
  numero_documento_residente: number;
  nombre_residente: string;
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
