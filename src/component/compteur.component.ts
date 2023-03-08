import { Component } from '@angular/core';
import { filter, Observable, Subscription } from 'rxjs';
import { ObsService } from '../shared/services/obs.service';

@Component({
  selector: 'app-compteur',
  templateUrl: 'compteur.component.html',
})
export class CompteurComponent {
  public numberEmit: number[] = [];
  public numberPairEmit: number[] = [];
  public compteur$: Observable<number>;
  public subscription: Subscription;
  public subscriptionPair: Subscription;

  constructor(private service: ObsService) {
    this.compteur$ = this.service.timer$.asObservable();
  }

  public goSubscribeToMyObs() {
    // cette méthode va permettre de subscribe à l'observable
    this.subscription = this.service.timer$.subscribe((value) => {
      // Ici, chaque fois que je recois une valeur, je la stocke dans mon tableau
      this.numberEmit.push(value);
    });
  }

  public goUnsubscribeToMyObs() {
    // cette méthode va permettre d'unsubscribe
    this.subscription.unsubscribe();
  }

  public goSubscribeToPairValueMyObs() {
    // cette méthode va permettre de subscribe à l'observable
    this.subscriptionPair = this.service.timer$
      .pipe(
        // on rajoute une condition pour ne récupérer uniquement que les nombres pairs
        filter((value) => value % 2 === 0)
      )
      .subscribe((value) => {
        // Ici, chaque fois que je recois une valeur, je la stocke dans mon tableau
        this.numberPairEmit.push(value);
      });
  }

  public goUnsubscribeToPairValueMyObs() {
    // cette méthode va permettre d'unsubscribe
    this.subscriptionPair.unsubscribe();
  }
}
