import {AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {WINDOW} from '@core/window.service';
import {NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-landing-page-layout',
  templateUrl: './landing-page-layout.component.html',
  styleUrls: ['./landing-page-layout.component.scss']
})
export class LandingPageLayoutComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('sidenav') sidenav: any;

  public mobileQuery: boolean;

  offset: false;
  showBackToTop: false;

  constructor(@Inject(WINDOW) private window: Window,
              public router: Router,
              private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.mobileQuery = result.matches;
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.sidenav.close();
        setTimeout(() => {
          window.scrollTo(0, 0);
        });
      }
    });
  }

  ngOnDestroy(): void {
  }

  public scrollToTop() {
    const scrollDuration = 200;
    const scrollStep = -window.pageYOffset / (scrollDuration / 20);
    const scrollInterval = setInterval(() => {
      if (window.pageYOffset !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      });
    }
  }
}
