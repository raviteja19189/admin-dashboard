import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
    <div class="app-shell" *ngIf="isLoggedIn(); else guest">
      <aside class="sidebar">
        <div class="brand">
          <div class="logo">A</div>
          <div>
            <h1>Admin</h1>
            <p>Dashboard</p>
          </div>
        </div>

        <nav class="sidebar-nav">
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/users" routerLinkActive="active">User Management</a>
        </nav>

        <div class="sidebar-footer">
          <div class="user-badge">
            <span>admin</span>
            <small>Admin</small>
          </div>
          <button (click)="logout()">Logout</button>
        </div>
      </aside>

      <main class="main-content">
        <header class="topbar">
          <div>
            <p class="subtitle">Analytics Overview</p>
            <h2>Welcome back to your command center.</h2>
          </div>
        </header>
        <router-outlet></router-outlet>
      </main>
    </div>

    <ng-template #guest>
      <router-outlet></router-outlet>
    </ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-dashboard';

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}