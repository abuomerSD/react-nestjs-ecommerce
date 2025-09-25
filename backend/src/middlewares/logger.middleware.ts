import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const start = Date.now();

    res.on('finish', () => {
      const responseTime = Date.now() - start;
      console.log(
        `[${method}] ${originalUrl} - ${res.statusCode} (${responseTime}ms)`,
      );
    });

    next();
  }
}
