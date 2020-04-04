import {Injectable} from '@angular/core';

export class Settings {
  constructor(
    public theme: string,
    public stickyMenuToolbar: boolean,
    public header: string,
    // additional options
    public mainToolbarFixed: boolean,
    public contentOffsetToTop: boolean,
    public headerBgImage: boolean
  ) {
  }
}

@Injectable()
export class AppState {
  public settings = new Settings(
    'blue',      // blue, green, red, pink, purple, grey, orange-dark
    true,        // true = sticky, false = not sticky
    'image',   // default, image, carousel
    false,
    false,
    false
  );
}
