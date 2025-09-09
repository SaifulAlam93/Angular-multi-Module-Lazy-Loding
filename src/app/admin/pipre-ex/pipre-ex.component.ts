import { Component } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-pipre-ex',
  templateUrl: './pipre-ex.component.html',
  styleUrls: ['./pipre-ex.component.scss']
})
export class PipreExComponent {



  today: Date = new Date();
  price: number = 1234.5678;


  title: string = 'angular pipes are awesome!';

  
  longText: string = 'This is a very long description that should be truncated for better UI display.';

  percentValue: number = 0.5678;
  items: string[] = ['Angular', 'React', 'Vue', 'Svelte'];

  jsonData = { name: 'Saiful', role: 'Developer', skills: ['Java', 'Angular', 'SQL'] };

  // For async pipe
  data = of('Hello from Observable!').pipe(delay(2000));
  
  
  // For i18nPluralPipe
  itemCount = 3;
  messages = {
    '=0': 'No items',
    '=1': 'One item',
    other: '# items'
  };

  // For i18nSelectPipe
  gender = 'male';
  inviteMap = {
    male: 'Invite him.',
    female: 'Invite her.',
    other: 'Invite them.'
  };

}
