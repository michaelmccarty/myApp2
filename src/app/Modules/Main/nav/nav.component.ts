import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
  testisAuthenticated() {
    if (this.authService.isAuthenticated()) alert('yup');
    else alert('nope');
  }
}
