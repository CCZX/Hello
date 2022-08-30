import { request, RequestConfig, Response } from './request';

/**
 * get 请求方法
 */
export function get<REQCONF, RESDATA>(config: RequestConfig<REQCONF>) {
  return request.request<Response<RESDATA>>({
    ...config,
    method: 'GET',
    params: config.data,
  });
}

/**
 * post 请求方法
 */
export function post<REQCONF, RESDATA>(config: RequestConfig<REQCONF>) {
  return request.request<Response<RESDATA>>({
    ...config,
    method: 'POST',
  });
}
