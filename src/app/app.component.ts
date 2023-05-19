import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Upload CSV File';

  constructor(private http: HttpClient) { }

onFileSelected(event: Event) {
  const element = event.target as HTMLInputElement;
  if (element.files != null && element.files.length > 0) {
    const file: File = element.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.http.post('http://localhost/api/csv', formData).subscribe(
      (res) => console.log('Response', res),
      (err) => console.log('Error', err)
    );
  }
}


}
