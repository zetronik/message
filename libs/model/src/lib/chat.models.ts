import {FormControl} from "@angular/forms";

export interface IChatModels {
  message: FormControl<string | null>,
  name: FormControl<string | null>,
}
