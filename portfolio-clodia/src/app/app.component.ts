import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-clodia';
  constructor(private router:Router){}
  goToIndex(){
    this.router.navigate(['/','index']);
  }
  goToAbout(){
    this.router.navigate(['/','about']);
  }
  goToBlog(){
    this.router.navigate(['/','blog']);
  }
  goToSkills(){
    this.router.navigate(['/','skills']);
  }
  goToContact(){
    this.router.navigate(['/','contact']);
  }
}
