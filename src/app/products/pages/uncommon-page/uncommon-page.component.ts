import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18nSelect Pipe
  public name: string = 'Roberto';
  public gender: 'male' | 'female' = 'male';
  public invitationMap: Record<string, string> = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Maricielo';
    this.gender = 'female';
  }

  // i18nPlural Pipe
  public clients: string[] = [
    'Clara',
    'Vanessa',
    'Maricielo',
    'Darwin',
    'Daniel',
  ];
  public clientsMap: Record<string, string> = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.pop();
  }

  // keyvalue Pipe
  public person = {
    name: 'Roberto',
    age: 25,
    adress: 'Trujillo',
  };

  // async Pipe
  public myObservableTimer = interval(1000);

  public myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5]);
    }, 1000);
  });
}
