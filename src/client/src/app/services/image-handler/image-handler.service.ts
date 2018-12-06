import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageHandlerService {

  constructor() { }

  getMyPictures() {
    console.log('getting pictures from service');
  }
}
