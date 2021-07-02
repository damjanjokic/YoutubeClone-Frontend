import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidators {
    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
          if (!control.value) {
            return null;
          }
          const valid = regex.test(control.value);
          return valid ? null : error;
        };
      }

      static passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('password').value;
        const confirmPassword: string = control.get('confirmPassword').value;
        if (password !== confirmPassword) {
          control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
        }
      }

      static numberValidator(control: AbstractControl): { [key: string]: any } | null {
        const valid = /^\d+$/.test(control.value);
        return valid ? null : { invalidNumber: { valid: false, value: control.value } };
      }
}


