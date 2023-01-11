import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Log4jsService } from './log4js.service';

export abstract class Log4jsInterceptorAbstract implements NestInterceptor {
  protected constructor(
    protected requestLogger: Log4jsService,
    protected responseLogger: Log4jsService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpRequest = context.switchToHttp().getRequest();
    return next.handle().pipe(
      tap((httpResponse) => {
        this.requestLogger.log(
          this.requestFormat(httpRequest),
          '[Interceptor]',
        );
        this.responseLogger.log(
          this.responseFormat(
            httpResponse,
            httpRequest.url,
            httpRequest.method,
          ),
          '[Interceptor]',
        );
      }),
      map((httpResponse) => {
        if (httpResponse) {
          delete httpResponse['code'];
          delete httpResponse['monitoringCode'];
        }
        return httpResponse;
      }),
    );
  }

  abstract requestFormat<T>(httpRequest: T): string;

  abstract responseFormat<T>(
    httpResponse: T,
    url: string,
    method: string,
  ): string;
}
