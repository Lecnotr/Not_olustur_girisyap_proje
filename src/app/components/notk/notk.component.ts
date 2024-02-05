import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
 
@Component({
  selector: 'app-notk',
  templateUrl: './notk.component.html',
  styleUrls: ['./notk.component.css']
})
export class NotkComponent {

  text: string | undefined;
  userEmail: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(formValue: any): void {
    const noteTitle = formValue.noteTitle;
    const noteContent = formValue.noteContent;

    this.authService.getUserByEmail(this.userEmail)
      .subscribe(users => {
        if (users && users.length > 0) {
          const user = users[0];
          const newNote = { title: noteTitle, content: noteContent };
          user.notes = user.notes || [];
          user.notes.push(newNote);
        
    this.authService.updateUserNotes(user)
      .subscribe(updatedUser => {
         console.log('Notlar güncellendi:', updatedUser);
              this.authService.showSnackBar('Not başarıyla kaydedildi.');
            }, error => {
         console.error('Notlar güncellenirken bir hata oluştu:', error);
              this.authService.showSnackBar('Not kaydedilirken bir hata oluştu.');
            });
        } 
        else {
          console.error('Kullanıcı bulunamadı');
          this.authService.showSnackBar('Kullanıcı bulunamadı.');
           }
         }
      );
  }
}
