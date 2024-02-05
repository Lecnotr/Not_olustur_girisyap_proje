import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  onSubmit(formValue: any): void {
    const noteTitle = formValue.noteTitle;
    const noteContent = formValue.noteContent;
    
    const note = { title: noteTitle, content: noteContent };

    this.http.post('http://localhost:3000/users', note).subscribe(response => {
      console.log(response);

    console.log('Not Başlığı:', noteTitle);
    console.log('Not İçeriği:', noteContent);
     });
   }
}
