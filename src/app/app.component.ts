import { Component } from '@angular/core';
import { LoginComponent} from './secore/login';
import { DashboardComponent} from './secore/dashboard';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],

  directives: [LoginComponent, DashboardComponent]
})
export class AppComponent {
  title = 'app works!';
  loggedIn = true;
}
