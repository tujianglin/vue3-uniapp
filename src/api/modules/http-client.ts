/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { http } from '/@/utils/http';

export type RequestParams = Omit<UniApp.RequestOptions, 'url' | 'data'>;

export interface RequestData<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

export class HttpClient {
  public request = <T = any, _E = any>(data: UniApp.RequestOptions) => http<RequestData<T>>(data);
}
