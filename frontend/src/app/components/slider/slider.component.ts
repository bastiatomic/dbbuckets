import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  value = 20;
  imageWidth=1080

  newValue = this.imageWidth - this.value/100*this.imageWidth

  onInputChange(event: number){
    this.value = event;
    console.log(this.value)
    this.newValue = this.imageWidth - this.value/100*this.imageWidth
  }

}
