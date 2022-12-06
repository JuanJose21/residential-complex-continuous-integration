import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserResponse } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  register(payload: IUser) {
    const url = `${this.baseUrl}`;

    const body: IUser = payload;

    return this.http.post<IUserResponse>(url, body);
  }
}
