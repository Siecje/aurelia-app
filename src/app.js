import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Debt';
      config.map([
        { route: ['','welcome'],  moduleId: './welcome/index',      nav: true, title:'Welcome' },
        { route: 'report',        moduleId: './report/index',       nav: true, title:'Report'},
        { route: 'child-router',  moduleId: 'child-router', nav: true, title:'Child Router' }
      ]);
    });
  }
}
