import {MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {Server} from 'socket.io';

@WebSocketGateway({cors: true})
export class MessageGateway {

  @WebSocketServer() server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): void {
    this.server.emit('message', data);
  }
}
