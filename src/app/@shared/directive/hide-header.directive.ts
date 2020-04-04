import {AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2} from '@angular/core';

import {distinctUntilChanged, map, pairwise, throttleTime} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {CdkScrollable, ScrollDispatcher} from '@angular/cdk/overlay';

enum ScrollDirection {
  Up = 'up',
  Down = 'down'
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[scrollHeader]'
})
export class HideHeaderDirective implements AfterViewInit, OnDestroy {

  @Input() scrollContent: CdkScrollable;

  @Input() triggerDistance = 40;

  @Input() transparent: boolean;

  private hidden: boolean;
  private scrollSub: Subscription;
  private readonly thresholdOut = 40;
  private readonly thresholdIn = 20;

  constructor(
    private hostElement: ElementRef,
    private renderer: Renderer2,
    private scroll: ScrollDispatcher
  ) {
  }

  public get isHidden(): boolean {
    return this.hidden;
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.hostElement.nativeElement, 'transition', '500ms ease-out');
    if (this.transparent !== undefined) {
      this.renderer.addClass(this.hostElement.nativeElement, 'transparent');
    }

    if (this.scrollContent != null) {
      this.bindScrollEvent();
    }
  }

  ngOnDestroy(): void {
    if (!!this.scrollSub) {
      this.scroll.deregister(this.scrollContent);
      this.scrollSub.unsubscribe();
      this.scrollSub = null;
    }
  }

  hide() {
    const elementHeight = this.hostElement.nativeElement.offsetHeight;
    this.renderer.setStyle(this.hostElement.nativeElement, 'transition-duration', '0.8s');
    this.renderer.setStyle(this.hostElement.nativeElement, 'transform', `translateY(-${elementHeight}px)`);
    this.hidden = true;
  }

  show() {
    this.renderer.setStyle(this.hostElement.nativeElement, 'transition-duration', '0.125s');
    this.renderer.removeStyle(this.hostElement.nativeElement, 'transform');
    this.hidden = false;
  }

  private bindScrollEvent() {
    this.scroll.register(this.scrollContent);
    
    this.scrollSub = this.scrollContent.elementScrolled()
      .pipe(
        throttleTime(10),
        map((scrollable: Event) => {

          console.log(scrollable);
          return this.scrollContent.measureScrollOffset('top');
        }),
        pairwise(),
        map(([y1, y2]): ScrollDirection => (y2 < y1 ? ScrollDirection.Up : ScrollDirection.Down)),
        distinctUntilChanged()
      )
      .subscribe(direction => {
        if (direction === ScrollDirection.Up) {
          this.show();
        } else if (direction === ScrollDirection.Down) {
          this.hide();
        }
      });

  }

}
