import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '@app/auth/authentication.service';
import {CredentialsService} from '@app/auth/credentials.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  constructor(private credential: CredentialsService,
              private authenticationService: AuthenticationService) {
  }

  get username(): string | null {
    const credentials = this.credential.credentials;
    return credentials ? credentials.username : null;
  }

  get isLoggedIn(): boolean {
    return this.credential.isAuthenticated();
  }

  ngOnInit() {
  }

  doLogout() {
    this.authenticationService.logout();
  }

}
