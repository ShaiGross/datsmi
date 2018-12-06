import { Component } from '@angular/core';
import {ImageHandlerService} from '../../services/image-handler/image-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private imageHandler: ImageHandlerService) {
  }

  getMyPictures() {
    this.imageHandler.getMyPictures();
  }
}
