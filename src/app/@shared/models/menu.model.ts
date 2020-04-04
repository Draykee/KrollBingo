export class Menu {
  constructor(
    public title: string,
    public routerLink: string,
    public icon: string = '',
    public href: string = '',
    public target: string = '') {
  }
}
