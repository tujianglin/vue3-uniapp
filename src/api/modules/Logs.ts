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
import { ContentType, HttpClient, RequestParams } from './http-client';

export class LogsApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 日志
   * @name LogsControllerCreate
   * @request POST:/logs
   */
  logsControllerCreate = (data: CreateLogDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/logs`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 日志
   * @name LogsControllerFindAll
   * @request GET:/logs
   */
  logsControllerFindAll = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/logs`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 日志
   * @name LogsControllerFindOne
   * @request GET:/logs/{id}
   */
  logsControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/logs/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 日志
   * @name LogsControllerUpdate
   * @request PATCH:/logs/{id}
   */
  logsControllerUpdate = (id: string, data: UpdateLogDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/logs/${id}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 日志
   * @name LogsControllerRemove
   * @request DELETE:/logs/{id}
   */
  logsControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/logs/${id}`,
      method: 'DELETE',
      ...params,
    });
}
