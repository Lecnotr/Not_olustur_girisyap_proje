export interface User {
    id: string;
    fullName: string;
    email: string;
    password: string;
    notes: Note [];
}
export interface Note {
    title: string;
    content: string;
  }