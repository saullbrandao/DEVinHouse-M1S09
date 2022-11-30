import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  saveToLocalStorage(object = {}) {
    localStorage.setItem('data', JSON.stringify(object));
  }
}
