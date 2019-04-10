import { Component } from '@angular/core'
import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends Component{
  title = 'My first angular app'
  formControl = new FormControl('')
}
