import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PROJECT_STATUSES } from "../shared/project-statuses";
import { Project } from "../shared/types";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  public form: FormGroup;
  public statuses: string[] = PROJECT_STATUSES;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(this.statuses[0]),
    });
  }

  public onSubmit() {
    const project: Project = this.form.value;
    console.log(project);
  }
}
