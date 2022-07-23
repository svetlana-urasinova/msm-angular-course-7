import { AbstractControl, Validators as BaseValidators } from "@angular/forms";

const FORBIDDEN_PROJECT_NAMES = ["Test"];

interface ValidationResult {
  [key: string]: boolean;
}

export class Validators extends BaseValidators {
  public static allowedProjectName(control: AbstractControl): ValidationResult {
    return FORBIDDEN_PROJECT_NAMES.includes(control.value)
      ? { projectNameNotAllowed: true }
      : null;
  }
}
