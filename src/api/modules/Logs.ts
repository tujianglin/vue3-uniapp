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

import { Logs } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class LogsApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name LogsControllerAddLogs
   * @request POST:/logs
   */
  logsControllerAddLogs = (data: Logs, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/logs`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
