import { Injectable } from '@angular/core';
import { Student } from './model/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  url: string;
  student: Student;
  studentArr: Student[];
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3004/students';
    this.student = new Student();
    this.studentArr = [];
  }

  insertStudent(student: Student) {
    this.http.post<Student>(this.url, student).subscribe();
    return 'Student Detail Added';
  }

  updateStudent(student: Student) {
    this.http.put<Student>(this.url + '/' + student.id, student).subscribe();
    return 'Student Detail Updated';
  }

  deleteStudent(stuId: number) {
    this.http.delete<Student>(this.url + '/' + stuId).subscribe();
    return 'Student Details Deleted';
  }

  findStudent(stuId: number) {
    this.http
      .get<Student>(this.url + '/' + stuId)
      .subscribe((data) => (this.student = data));
    return this.student;
  }

  findAllStudent() {
    this.http
      .get<Student[]>(this.url)
      .subscribe((data) => (this.studentArr = data));
    return this.studentArr;
  }
}
