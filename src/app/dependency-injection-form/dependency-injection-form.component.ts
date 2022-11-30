import { Component } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-dependency-injection-form',
  templateUrl: './dependency-injection-form.component.html',
  styleUrls: ['./dependency-injection-form.component.css'],
})
export class DependencyInjectionFormComponent {
  constructor(private localStorageService: LocalstorageService) {}

  submitForm(email: string, password: string) {
    this.localStorageService.saveToLocalStorage({ email, password });
  }
}
