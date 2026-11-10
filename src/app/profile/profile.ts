import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  nama = 'Pratama Afriawan';
  nim = '272102651';
  skills = ['Laravel', 'PHP', 'MySQL', 'UI/UX'];
}