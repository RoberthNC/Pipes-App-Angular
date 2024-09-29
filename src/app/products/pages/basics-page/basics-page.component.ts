import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'roberto núñez';
  public nameUpper: string = 'ROBERTO NÚÑEZ';
  public fullName: string = 'RObErtO nÚñEZ';

  public customDate: Date = new Date();
}
