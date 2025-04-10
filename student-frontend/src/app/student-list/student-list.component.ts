import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
} 

@Component({
  selector: 'app-student-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  students: Student[] = [];
  newStudent: Student = { id: 0, name: '', age: 0, grade: '' };

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  async loadStudents() {
    this.students = await this.studentService.getStudents();
  }

  async addStudent() {
    const student = await this.studentService.addStudent(this.newStudent);
    if (student) {
      this.students.push(student);
      this.newStudent = { id: 0, name: '', age: 0, grade: '' };
    }
  }

  async deleteStudent(id: number) {
    const deletedId = await this.studentService.deleteStudent(id);
    if (deletedId) {
      this.students = this.students.filter(student => student.id !== deletedId);
    }
  }
}


