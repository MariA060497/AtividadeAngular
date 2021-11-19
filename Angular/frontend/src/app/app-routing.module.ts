import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Importação do componet para o conteudo
import { HomeComponent } from "./views/home/home.component";
import { NewTeacherComponent } from "./views/newteacher/newteacher.component";
import { NewTeacherCreateComponent } from "./components/newteacher/newteacher-create/newteacher-create.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "newteachers",
    component: NewTeacherComponent,
  },
  {
    path: "newteachers/create",
    component: NewTeacherCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
