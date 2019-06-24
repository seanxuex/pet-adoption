import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pet-adoption';
  
  constructor(
    private router: Router
  ) {
  }
  ngOnInit() {
    this.setButtonColor();
  }

  setButtonColor() {
    const currentPage = window.location.pathname;
    if (currentPage == '/search' || currentPage == '/') {
      this.colorButton('search');
    } else if (currentPage == '/saved') {
      this.colorButton('saved');
    } else if (currentPage == '/setting') {
      this.colorButton('setting');
    }
  }

  navigateToSearch() {
    this.router.navigateByUrl('/search');
    this.colorButton('search');
  }

  navigateToSaved() {
    this.router.navigateByUrl('/saved');
    this.colorButton('saved');    
  }

  navigateToSettings() {
    this.router.navigateByUrl('/setting');
    this.colorButton('setting');    
  }

  colorButton(buttonName: string) {
    this.uncheckAll();
    if (buttonName == 'search') {
      const searchButton = document.getElementById("searchButton");
      searchButton.style.backgroundColor = "lightgray";
    } else if (buttonName == 'saved') {
      const savedButton = document.getElementById("savedButton");
      savedButton.style.backgroundColor = "lightgray";
    } else if (buttonName == 'setting') {
      const settingsButton = document.getElementById("settingsButton");
      settingsButton.style.backgroundColor = "lightgray";
    }   
  }

  uncheckAll() {
    const searchButton = document.getElementById("searchButton");
    const savedButton = document.getElementById("savedButton");
    const settingsButton = document.getElementById("settingsButton");
    searchButton.style.backgroundColor = '';
    savedButton.style.backgroundColor = '';
    settingsButton.style.backgroundColor = '';
  }
}
