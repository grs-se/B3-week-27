import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../shared/models/user';

export interface Visibility {
  showUserImg: boolean;
  showBio: boolean;
  showAge: boolean;
}

export interface State {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  isSubmitted: boolean;
}

@Component({
  standalone: true,
  selector: 'app-profile-form',
  imports: [FormsModule],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css',
})
export class ProfileFormComponent implements OnInit {
  user: User;
  state: State;
  visibility: Visibility;

  constructor() {
    this.user = {
      id: 0,
      name: '',
      username: '',
      email: '',
      password: '',
      age: 0,
      profilePicture: '/assets/images/default-profile.png',
      bio: '',
    };
    this.state = {
      isLoading: false,
      isError: false,
      errorMessage: '',
      isSubmitted: false,
    };
    this.visibility = {
      showUserImg: false,
      showBio: false,
      showAge: false,
    };
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm, action: string): void {
    if (action === 'update') {
      // Update user logic
      console.log('User updated:', this.user);
    }
    if (action === 'delete') {
      // Delete user logic
      console.log('User deleted:', this.user);
    }
  }

  toggleVisibility(field: keyof Visibility): void {
    this.visibility[field] = !this.visibility[field];
  }
}
