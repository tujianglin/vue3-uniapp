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
import { HttpClient, RequestParams } from './http-client';

export interface RequestData<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

export class UsersApi extends HttpClient {
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
      url: `/users`,
      method: 'POST',
      data: data,
      ...params,
    }); /**
   * No description
   *
   * @tags 用户
   * @name UsersControllerFindAll
   * @summary 用户列表
   * @request GET:/users
   */

  usersControllerFindAll = (params: RequestParams = {}) =>
    this.request<void, any>({
      url: `/users`,
      method: 'GET',
      ...params,
    }); /**
   * No description
   *
   * @tags 用户
   * @name UsersControllerFindOne
   * @summary 用户详情
   * @request GET:/users/{id}
   */

  usersControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      url: `/users/${id}`,
      method: 'GET',
      ...params,
    }); /**
   * No description
   *
   * @tags 用户
   * @name UsersControllerUpdate
   * @summary 编辑用户
   * @request PATCH:/users/{id}
   */

  usersControllerUpdate = (id: string, data: UpdateUserDto, params: RequestParams = {}) =>
    this.request<void, any>({
      url: `/users/${id}`,
      method: 'PATCH',
      data: data,
      ...params,
    }); /**
   * No description
   *
   * @tags 用户
   * @name UsersControllerRemove
   * @summary 删除用户
   * @request DELETE:/users/{id}
   */

  usersControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      url: `/users/${id}`,
      method: 'DELETE',
      ...params,
    });
}
