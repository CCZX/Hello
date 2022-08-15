import { io, Socket } from 'socket.io-client';
import axios from 'axios';
import { constant } from '@hello/common';

export class WSManager {
  private socket: Socket | null = null;

  init() {
    this.socket = io(constant.SERVER_BASE_HOST, { path: constant.SOCKET_PATH });

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
