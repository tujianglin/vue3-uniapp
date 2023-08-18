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

export interface CreateUserDto {
  /** 用户名 */
  username: string;
  password: string;
}

export interface UpdateUserDto {
  /** 用户名 */
  username?: string;
  password?: string;
}

export type CreateLogDto = object;

export type UpdateLogDto = object;

export interface CreateAuthDto {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
}

export interface ResultAuthDto {
  /** 用户名 */
  username?: string;
  /** 密码 */
  password?: string;
  /** token码 */
  access_token: string;
}
