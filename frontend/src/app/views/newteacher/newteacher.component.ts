import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-newteacher",
  templateUrl: "./newteacher.component.html",
  styleUrls: ["./newteacher.component.css"],
})
export class NewTeacherComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToTeacherCreate(): void {
    this.router.navigate(["/newteachers/create"]);
  }
}
