import { Component } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent {

}

export function getSections(){
  let sections = document.querySelectorAll('section');
  return sections;
}