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

import { CreateUserDto, UpdateUserDto } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class UsersApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 用户
   * @name UsersControllerCreate
   * @summary 新建用户
   * @request POST:/users
   */
  usersControllerCreate = (data: CreateUserDto, params: RequestParams = {}) =>
    this.request<CreateUserDto, any>({
      path: `/users`,
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
   * @name UsersControllerFindAll
   * @summary 用户列表
   * @request GET:/users
   */
  usersControllerFindAll = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/users`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户
   * @name UsersControllerFindOne
   * @summary 用户详情
   * @request GET:/users/{id}
   */
  usersControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/users/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户
   * @name UsersControllerUpdate
   * @summary 编辑用户
   * @request PATCH:/users/{id}
   */
  usersControllerUpdate = (id: string, data: UpdateUserDto, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/users/${id}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户
   * @name UsersControllerRemove
   * @summary 删除用户
   * @request DELETE:/users/{id}
   */
  usersControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/users/${id}`,
      method: 'DELETE',
      ...params,
    });
}
