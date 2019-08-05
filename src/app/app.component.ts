import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from '../assets/js/particles';


declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'VeneziaDev';

  ngOnInit() {
    // https://vincentgarreau.com/particles.js/
    particlesJS('particles-js', ParticlesConfig, function() {
        console.log('callback - particles.js config loaded');
      });
  }


}
