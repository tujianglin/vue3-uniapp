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

import { CreateAuthDto } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class AuthApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 权限
   * @name AuthControllerSignIn
   * @summary 登录
   * @request POST:/auth/login
   */
  authControllerSignIn = (data: CreateAuthDto, params: RequestParams = {}) =>
    this.request<CreateAuthDto, any>({
      path: `/auth/login`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
