import { Component } from '@angular/core';
import { StudentListComponent } from "./student-list/student-list.component";

@Component({
  selector: 'app-root',
  imports: [StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'student-frontend';
}
