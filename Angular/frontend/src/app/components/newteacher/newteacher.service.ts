import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { NewTeacher } from "./newteacher.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NewTeacherService {
  baseUrl = "http://localhost:3001/professores";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(newteacher: NewTeacher): Observable<NewTeacher> {
    return this.http.post<NewTeacher>(this.baseUrl, newteacher);
  }

  read(): Observable<NewTeacher[]> {
    return this.http.get<NewTeacher[]>(this.baseUrl);
  }
}
