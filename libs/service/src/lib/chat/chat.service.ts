import { Injectable } from '@angular/core';
import {IMessageModels} from "@myorg/model";
import { Socket } from 'ngx-socket-io';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public message$: Subject<IMessageModels> = new Subject();

  constructor(private socket: Socket) {}

  public sendMessage(message: IMessageModels): void {
    this.socket.emit('message', message);
  }

  public getNewMessage = (): Observable<IMessageModels> => {
    this.socket.on('message', (message: IMessageModels) =>{
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };
}
