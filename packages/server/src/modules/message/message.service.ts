import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { constant } from '@hello/common';

@WebSocketGateway({
  path: constant.SOCKET_PATH,
  cors: { origin: constant.CLIENT_BASE_HOST },
})
export class MessageService {
  private socketIds: string[] = [];

  @WebSocketServer() server: Server;

  handleConnection(socket: Socket) {
    this.socketIds.push(socket.id);
    console.log('onConnection', socket.id);
  }

  handleDisconnect(socket: Socket) {
    this.socketIds = this.socketIds.filter((i) => i !== socket.id);
    console.log('onDisconnect', socket.id);
  }

  @SubscribeMessage('events')
  onEvent(socket: Socket, payload) {
    this.server.to(this.socketIds[0]).emit('events', { name: 'cc' });
  }
}
