import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';

import {ChatService} from "./chat/chat.service";


@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  exports: [],
  providers: [ChatService]
})
export class ServiceModule {
}
