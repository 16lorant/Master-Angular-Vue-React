import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: false,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {
  @Input() nombre?:string;
  @Input() size?:string;

  constructor(){ }

  ngOnInit(): void {
    
  }
}
