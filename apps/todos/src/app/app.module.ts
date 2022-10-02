import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {ServiceModule} from "@myorg/service";
import {UiModule} from "@myorg/ui";

import {AppComponent} from './app.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {DividerModule} from "primeng/divider";

const config: SocketIoConfig = {url: 'http://localhost:3000/', options: {}};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    ServiceModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    SocketIoModule.forRoot(config),
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
