import axios from 'axios';
import type { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { constant } from '@hello/common';

interface RequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;

  responseInterceptors?: <T = AxiosResponse>(config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}

interface RequestConfig<REQCONF = any> extends AxiosRequestConfig<REQCONF> {
  interceptors?: RequestInterceptors;
}

interface Response<D> {
  code: number;
  message: string;
  data: D;
}

const DEFAULT_TIME_OUT = 1000 * 10; // 10s

class Request {
  instance: AxiosInstance;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);

    this.setRequestInterceptors();

    this.setResponseInterceptors();
  }

  private setRequestInterceptors() {
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log('gloabl request success');
        return res;
      },
      (error: any) => {
        console.log('gloabl request error');
        return error;
      },
    );
  }

  private setResponseInterceptors() {
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('gloabl response success');
        return res.data;
      },
      (error: any) => {
        console.log('gloabl response error');
        return error;
      },
    );
  }

  request<T>(config: RequestConfig) {
    return new Promise<T>((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors<T>(res);
          }

          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
}

const request = new Request({
  baseURL: constant.API_V1_PATH,
  timeout: DEFAULT_TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      console.log('instance request success');

      return config;
    },
    responseInterceptors: (result) => {
      console.log('instance response success');
      return result;
    },
  },
});

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
export function post<REQCONF = any, RESDATA = any>(config: RequestConfig<REQCONF>) {
  return request.request<Response<RESDATA>>({
    ...config,
    method: 'POST',
  });
}
