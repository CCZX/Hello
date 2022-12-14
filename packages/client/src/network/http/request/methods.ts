import { request, RequestConfig, Response } from './request';

/**
 * get 请求方法
 */
export function get<REQ_DATA = any, RES_DATA = any>(config: RequestConfig<REQ_DATA>) {
  return request.request<Response<RES_DATA>>({
    ...config,
    method: 'GET',
    params: config.data,
  });
}

/**
 * post 请求方法
 */
export function post<REQ_DATA = any, RES_DATA = any>(config: RequestConfig<REQ_DATA>) {
  return request.request<Response<RES_DATA>>({
    ...config,
    method: 'POST',
  });
}
