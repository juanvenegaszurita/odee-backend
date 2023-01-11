import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { ResponseInterface } from '@interfaces/response.interface';
import { Request, Response } from 'express';
import { Log4jsService, LOG4JS_ERROR_LOGGER } from '@shared/log4js';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(@Inject(LOG4JS_ERROR_LOGGER) protected log: Log4jsService) {}
  async catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let responseBody: ResponseInterface<any>;
    console.log(exception);
    if (
      exception instanceof HttpException &&
      exception.getResponse()['message']
    ) {
      responseBody = {
        code: exception.getStatus(),
        message: exception.name,
        payload: exception.getResponse()['message'],
      };
    } else {
      responseBody = {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal Server Error',
        payload: {},
      };
    }
    this.log.error(
      JSON.stringify({
        responseBody: JSON.stringify(responseBody),
        error: `${exception['name']}: ${exception['message']}`,
        url: request.url,
        code: responseBody.code,
        method: request.method,
        body: request.body,
        params: request.params,
        headers: request.headers,
        type: host.getType(),
        requestUser: request['user'] ? JSON.stringify(request['user']) : {},
      }),
      'ERROR',
      `[${AllExceptionsFilter.name}]`,
    );
    response.status(responseBody.code).json(responseBody);
  }
}
