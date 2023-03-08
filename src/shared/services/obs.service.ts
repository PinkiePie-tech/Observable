import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObsService {
  public timer$ = new BehaviorSubject<number>(undefined);
  public inputValue$ = new BehaviorSubject<string>('');
  constructor() {
    /**
     * interval est un observable de rxjs, comme son nom l'indique, c'est un observable qui va emmettre un évènement tous les x temps, la on le configure sur 1000 millisecondes, soit 1 seconde. interval émettra une valeur qui sera n+1, n étant la valeur précédément émise, en gros, ça va compter et incrémenter de 1 toutes les secondes :D
     */
    interval(1000).subscribe((value) => {
      // On choisi de mettre cette nouvelle valeur dans notre BehaviorSubject
      this.timer$.next(value);
    });
  }

  public updateValue(value: string) {
    this.inputValue$.next(value);
  }
}
