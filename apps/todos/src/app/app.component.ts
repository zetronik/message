import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ChatService} from "@myorg/service";
import {IChatModels, IMessageModels} from "@myorg/model";

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public form!: FormGroup;
  public messageList: IMessageModels[] = [];

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.initGetMessage();
  }

  private initForm(): void {
    this.form = new FormGroup<IChatModels>({
      message: new FormControl<string | null>('Hello World!', Validators.required),
      name: new FormControl<string | null>('zetronik', Validators.required)
    });
  }

  private initGetMessage(): void {
    this.chatService.getNewMessage().subscribe((message: IMessageModels) => {
      this.messageList.push(message);
    });
  }

  public sendMessage(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const message = this.form.value;
    this.chatService.sendMessage(message);
    this.form.get('message')?.reset();
  }
}
