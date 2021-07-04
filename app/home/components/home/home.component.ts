import { Component, OnInit, AfterViewInit} from '@angular/core';
import SwiperCore, { Swiper } from 'swiper/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const swiper = new Swiper('.swiper-container',{
      speed: 400,
      spaceBetween: 100,
    })
  }

}
