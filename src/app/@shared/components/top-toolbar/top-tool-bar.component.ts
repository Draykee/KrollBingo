import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {distinctUntilChanged, filter, map, pairwise, share, throttleTime} from 'rxjs/operators';

enum HeaderPosition {
  Top = 'Top',
  Sticky = 'Sticky'
}

export interface ScrollEvent {
  isReachingTop: boolean;
  originalEvent: Event;
  currentY: number;
}

const STICKY_TRIGGER_POSITION = 40;

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-tool-bar.component.html',
  styleUrls: ['./top-tool-bar.component.scss']
})
export class TopToolBarComponent implements OnInit {

  @Output() onMenuIconClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onScroll = new EventEmitter<ScrollEvent>();

  public headerFixed = false;
  public showBackToTop = false;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.bindScrollEvent();
  }

  // handle window scroll
  @HostListener('window:scroll') onWindowScroll($event: Event) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    (scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;

    const isReachingTop = scrollTop < this.el.nativeElement.offsetHeight;
    this.onScroll.emit({isReachingTop, originalEvent: $event, currentY: scrollTop});
  }

  public sidenavToggle() {
    this.onMenuIconClick.emit();
  }

  private bindScrollEvent() {
    // Capture scroll event
    const scroll$ = this.onScroll.pipe(
      throttleTime(10),
      map((event: ScrollEvent) => event.currentY),
      pairwise(),
      map(([y1, y2]): HeaderPosition => (y2 < STICKY_TRIGGER_POSITION ? HeaderPosition.Top : HeaderPosition.Sticky)),
      distinctUntilChanged(),
      share()
    );

    const positionTop = scroll$.pipe(
      filter(direction => direction === HeaderPosition.Top)
    );

    const positionSticky = scroll$.pipe(
      filter(direction => direction === HeaderPosition.Sticky)
    );

    positionTop.subscribe(() => (this.headerFixed = false));
    positionSticky.subscribe(() => (this.headerFixed = true));
  }
}
