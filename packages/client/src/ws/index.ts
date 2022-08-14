import { io, Socket } from 'socket.io-client';
import { SERVER_BASE_HOST, SOCKET_PATH } from '@hello/common';

export class WSManager {
  private socket: Socket | null = null;

  init() {
    this.socket = io(SERVER_BASE_HOST, { path: SOCKET_PATH });

    this.socket.on('connect', () => {
      console.log('connect');

      this.socket?.on('disconnect', () => {
        console.log('disconnect');
      });

      this.socket?.on('exception', () => {
        console.log('exception');
      });
    });
  }

  sendMessage() {
    if (!this.socket) {
      return;
    }
  }
}
