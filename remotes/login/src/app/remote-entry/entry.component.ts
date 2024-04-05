import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import {FormsModule} from "@angular/forms";
import {UserService} from "@micro-frontend-angular-nx/auth";

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, FormsModule],
  selector: 'app-login-entry',
  template: ` <div class="login-app">
    <form class="login-form" (ngSubmit)="login()">
        <div>
          <p class="label">Username:</p>
          <input type="text" name="username" [(ngModel)]="username" />
        </div>
      <div>
        <p class="label">Password:</p>
        <input type="password" name="password" [(ngModel)]="password" />
      </div>
      <button type="submit" class="login-btn">Login</button>
    </form>
    <div class="logged" *ngIf="isLoggedIn$ | async">User is logged in!</div>
  </div>`,
  styles: [
    `.login-app {
      width: 30vw;
      border: 2px dashed black;
      padding: 8px;
      margin: 0 auto;
      background: #1E1A34;
      margin: 0 auto;
      padding: 0 20px;
      max-width: 500px;
      border-top: 0;
      box-shadow: inset 0 0 0px 2px #8F00E3;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: auto auto;
      margin-top: 15%;
    }
    .login-btn {
      background-color: #0088ce;
      background-image: none;
      border-color: #00659c;
      color: #fff;
      width: 150px;
      margin: 25px;
      border: 0 !important;
      line-height: 25px;
      cursor: pointer;
    }
    .label {
      color: white;
    }
    .login-form {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 0 auto;
      padding: 8px;
    }
    .logged {
      color: white;
    }
    `
  ]
})
export class RemoteEntryComponent {
  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  constructor(private userService: UserService) {}
  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
