import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NewTeacherService } from "../newteacher.service";
import { NewTeacher } from "../newteacher.model";

@Component({
  selector: "app-newteacher-create",
  templateUrl: "./newteacher-create.component.html",
  styleUrls: ["./newteacher-create.component.css"],
})
export class NewTeacherCreateComponent implements OnInit {
  newteacher: NewTeacher = {
    nome: "",
    idade: "",
    materia: "",
  };

  constructor(private newteacherService: NewTeacherService, private router: Router) {}

  ngOnInit(): void {}

  createNewTeacher(): void {
    this.newteacherService.create(this.newteacher).subscribe(() => {
      this.newteacherService.showMessage("Professor cadastrado!");
      this.router.navigate(["/newteachers"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/newteachers"]);
  }
}
