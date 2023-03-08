import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs';
import { ObsService } from '../shared/services/obs.service';

@Component({
  selector: 'app-marion',
  templateUrl: 'marion.component.html',
})
export class MarionComponent {
  public formControl = new FormControl('');

  constructor(private service: ObsService) {
    // petit prémice au formControl, en gros, quand la valeur va changer, ca va mettre la valeur dans le BehaviorSubject du service.
    this.formControl.valueChanges.subscribe((value) =>
      this.service.updateValue(value)
    );
  }
}
