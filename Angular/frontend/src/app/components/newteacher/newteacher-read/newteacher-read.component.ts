import { Component, OnInit } from '@angular/core';
import { NewTeacher } from '../newteacher.model';
import { NewTeacherService } from '../newteacher.service';

@Component({
  selector: 'app-newteacher-read',
  templateUrl: './newteacher-read.component.html',
  styleUrls: ['./newteacher-read.component.css']
})
export class NewTeacherReadComponent implements OnInit {
  newteachers: NewTeacher[];
  displayedColumns = ["id", "nome", "idade", "materia"];

  constructor(private newteacherService: NewTeacherService) {
    this.newteachers = [];
   }

  ngOnInit(): void {
    this.newteacherService.read().subscribe((newteachers) => {
      this.newteachers = newteachers;
      console.log(newteachers);
    });
  }

}
