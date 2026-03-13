import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fetchUserAttributes, UserAttributeKey } from '@aws-amplify/auth';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-authenticator',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    AmplifyAuthenticatorModule,
  ],
  templateUrl: './authenticator.component.html',
  styleUrl: './authenticator.component.css'
})
export class AuthenticatorComponent implements OnInit {
  nickname: string | undefined;

  constructor(public authenticator: AuthenticatorService) { }

  async ngOnInit(): Promise<void> {
    if (this.authenticator.authStatus === 'authenticated') {
      try {
        const attributes: Partial<Record<UserAttributeKey, string>> = await fetchUserAttributes();
        this.nickname = attributes.nickname;
      } catch (error) {
        this.nickname = this.authenticator.user.username;
        console.error('Error fetching attributes.', error);
      }
    }
  }
}
