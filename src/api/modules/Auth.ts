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

import { CreateAuthDto, ResultAuthDto } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export interface RequestData<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

export class AuthApi extends HttpClient {
  /**
   * No description
   *
   * @tags 权限
   * @name AuthControllerSignIn
   * @summary 登录
   * @request POST:/auth/login
   */

  authControllerSignIn = (data: CreateAuthDto, params: RequestParams = {}) =>
    this.request<ResultAuthDto, any>({
      url: `/auth/login`,
      method: 'POST',
      data: data,
      ...params,
    });
}
