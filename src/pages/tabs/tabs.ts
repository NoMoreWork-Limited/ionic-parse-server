import { Component } from '@angular/core';

// Providers
import { AuthProvider } from '../../providers/auth/auth';

// Pages
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;

  constructor(private auth: AuthProvider) { }

  ionViewCanEnter(): boolean {
    return this.auth.authenticated();
  }

}
