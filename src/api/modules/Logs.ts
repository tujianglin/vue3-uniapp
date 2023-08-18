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

import { CreateLogDto, UpdateLogDto } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export interface RequestData<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

export class LogsApi extends HttpClient {
  /**
   * No description
   *
   * @tags 日志
   * @name LogsControllerCreate
   * @request POST:/logs
   */

  logsControllerCreate = (data: CreateLogDto, params: RequestParams = {}) =>
    this.request<void, any>({
      url: `/logs`,
      method: 'POST',
      data: data,
      ...params,
    }); /**
   * No description
   *
   * @tags 日志
   * @name LogsControllerFindAll
   * @request GET:/logs
   */

  logsControllerFindAll = (params: RequestParams = {}) =>
    this.request<void, any>({
      url: `/logs`,
      method: 'GET',
      ...params,
    }); /**
   * No description
   *
   * @tags 日志
   * @name LogsControllerFindOne
   * @request GET:/logs/{id}
   */

  logsControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      url: `/logs/${id}`,
      method: 'GET',
      ...params,
    }); /**
   * No description
   *
   * @tags 日志
   * @name LogsControllerUpdate
   * @request PATCH:/logs/{id}
   */

  logsControllerUpdate = (id: string, data: UpdateLogDto, params: RequestParams = {}) =>
    this.request<void, any>({
      url: `/logs/${id}`,
      method: 'PATCH',
      data: data,
      ...params,
    }); /**
   * No description
   *
   * @tags 日志
   * @name LogsControllerRemove
   * @request DELETE:/logs/{id}
   */

  logsControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      url: `/logs/${id}`,
      method: 'DELETE',
      ...params,
    });
}
