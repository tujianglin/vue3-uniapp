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
import { HttpClient, RequestParams } from './http-client';

export class UserApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags user
   * @name UserControllerGetUsers
   * @summary 获取用户列表
   * @request GET:/user
   */
  userControllerGetUsers = (params: RequestParams = {}) =>
    this.request<User, any>({
      path: `/user`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name UserControllerAddUser
   * @request POST:/user
   */
  userControllerAddUser = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/user`,
      method: 'POST',
      ...params,
    });
  /**
   * No description
   *
   * @tags user
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
   * @tags user
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
   * @tags user
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
   * @tags user
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
   * @tags user
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
