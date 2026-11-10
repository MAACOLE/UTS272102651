import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Profile } from './profile/profile';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, Profile, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  sidebarOpen = signal(false);
}