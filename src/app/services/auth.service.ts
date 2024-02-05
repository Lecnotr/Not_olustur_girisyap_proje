import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000';


  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/users`, userDetails);
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }
  getUserIdByEmail(email: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/users?email=${email}&_fields=id`);
  }
  updateUserNotes(user: User): Observable<User> {
    const url = `${this.baseUrl}/users/${user.id}`;
    return this.http.put<User>(url, user);
 }
 getUserById(userId: string): Observable<User | undefined> {
  return this.http.get<User>(`${this.baseUrl}/users/${userId}`);
}
 showSnackBar(message: string): void {
    this.snackBar.open(message, 'Kapat', {
      duration: 3000,
    });
  }
}