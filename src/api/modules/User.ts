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

import { User } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class UserApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 用户
   * @name UserControllerGetUsers
   * @request GET:/user
   */
  userControllerGetUsers = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/user`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户
   * @name UserControllerAddUser
   * @summary 添加用户
   * @request POST:/user
   */
  userControllerAddUser = (data: User, params: RequestParams = {}) =>
    this.request<User, any>({
      path: `/user`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户
   * @name UserControllerUpdateUser
   * @request PATCH:/user
   */
  userControllerUpdateUser = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/user`,
      method: 'PATCH',
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户
   * @name UserControllerDeleteUser
   * @request DELETE:/user
   */
  userControllerDeleteUser = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/user`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户
   * @name UserControllerGetUserProfile
   * @request GET:/user/profile
   */
  userControllerGetUserProfile = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/user/profile`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户
   * @name UserControllerGetUserLogs
   * @request GET:/user/logs
   */
  userControllerGetUserLogs = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/user/logs`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户
   * @name UserControllerGetLogsByGroup
   * @request GET:/user/logsByGroup
   */
  userControllerGetLogsByGroup = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/user/logsByGroup`,
      method: 'GET',
      ...params,
    });
}
