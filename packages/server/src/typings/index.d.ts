import { Request } from 'express';

declare global {
  interface ExpressRequest extends Request {
    userId: number;
  }
}
