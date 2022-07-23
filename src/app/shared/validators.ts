import { AbstractControl, Validators as BaseValidators } from "@angular/forms";
import { Observable } from "rxjs";

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

  public static allowedProjectNameAsync(
    control: AbstractControl
  ): Promise<ValidationResult> | Observable<ValidationResult> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (FORBIDDEN_PROJECT_NAMES.includes(control.value)) {
          resolve({ projectNameNotAllowed: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
