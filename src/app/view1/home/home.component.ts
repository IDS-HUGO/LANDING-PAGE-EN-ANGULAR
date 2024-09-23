import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  images = [
    '/assets/image1.jpg',
    '/assets/image2.jpg',
    '/assets/image3.jpg'
  ];
  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 3000); // Cambia cada 3 segundos
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
