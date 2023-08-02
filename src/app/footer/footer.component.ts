import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

}

export function getFooter(){
  let footer = document.querySelector('footer') as HTMLElement;
  return footer;
}