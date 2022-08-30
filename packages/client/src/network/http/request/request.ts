import axios from 'axios';
import type { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { constant } from '@hello/common';
import { getToken, saveToken } from './../../../utils/auth';

interface RequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (error: any) => any;

  responseInterceptors?: <T = AxiosResponse>(response: T) => T;
  responseInterceptorsCatch?: (error: any) => any;
}

export interface RequestConfig<REQCONF = any> extends AxiosRequestConfig<REQCONF> {
  interceptors?: RequestInterceptors;
}

export interface Response<D> {
  code: number;
  message: string;
  data: D & { token?: string };
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
      (config: AxiosRequestConfig) => {
        if (config.headers) {
          config.headers.token = getToken();
        }
        // console.log('gloabl request success', config);
        return config;
      },
      (error: any) => {
        // console.log('gloabl request error');
        return error;
      },
    );
  }

  private setResponseInterceptors() {
    this.instance.interceptors.response.use(
      (response: AxiosResponse<Response<any>, any>) => {
        // console.log('gloabl response success', response);
        if (response.data?.data?.token) {
          saveToken(response.data?.data?.token);
        }
        // data 是后端返回的信息，通常我们只关心这部分数据
        return response.data;
      },
      (error: any) => {
        // console.log('gloabl response error', error);
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

export const request = new Request({
  baseURL: `${constant.SERVER_BASE_HOST}${constant.API_V1_PATH}`,
  timeout: DEFAULT_TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      // console.log('instance request success', config);
      return config;
    },
    responseInterceptors: (result) => {
      // console.log('instance response success', result);
      return result;
    },
  },
});
