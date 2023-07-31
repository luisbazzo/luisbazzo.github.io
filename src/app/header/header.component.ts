import { Component, OnInit } from '@angular/core';
import { getSections } from '../sections/sections.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  // sections = getSections();
  // navLinks = document.querySelectorAll('header nav a');

  ngOnInit(): void {
    let sections = getSections();
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
      let header = document.querySelector('header') as HTMLElement;
      header.classList.toggle('sticky', window.scrollY > 100);
      
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
          navLinks.forEach(links => {
            links.classList.remove('active');
            let doc = document.querySelector('header nav a[href*=' + id + ']') as HTMLElement;
            doc.classList.add('active');
          });
        }
      });  
    };
  }
}
