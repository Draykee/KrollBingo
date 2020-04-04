import {Component, OnInit} from '@angular/core';
import {AuthenticationService, CredentialsService} from '@app/auth';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-admin-page-layout',
  templateUrl: './admin-page-layout.component.html',
  styleUrls: ['./admin-page-layout.component.scss']
})
export class AdminPageLayoutComponent implements OnInit {

  mobileQuery: boolean;

  offset: false;
  showBackToTop: false;

  constructor(private router: Router,
              private titleService: Title,
              private breakpointObserver: BreakpointObserver,
              private authenticationService: AuthenticationService,
              private credentialsService: CredentialsService) {

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.mobileQuery = result.matches;
    });
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  get title(): string {
    return this.titleService.getTitle();
  }

  ngOnInit(): void {
  }

  doLogout(): void {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], {replaceUrl: true}));
  }

  scrollToTop() {

  }
}
