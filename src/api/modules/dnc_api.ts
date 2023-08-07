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

/** ArchiveDirectoryFileSearchVO */
export interface ArchiveDirectoryFileSearchVO {
  /** 归档目录id */
  arId?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 文件类别 程序 1 文件 2
   * @format int32
   */
  fileType?: number;
  /** 关键词:文件名称,后缀 */
  keywords?: string;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 工位id */
  workstationId?: string;
}

/** ArtFileAddVO */
export interface ArtFileAddVO {
  /** 文件md5值 */
  contentMd5?: string;
  /**
   * 文件类别(1:程序,2 文档)
   * @format int32
   */
  fileType?: number;
  /** 文件名称 */
  filename?: string;
  /** objectKey */
  objectKey?: string;
}

/** BagProcessQueryVO */
export interface BagProcessQueryVO {
  /** 查询关键字 */
  keyword?: string;
  /** 分页条件 */
  query?: Query;
  /** 查询type BAG_OR_PROCESS工艺包和程序文档 ONLY_BAG仅工艺包 ONLY_PROCESS仅程序文档 */
  type?: 'BAG_OR_PROCESS' | 'ONLY_BAG' | 'ONLY_PROCESS';
}

/** BatchArchiveArtBagFilesVO */
export interface BatchArchiveArtBagFilesVO {
  /** 归档原因 */
  archiveReason?: string;
  /** 工艺包ids */
  artBagIds?: string[];
  /** 文件 */
  dncArtFileAddList?: DncArtFileAddVO[];
}

/** BladeFile */
export interface BladeFile {
  attachId?: string;
  domain?: string;
  fullLink?: string;
  link?: string;
  name?: string;
  originalName?: string;
}

/** ChangeFileParentVO */
export interface ChangeFileParentVO {
  /** parentId */
  parentId?: string;
  sourceIdList: number[];
}

/** CreateFileVO */
export interface CreateFileVO {
  id?: string;
  originalName?: string;
  ossFile?: OssFile;
  targetId?: string;
}

/** DeleteFileVO */
export interface DeleteFileVO {
  sourceIdList?: number[];
}

/** DncArchiveDirectoryAddVO */
export interface DncArchiveDirectoryAddVO {
  /** 归档目录名称 */
  name?: string;
  /** 父节点id */
  parentId?: string;
}

/** DncArchiveDirectoryFileAddVO */
export interface DncArchiveDirectoryFileAddVO {
  contentLength?: string;
  /**
   * 文件md5值
   * @minLength 0
   * @maxLength 100
   */
  contentMd5?: string;
  /**
   * 文件类型
   * @minLength 0
   * @maxLength 100
   */
  contentType?: string;
  /**
   * 文件归属：1 工位  2 工厂
   * @format int32
   */
  fileOwnership?: number;
  /**
   * 文件名称
   * @minLength 0
   * @maxLength 100
   */
  filename?: string;
  /** 文件链接 */
  link?: string;
  /**
   * 文件的objectKey
   * @minLength 0
   * @maxLength 100
   */
  objectKey?: string;
  /**
   * 原始文件名称
   * @minLength 0
   * @maxLength 100
   */
  originalFilename?: string;
  /**
   * 文件后缀
   * @minLength 0
   * @maxLength 50
   */
  suffix?: string;
  /** 工位文件id */
  workstationFileId?: string;
  /** 工位id */
  workstationId?: string;
}

/** DncArchiveDirectoryUpdateVO */
export interface DncArchiveDirectoryUpdateVO {
  /** 目录id */
  directoryId?: string;
  /** 归档目录名称 */
  name?: string;
  /** 父节点id */
  parentId?: string;
}

/** DncArchiveFileAddVO */
export interface DncArchiveFileAddVO {
  /** 归档目录id */
  archiveDirectoryIds?: string[];
  /** 归档原因 */
  archiveReason?: string;
  /** 归档文件列表 */
  fileAddVOList?: DncArchiveDirectoryFileAddVO[];
}

/** DncArtFileAddVO */
export interface DncArtFileAddVO {
  /** 归档原因 */
  archiveReason?: string;
  /** 工艺包id */
  artBagId?: string;
  /** 文件大小 */
  contentLength?: string;
  /**
   * 文件md5值
   * @minLength 0
   * @maxLength 100
   */
  contentMd5?: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  contentType?: string;
  /** 文件id */
  fileId?: string;
  /**
   * 文件归属：1 工位  2 工厂
   * @format int32
   */
  fileOwnership?: number;
  /**
   * 文件类别(1:程序,2 文档)
   * @format int32
   */
  fileType?: number;
  /**
   * 文件名称
   * @minLength 0
   * @maxLength 100
   */
  filename?: string;
  /** 主键id */
  id?: string;
  /** 文件链接 */
  link?: string;
  /**
   * 文件的objectKey
   * @minLength 0
   * @maxLength 100
   */
  objectKey?: string;
  /**
   * 原始文件名称
   * @minLength 0
   * @maxLength 100
   */
  originalFilename?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /**
   * 文件来源: 本地文件 0、我的文档 1、工位文件 2、工厂文件 3、机床回传4 、工艺包 5
   * @format int32
   */
  sourceType?: number;
  /**
   * 存储空间 固定空间1 常规空间2
   * @format int32
   */
  storageSpace?: number;
  /**
   * @minLength 0
   * @maxLength 50
   */
  suffix?: string;
  /**
   * @minLength 0
   * @maxLength 10
   */
  tenantId?: string;
  /** 工位目录 */
  workstationDirectory?: string;
}

/** DncCatalogueAndArtBagTreeVO */
export interface DncCatalogueAndArtBagTreeVO {
  /** 全路径(包含自身) */
  allPath?: string;
  /** 工艺包id */
  artId?: string;
  /** 工艺包名称 */
  artName?: string;
  children?: DncCatalogueAndArtBagTreeVO[];
  /** 工艺包编号 */
  code?: string;
  /** 职权域id */
  deptId?: string;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 是否是工艺包 */
  isArtBag?: boolean;
  /** 是否是工艺目录 */
  isGroup?: boolean;
  /** 工艺目录名称 */
  name?: string;
  /** 父主键 */
  parentId?: string;
}

/** DncCatalogueAndArtBagVO */
export interface DncCatalogueAndArtBagVO {
  /** 全路径(包含自身) */
  allPath?: string;
  /** 工艺包id */
  artId?: string;
  /** 工艺包名称 */
  artName?: string;
  /** 工艺包编号 */
  code?: string;
  /** 职权域id */
  deptId?: string;
  /** 主键 */
  id?: string;
  /** 是否是工艺包 */
  isArtBag?: boolean;
  /** 是否是工艺目录 */
  isGroup?: boolean;
  /** 工艺目录名称 */
  name?: string;
  /** 父主键 */
  parentId?: string;
}

/** DncDirectorySettingsEditVO */
export interface DncDirectorySettingsEditVO {
  /**
   * 工艺包拼接内容：1 工艺包名称  2 工艺包编号
   * @format int32
   */
  bagSplicingContent?: number;
  /**
   * 目录拼接内容：其他任意数字  (-1: 最后一层)
   * @format int32
   */
  dirSplicingContent?: number;
  id?: string;
  /**
   * 拼接来源： 0 工艺包目录 1 工艺包属性
   * @format int32
   */
  sourceOfSplicing?: number;
  /** 拼接符号 */
  spliceSymbol?: string;
  /**
   * 拼接方式：1 拼接在文件名前 2 拼接文件名后
   * @format int32
   */
  splicingMethod?: number;
}

/** DncDirectorySettingsVO */
export interface DncDirectorySettingsVO {
  /**
   * 工艺包拼接内容：1 工艺包名称  2 工艺包编号
   * @format int32
   */
  bagSplicingContent?: number;
  /**
   * 目录拼接内容：其他任意数字  (-1: 最后一层)
   * @format int32
   */
  dirSplicingContent?: number;
  /**
   * 拼接来源： 0 工艺包目录 1 工艺包属性
   * @format int32
   */
  sourceOfSplicing?: number;
  /** 拼接符号 */
  spliceSymbol?: string;
  /**
   * 拼接方式：1 拼接在文件名前 2 拼接文件名后
   * @format int32
   */
  splicingMethod?: number;
}

/** DncFixSpaceTreeVO */
export interface DncFixSpaceTreeVO {
  /** 全路径(包含自身) */
  allPath?: string;
  /** 主键 */
  id?: string;
  /** 工艺目录名称 */
  name?: string;
  /** 父主键 */
  parentId?: string;
  /** FTP目录id */
  tdId?: string;
}

/** DncFixedSpaceAdVO */
export interface DncFixedSpaceAdVO {
  /** FTP目录id */
  directoryId?: string;
  /** 节点名称 */
  name?: string;
  /** 父节点id */
  parentId?: string;
}

/** DncFixedSpaceUpVO */
export interface DncFixedSpaceUpVO {
  /** FTP目录id */
  directoryId?: string;
  /** 节点id */
  id?: string;
  /** 节点名称 */
  name?: string;
}

/** DncOperationLogSearchVO */
export interface DncOperationLogSearchVO {
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 关键词 */
  keyWord?: string;
  /**
   * 操作类型：上传1 下载2 删除3 更新4 5移动 6复制
   * @format int32
   */
  operationType?: number;
  /**
   * 源类型：本地文件 0、我的文档 1、工位文件 2、工厂文件 3、机床回传4 、工艺包 5
   * @format int32
   */
  sourceType?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
}

/** DncOperationLogVO */
export interface DncOperationLogVO {
  /** 归档原因 */
  archiveReason?: string;
  /** 文件大小 */
  contentLength?: string;
  /** 文件id */
  fileId?: string;
  /**
   * 文件位置：1 内部存储 2 以太网
   * @format int32
   */
  fileLocation?: number;
  /** 文件位置：1 内部存储 2 以太网 */
  fileLocationDesc?: string;
  /** 文件名称 */
  fileName?: string;
  /**
   * 文件类型 1:代表文件夹  0:代表文件
   * @format int32
   */
  fileType?: number;
  /** id */
  id?: string;
  /** 文件链接 */
  link?: string;
  /** 文件的objectKey */
  objectKey?: string;
  /**
   * 操作结果:成功1 失败0
   * @format int32
   */
  operationResponse?: number;
  /**
   * 操作时间
   * @format date-time
   */
  operationTime?: string;
  /**
   * 操作类型：上传1 下载2 删除3 更新4 5移动 6复制 7归档
   * @format int32
   */
  operationType?: number;
  /** 操作类型说明：上传1 下载2 删除3 更新4 5移动 6复制 7归档 */
  operationTypeDesc?: string;
  /** 操作人id */
  operatorId?: string;
  /** 操作人 */
  operatorName?: string;
  /**
   * 序号
   * @format int32
   */
  sort?: number;
  /** 源全路径id */
  sourcePathId?: string;
  /** 源全路径名称 */
  sourcePathName?: string;
  /**
   * 源类型：本地文件0 我的文档1 工位文件-加工程序2 工艺文件-通用文件 3  回传文件 4 工艺文件-非通用文件
   * @format int32
   */
  sourceType?: number;
  /** 源类型：本地文件0 我的文档1 工位文件-加工程序2 工艺文件-通用文件3  回传文件 4 工艺文件-非通用文件 */
  sourceTypeDesc?: string;
  /**
   * 存储位置：1 常规空间  2 固定空间
   * @format int32
   */
  storageSpace?: number;
  /** 存储位置：1 常规空间  2 固定空间 */
  storageSpaceDec?: string;
  /** 文件的后缀 */
  suffix?: string;
  /** 目标全路径id：格式，/1/123/456 */
  targetPathId?: string;
  /** 目标全路径名称:格式，/我的文档/文件夹1/文件夹2 */
  targetPathName?: string;
  /**
   * 目标类型：本地文件0 我的文档1 工位文件-加工程序2 工艺文件-工位文件3  回传文件 4
   * @format int32
   */
  targetType?: number;
  /** 目标类型说明：本地文件0 我的文档1 工位文件-加工程序2 工艺文件-工位文件3  FTP 4 */
  targetTypeDesc?: string;
  /** 文件版本 */
  version?: string;
  /** 工位id */
  workstationId?: string;
}

/** DncReadFileVO */
export interface DncReadFileVO {
  /** 文件名称 */
  fileName?: string;
  /** 工位id */
  workstationId?: string;
}

/** DncWriteFileVO */
export interface DncWriteFileVO {
  /** 文件id */
  fileId?: string;
  /** 文件名称 */
  fileName?: string;
  /**
   * 文件来源 1 本地文件  2 我的文档  3 工艺管理 4 FTP/回传文件
   * @format int32
   */
  fileSource?: number;
  /** 文件链接 */
  objectKey?: string;
}

/** DuplicateValidationFileVO */
export interface DuplicateValidationFileVO {
  /** 工艺包id */
  artBagId?: string;
  /** 文件 */
  artFileAddVOList?: ArtFileAddVO[];
}

/** EntityInfoVO */
export interface EntityInfoVO {
  canWrite?: boolean;
  /** @format date-time */
  creationTime?: string;
  hash?: string;
  id?: string;
  isDirectory?: boolean;
  name?: string;
  objectKey?: string;
  owner?: string;
  size?: string;
  /** @format date-time */
  updateTime?: string;
}

/** FactoryFileVO */
export interface FactoryFileVO {
  fileName: string;
  objectKey: string;
}

/** FileHistoryVO */
export interface FileHistoryVO {
  /** 文件大小 */
  contentLength?: string;
  /** 文件MD5值 */
  contentMd5?: string;
  /** 对象MIME类型 */
  contentType?: string;
  /**
   * 文件覆盖时间
   * @format date-time
   */
  covertTime?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 创建人名称 */
  createUserName?: string;
  /** 文件名 */
  filename?: string;
  /** 文件id */
  id?: string;
  /**
   * 是否为当前版本 默认 1是 0否
   * @format int32
   */
  isCurrent?: number;
  /** 文件链接 */
  link?: string;
  /** 文件的objectKey */
  objectKey?: string;
  /** 文件的后缀 */
  suffix?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
  /** 更新人ID名称 */
  updateUserName?: string;
  /** 版本 */
  version?: string;
  /** 文件版本 */
  versionDesc?: string;
}

/** FileVO */
export interface FileVO {
  allPathName?: string;
  /** 文件大小 */
  contentLength?: string;
  contentMd5?: string;
  contentType?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人ID */
  createUser?: string;
  /** 创建人名称 */
  createUserName?: string;
  displayName?: string;
  /** @format int32 */
  fileType?: number;
  /** 主键Id */
  id?: string;
  link?: string;
  name?: string;
  objectKey?: string;
  /** 父级id */
  parentId?: string;
  suffix?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人ID */
  updateUser?: string;
  /** 更新人名称 */
  updateUserName?: string;
  version?: string;
  versionDesc?: string;
}

/** FileVersionSwitchVO */
export interface FileVersionSwitchVO {
  /** 当前版本的文件id */
  currentFileId?: string;
  /** 切换版本的文件id */
  switchFileId?: string;
}

/** FolderListVO */
export interface FolderListVO {
  fileList?: FileVO[];
  folderList?: FolderVO[];
  orders?: OrderItem[];
}

/** FolderTreeVO */
export interface FolderTreeVO {
  children?: FolderTreeVO[];
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人ID */
  createUser?: string;
  /** 创建人名称 */
  createUserName?: string;
  /**
   * 类型 文件夹：1  文件：2
   * @format int32
   */
  fileType?: number;
  group?: boolean;
  hasChildren?: boolean;
  /** 主键Id */
  id?: string;
  name?: string;
  /** 父级id */
  parentId?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人ID */
  updateUser?: string;
  /** 更新人名称 */
  updateUserName?: string;
}

/** FolderVO */
export interface FolderVO {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人ID */
  createUser?: string;
  /** 创建人名称 */
  createUserName?: string;
  /**
   * 类型 文件夹：1  文件：2
   * @format int32
   */
  fileType?: number;
  /** 主键Id */
  id?: string;
  name?: string;
  /** 父级id */
  parentId?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人ID */
  updateUser?: string;
  /** 更新人名称 */
  updateUserName?: string;
}

/** FtpDirectoryRelationWorkstationVO */
export interface FtpDirectoryRelationWorkstationVO {
  /** Ftp目录id */
  id?: string;
  /** 目录名称 */
  name?: string;
  /** 目录关联的工位集合 */
  workstationDTOS?: WorkstationDTO[];
}

/** FtpDirectorySearchVO */
export interface FtpDirectorySearchVO {
  /** 目录名称 */
  name?: string;
  /** 工位id集合 */
  workstationIds?: string[];
}

/** FtpDirectoryVO */
export interface FtpDirectoryVO {
  /** 路径下的资源 */
  list?: EntityInfoVO[];
  /** 路径 */
  path?: string;
}

/** FtpTransferDirectoryVO */
export interface FtpTransferDirectoryVO {
  /** Ftp目录id */
  id?: string;
  /** 目录名称 */
  name?: string;
}

/** HmiDeviceVO */
export interface HmiDeviceVO {
  /** 存储空间：1 内部存储  2 以太网 */
  fileLocations?: number[];
  /** 设备id */
  workstationId?: string;
  /** 设备名称 */
  workstationName?: string;
}

/** LogSearchVO */
export interface LogSearchVO {
  /** 文件名称 */
  fileName?: string;
  /** 文件类型 */
  fileType?: string;
  /**
   * 操作结束时间
   * @format date-time
   */
  operationEndTime?: string;
  /**
   * 操作开始时间
   * @format date-time
   */
  operationStartTime?: string;
  /** 操作类型 */
  operationType?: string;
}

/** MachineToolBatchWriteFileVO */
export interface MachineToolBatchWriteFileVO {
  /** 文件信息 */
  dncWriteFileVOList?: DncWriteFileVO[];
  over?: boolean;
  /** 工位id集合 */
  workstationIds?: string[];
}

/** NewFolderVO */
export interface NewFolderVO {
  allPathName?: string;
  /** 文件大小 */
  contentLength?: string;
  /** 文件md5值 */
  contentMd5?: string;
  /** 对象MIME类型 */
  contentType?: string;
  /** 文件名 */
  displayName?: string;
  fileType?: 'FOLDER' | 'FILE' | 'RESOURCE_FILE';
  /** 主键id */
  id?: string;
  name: string;
  /** 文件的objectKey */
  objectKey?: string;
  owner?: string;
  parent?: string;
  /** 后缀名 */
  suffix?: string;
}

/** OrderItem */
export interface OrderItem {
  asc?: boolean;
  column?: string;
}

/** OssFile */
export interface OssFile {
  contentType?: string;
  fullLink?: string;
  hash?: string;
  /** @format int64 */
  length?: number;
  link?: string;
  name?: string;
  /** @format date-time */
  putTime?: string;
}

/** ProcessCatalogueTreeVO */
export interface ProcessCatalogueTreeVO {
  children?: ProcessCatalogueTreeVO[];
  /** 编码 */
  code?: string;
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 是否为程序 */
  isProcess?: boolean;
  /** 名称 */
  name?: string;
  /** 父节点ID */
  parentId?: string;
}

/**
 * Query
 * 查询条件
 */
export interface Query {
  /**
   * 当前页
   * @format int32
   */
  current?: number;
  /**
   * 每页的数量
   * @format int32
   */
  size?: number;
}

/**
 * R
 * 返回信息
 */
export interface R {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: object;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/** ReceiveScheduleVO */
export interface ReceiveScheduleVO {
  /** 按指定编码的数据内容 */
  content?: string;
  /** 异常消息，作为数据状态为false时参考 */
  exceptionMessage?: string;
  /** 是否结束 */
  isFinished?: boolean;
  /**
   * 已接收字节数
   * @format int32
   */
  receiveBytes?: number;
  /**
   * 接收速度 单位 字节/秒
   * @format int32
   */
  receiveSpeed?: number;
  /** 数据状态，被取消或发生异常时为false */
  status?: boolean;
}

/** RenameVO */
export interface RenameVO {
  /** @format int32 */
  fileType: number;
  newName: string;
  parentId: string;
}

/** SendScheduleVO */
export interface SendScheduleVO {
  /**
   * 发送数据总字节数
   * @format int32
   */
  bytes?: number;
  /** 异常消息 作为数据状态false */
  exceptionMessage?: string;
  /** 是否结束 */
  isFinished?: boolean;
  /**
   * 已发送字节数
   * @format int32
   */
  sendCount?: number;
  /** 数据状态 被取消或发生异常时为false */
  status?: boolean;
}

/** SerialInfoDTO */
export interface SerialInfoDTO {
  /** 串口对应的设备名称 */
  deviceName?: string;
  /** 串口名称 */
  serialName?: string;
}

/** SerialSendVO */
export interface SerialSendVO {
  /** 非必传 */
  header?: Record<string, string>;
  /** 远程文件url */
  remoteUrl?: string;
  /** 串口配置 */
  serialSetting?: SerialSetting;
}

/** SerialSetting */
export interface SerialSetting {
  /**
   * 波特率
   * @format int32
   */
  baudRate?: number;
  /**
   * 数据位
   * @format int32
   */
  dataBits?: number;
  /**
   * 流控 0:无流控 1:软流控 2:硬流控 3:软流控和硬流控
   * @format int32
   */
  handshake?: number;
  /**
   * 奇偶校验位 0:无奇偶校验 1:奇校验 2:偶校验 3:奇偶校验位设置为1 4:奇偶校验位设置为0
   * @format int32
   */
  parity?: number;
  /** 串口名称 */
  serialName?: string;
  /**
   * 停止位 0:没有停止位;1:1;2:3;3:1.5
   * @format int32
   */
  stopBits?: number;
  /**
   * 超时
   * @format int32
   */
  timeout?: number;
  /**
   * 发送文件时是否先等待一个字节，以Ascii码十进制数表示。-1不启用。接收时忽略。
   * @format int32
   */
  waitForChar?: number;
}

/** SpaceRootNodeVO */
export interface SpaceRootNodeVO {
  /** 根节点名称 */
  name?: string;
  /** 父主键 */
  parentId?: string;
  /** 根节点id */
  rootNodeId?: string;
  /** 根节点名称 */
  title?: string;
}

/** SuffixListVO */
export interface SuffixListVO {
  /** 后缀集合 */
  suffix?: string[];
}

/** SwitchDTO */
export interface SwitchDTO {
  /** 参数值：false 手动 true 自动 */
  paramValue?: string;
}

/** SyncArtBagFileVO */
export interface SyncArtBagFileVO {
  /** 文件大小 */
  contentLength?: string;
  /** 文件地址 */
  fileLink?: string;
  /** 文件名称 */
  fileName?: string;
  /**
   * 文件版本
   * @format int32
   */
  fileVersion?: number;
  /** 文件后缀 */
  suffix?: string;
}

/** SyncArtBagVO */
export interface SyncArtBagVO {
  /** 工艺包编码 */
  code?: string;
  /** 工艺包文件 */
  fileList?: SyncArtBagFileVO[];
  /** 工艺包名称 */
  name?: string;
}

/** SyncArtCatalogVO */
export interface SyncArtCatalogVO {
  /** 工艺包 */
  artBag?: SyncArtBagVO[];
  /** 目录 */
  catalog?: string;
}

/** TransferDirectorAddVO */
export interface TransferDirectorAddVO {
  /** 目录名称 */
  name?: string;
  /** 工位id */
  workstationIds?: string[];
}

/** TransferDirectoryFilePageVO */
export interface TransferDirectoryFilePageVO {
  /** 文件大小 */
  contentLength?: string;
  /** 文件md5值 */
  contentMd5?: string;
  /** 对象MIME类型 */
  contentType?: string;
  /**
   * 文件归属:1 工位 2 工厂
   * @format int32
   */
  documentOwnership?: number;
  /** 文件归属:1 工位 2 工厂 */
  documentOwnershipDesc?: string;
  /**
   * 文件类别 程序 1 文件 2
   * @format int32
   */
  fileType?: number;
  /** 文件名 */
  filename?: string;
  /** 主键Id */
  id?: string;
  /** 文件链接 */
  link?: string;
  /** 文件的objectKey */
  objectKey?: string;
  /** 原始文件名 */
  originalFilename?: string;
  /**
   * 存储位置：1 常规空间  2 固定空间
   * @format int32
   */
  storageSpace?: number;
  /** 存储位置：1 常规空间  2 固定空间 */
  storageSpaceDec?: string;
  /** 文件的后缀 */
  suffix?: string;
  /** 传输目录Id */
  transferDirectoryId?: string;
  /** 更新人 */
  updateUser?: string;
  /** 文件版本 */
  version?: string;
  /** 工位Id */
  workstationId?: string;
}

/** TransferDirectoryFileVo */
export interface TransferDirectoryFileVo {
  /**
   * 是否发送标识 1 可发送 0 不能发送
   * @format int32
   */
  canSent?: number;
  /** 文件大小 */
  contentLength?: string;
  /** 文件md5值 */
  contentMd5?: string;
  /** 对象MIME类型 */
  contentType?: string;
  /**
   * 文件最后修改时间
   * @format date-time
   */
  coverTime?: string;
  /** 创建人 */
  createUser?: string;
  /** 创建人名称 */
  createUserName?: string;
  /** 文件归属：1 工位  2 工厂 */
  documentOwnership?: string;
  /**
   * 文件归属：1 工位  2 工厂
   * @format int32
   */
  documentOwnerships?: number;
  /**
   * 文件属性：1 文件夹  null,0 都是文件
   * @format int32
   */
  fileAttribute?: number;
  /** 文件位置：1 内部存储 2 以太网 */
  fileLocation?: string;
  /**
   * 文件位置：1 内部存储 2 以太网
   * @format int32
   */
  fileLocations?: number;
  /**
   * 文件来源
   * @format int32
   */
  fileSource?: number;
  /**
   * 文件类别 程序 1 文件 2
   * @format int32
   */
  fileType?: number;
  /** 文件名 */
  filename?: string;
  /** 文件传输工位文件：文件位置 指的是文件再固定空间所在文件位置 */
  fixSpaceLocation?: string;
  /** 主键Id */
  id?: string;
  /**
   * 文件最后修改时间
   * @format date-time
   */
  lastModified?: string;
  /** 文件链接 */
  link?: string;
  /** 同filename */
  name?: string;
  /** 文件的objectKey */
  objectKey?: string;
  /** 原始文件名 */
  originalFilename?: string;
  /**
   * 存储位置：1 常规空间  2 固定空间
   * @format int32
   */
  storageSpace?: number;
  /** 文件的后缀 */
  suffix?: string;
  /** 传输目录Id */
  transferDirectoryId?: string;
  /**
   * 修改时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人 */
  updateUser?: string;
  /** 更新人名称 */
  updateUserName?: string;
  /**
   * 文件版本
   * @format int32
   */
  version?: number;
  /** 文件版本 */
  versionDesc?: string;
  /**
   * 文件是否归档  1 未归档  2 已归档
   * @format int32
   */
  whetherArchive?: number;
  /** 文件是否归档  1 未归档  2 已归档 */
  whetherArchiveDesc?: string;
  /** 工位Id */
  workstationId?: string;
}

/** UpdateDirectoryVO */
export interface UpdateDirectoryVO {
  /** 目录id */
  directorId?: string;
  /** 目录名称 */
  directorName?: string;
  /** 新工位集合 */
  newWorkstationIds?: string[];
  /** 旧工位集合 */
  oldWorkstationIds?: string[];
}

/** UpdateFileVO */
export interface UpdateFileVO {
  /** 文件id */
  fileId?: string;
  ossFile?: OssFile;
}

/** UploadFileOssVO */
export interface UploadFileOssVO {
  /** 全路径名称 */
  allPathName?: string;
  /**
   * 文件类型
   * @format int32
   */
  fileType?: number;
  id?: string;
  /**
   * 文件名称
   * @minLength 0
   * @maxLength 100
   */
  name?: string;
  ossFile: OssFile;
  /** 资源id */
  sourceId?: string;
  /** 文件夹id */
  targetId?: string;
}

/** VerifyArchiveFileCheckVO */
export interface VerifyArchiveFileCheckVO {
  /** 文件md5值 */
  contentMd5?: string;
  /** 文件名称 */
  filename?: string;
  /** objectKey */
  objectKey?: string;
  /** 工位id */
  workstationId?: string;
}

/** VerifyArchiveFileVO */
export interface VerifyArchiveFileVO {
  /** 归档目录id */
  archiveDirectoryIds?: string[];
  /** 文件校验 */
  voList?: VerifyArchiveFileCheckVO[];
}

/** WorkstationDTO */
export interface WorkstationDTO {
  calendarCode?: string;
  code?: string;
  createDept?: string;
  id?: string;
  name?: string;
  /** @format int32 */
  status?: number;
  /** @format int32 */
  type?: number;
}

/** WorkstationDetailVO */
export interface WorkstationDetailVO {
  /** 存储空间：1 内部存储  2 以太网，默认都传： 1,2 */
  fileLocations?: number[];
  /** 文件名称 */
  fileName?: string;
  /**
   * 1新版本 0老版本
   * @format int32
   */
  oldVer?: number;
  /**
   * 1 常规空间 0 固定空间
   * @format int32
   */
  regularSpace?: number;
  /** 固定空间目录id  根目录是常规空间  其他节点是固定空间文件 */
  storageSpaceId?: string;
  /** 工位id */
  workstationId?: string;
}

/** WorkstationDirectoryFileVO */
export interface WorkstationDirectoryFileVO {
  /** 文件大小 */
  contentLength?: string;
  /** 文件md5值 */
  contentMd5?: string;
  /** 对象MIME类型 */
  contentType?: string;
  /** 文档文件id */
  fileId?: string;
  /**
   * 文件来源 1 我的文档  2 本地文件 3 工艺管理 4 FTP/回传文件
   * @format int32
   */
  fileSource?: number;
  /**
   * 文件类别:程序 1 文件 2
   * @format int32
   */
  fileType?: number;
  /** 文件名 */
  filename?: string;
  /** id */
  id?: string;
  /**
   * 文件最后修改时间
   * @format date-time
   */
  lastModified?: string;
  /** 文件外链 */
  link?: string;
  /** 文件的objectKey */
  objectKey?: string;
  /** 原始文件名 */
  originalFilename?: string;
  /**
   * 存储位置：1 常规空间  2 固定空间
   * @format int32
   */
  storageSpace?: number;
  /** 固定空间目录id  根目录是常规空间  其他节点是固定空间文件 */
  storageSpaceId?: string;
  /** 文件的后缀 */
  suffix?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/** WorkstationFileSearchVO */
export interface WorkstationFileSearchVO {
  /**
   * 文件类别 程序 1 文件 2
   * @format int32
   */
  fileType?: number;
  /** 关键词 */
  keywords?: string;
  /** 工位id */
  workstationId?: string;
}

/** WorkstationFileVO */
export interface WorkstationFileVO {
  /** 要上传的工位文件集合 */
  workstationDirectoryFileVOList?: WorkstationDirectoryFileVO[];
  /** 工位ids */
  workstationIds?: string[];
}

/** WorkstationFromDocumentsVO */
export interface WorkstationFromDocumentsVO {
  /**
   * 加工程序 1 工艺文件 2
   * @format int32
   */
  fileType?: number;
  /** 文件信息 */
  list?: UploadFileOssVO[];
}

/** WorkstationTdVO */
export interface WorkstationTdVO {
  /** FTP目录id */
  directorTransferId?: string;
  /**
   * 1 关联FTP目录 2 创建同名FTP目录
   * @format int32
   */
  type?: number;
  /** 工位组id */
  workstationGroupId?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位名称 */
  workstationName?: string;
}

/**
 * DncArchiveDirectoryFileVo对象
 * 归档目录文件
 */
export interface DncArchiveDirectoryFileVo {
  /** 归档目录id */
  archiveDirectoryId?: string;
  contentLength?: string;
  /**
   * 文件md5值
   * @minLength 0
   * @maxLength 100
   */
  contentMd5?: string;
  /**
   * 文件类型
   * @minLength 0
   * @maxLength 100
   */
  contentType?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人id */
  createUser?: string;
  /** 创建人 */
  createUserName?: string;
  /**
   * 文件名称
   * @minLength 0
   * @maxLength 100
   */
  filename?: string;
  id?: string;
  /**
   * 是否为当前版本,1是0否
   * @format int32
   */
  isCurrent?: number;
  /** 文件链接 */
  link?: string;
  /**
   * 文件的objectKey
   * @minLength 0
   * @maxLength 100
   */
  objectKey?: string;
  /**
   * 原始文件名称
   * @minLength 0
   * @maxLength 100
   */
  originalFilename?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /** @format int32 */
  status?: number;
  /**
   * 文件后缀
   * @minLength 0
   * @maxLength 50
   */
  suffix?: string;
  /**
   * @minLength 0
   * @maxLength 10
   */
  tenantId?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人id */
  updateUser?: string;
  /** 更新人 */
  updateUserName?: string;
  /** 版本 */
  version?: string;
  /** 版本 */
  versionDesc?: string;
  /** 工位文件id */
  workstationFileId?: string;
  /** 工位id */
  workstationId?: string;
  /** 工位id */
  workstationName?: string;
}

/**
 * DncArchiveDirectoryVo对象
 * dnc 归档目录
 */
export interface DncArchiveDirectoryVo {
  /**
   * 全路径(包含自身)
   * @minLength 0
   * @maxLength 500
   */
  allPath?: string;
  /** 职权域id */
  deptId?: string;
  /** 主键 */
  id?: string;
  /**
   * 工艺目录名称
   * @minLength 0
   * @maxLength 45
   */
  name?: string;
  /** 父主键 */
  parentId?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /**
   * 租户ID
   * @minLength 0
   * @maxLength 12
   */
  tenantId?: string;
}

/** DncArtBagLogPageVO对象 */
export interface DncArtBagLogPageVO {
  /** 工艺包id */
  bagId?: string;
  /**
   * 文件归属
   * @format int32
   */
  fileBelong?: number;
  /** 文件类型 */
  fileClass?: string;
  /** 文件名称 */
  fileName?: string;
  /**
   * 文件属性
   * @format int32
   */
  fileType?: number;
  /**
   * 操作结束时间
   * @format date-time
   */
  operationEndTime?: string;
  /**
   * 操作开始时间
   * @format date-time
   */
  operationStartTime?: string;
  /**
   * 操作类型 添加1 覆盖2 删除3 归档4
   * @format int32
   */
  operationType?: number;
  /**
   * 存储空间
   * @format int32
   */
  storage?: number;
}

/**
 * DncArtBagLogVo对象
 * blade_dnc_art_bag_log
 */
export interface DncArtBagLogVo {
  /** 归档原因 */
  archiveReason?: string;
  /** 工艺包id */
  artBagId?: string;
  /** 工位报文件id */
  artFileId?: string;
  /** 文件大小 */
  contentLength?: string;
  /** 文件归属 工厂1  工位2 */
  fileBelong?: string;
  /** 文件id */
  fileId?: string;
  /** 文件名称 */
  fileName?: string;
  /** 文件属性 程序1 文档2 */
  fileType?: string;
  id?: string;
  /** 文件链接 */
  link?: string;
  /** 文件存储的key */
  objectKey?: string;
  /**
   * 操作时间
   * @format date-time
   */
  operationTime?: string;
  /** 操作类型 添加1 覆盖2 删除3 归档4 */
  operationType?: string;
  /** 操作人员id */
  operatorId?: string;
  /** 操作人员姓名 */
  operatorName?: string;
  /** 备注 */
  remark?: string;
  /** 源类型：本地文件 0、我的文档 1、工位文件 2、工厂文件 3、机床回传4 、工艺包 5   产品 6 */
  sourceType?: string;
  /** @format int32 */
  status?: number;
  /** 存储空间 固定空间1 常规空间2 */
  storage?: string;
  /** 文件后缀 */
  suffix?: string;
  /**
   * @minLength 0
   * @maxLength 10
   */
  tenantId?: string;
  /** 版本 */
  version?: string;
  /** 工位目录 */
  workstationDirectory?: string;
}

/** DncArtBagVoSave对象 */
export interface DncArtBagVoSave {
  /** 工艺路径id */
  catalogueId?: string;
  /** 工艺包编号 */
  code?: string;
  /** 主键id */
  id?: string;
  /** 工艺包名称 */
  name?: string;
  /** 备注 */
  remark?: string;
}

/**
 * DncArtBagVo对象
 * blade_dnc_art_bag
 */
export interface DncArtBagVo {
  /** 工艺目录id */
  catalogueId?: string;
  /** 工艺包编码 */
  code?: string;
  /** 主键id */
  id?: string;
  /** 工艺包名称 */
  name?: string;
  /** 备注 */
  remark?: string;
  /** 源路径 */
  sourcePath?: string;
  /** @format int32 */
  status?: number;
  tenantId?: string;
}

/**
 * DncArtFileVo对象
 * 工艺包文件
 */
export interface DncArtFileVo {
  /** 工艺包id */
  artBagId?: string;
  contentLength?: string;
  /**
   * 文件md5值
   * @minLength 0
   * @maxLength 100
   */
  contentMd5?: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  contentType?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人id */
  createUser?: string;
  /** 创建人 */
  createUserName?: string;
  /**
   * 文件归属：1 工位  2 工厂
   * @format int32
   */
  documentOwnership?: number;
  /** 文件归属：1 工位  2 工厂 */
  documentOwnershipDesc?: string;
  /** 文件id */
  fileId?: string;
  /**
   * 文件类别(1:程序,2 文档)
   * @format int32
   */
  fileType?: number;
  /** 文件类别(1:程序,2 文档) */
  fileTypeDesc?: string;
  /**
   * 文件名称
   * @minLength 0
   * @maxLength 100
   */
  filename?: string;
  id?: string;
  /** 文件链接 */
  link?: string;
  name?: string;
  /**
   * 文件的objectKey
   * @minLength 0
   * @maxLength 100
   */
  objectKey?: string;
  /**
   * 原始文件名称
   * @minLength 0
   * @maxLength 100
   */
  originalFilename?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /** 源路径 */
  sourcePath?: string;
  /**
   * 文件来源 1 我的文档  2 工位文件 3 本地上传 4 归档文件
   * @format int32
   */
  sourceType?: number;
  /** 文件来源 1 我的文档  2 工位文件 3 本地上传 4 归档文件 */
  sourceTypeDesc?: string;
  /** @format int32 */
  status?: number;
  /**
   * 存储空间 固定空间1 常规空间2
   * @format int32
   */
  storageSpace?: number;
  /**
   * @minLength 0
   * @maxLength 50
   */
  suffix?: string;
  /**
   * @minLength 0
   * @maxLength 10
   */
  tenantId?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人id */
  updateUser?: string;
  /** 更新人 */
  updateUserName?: string;
  /**
   * 版本
   * @format int32
   */
  version?: number;
  /** 版本 */
  versionDesc?: string;
}

/**
 * DncArtProductVo对象
 * 工艺包关联产品
 */
export interface DncArtProductVo {
  /** 工艺包id */
  artBagId?: string;
  id?: string;
  /**
   * 产品编码
   * @minLength 0
   * @maxLength 50
   */
  productCode?: string;
  /** 产品id */
  productId?: string;
  /**
   * 产品名称
   * @minLength 0
   * @maxLength 50
   */
  productName?: string;
  /** 产品类型id */
  productTypeId?: string;
  /**
   * 产品类型名称
   * @minLength 0
   * @maxLength 50
   */
  productTypeName?: string;
  /**
   * 备注
   * @minLength 0
   * @maxLength 255
   */
  remark?: string;
  /** @format int32 */
  status?: number;
  /**
   * @minLength 0
   * @maxLength 10
   */
  tenantId?: string;
}

/**
 * DncFactoryFileVo对象
 * blade_dnc_factory_file
 */
export interface DncFactoryFileVo {
  contentLength?: string;
  /**
   * 文件md5值
   * @minLength 0
   * @maxLength 100
   */
  contentMd5?: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  contentType?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人id */
  createUser?: string;
  /** 创建人 */
  createUserName?: string;
  /**
   * 文件名称
   * @minLength 0
   * @maxLength 100
   */
  filename?: string;
  id?: string;
  /**
   * 是否为当前版本,1是0否
   * @format int32
   */
  isCurrent?: number;
  /**
   * 最后修改时间
   * @format date-time
   */
  lastModified?: string;
  /**
   * 文件地址
   * @minLength 0
   * @maxLength 255
   */
  link?: string;
  /**
   * 文件的objectKey
   * @minLength 0
   * @maxLength 100
   */
  objectKey?: string;
  /**
   * 原始文件名称
   * @minLength 0
   * @maxLength 100
   */
  originalFilename?: string;
  /**
   * 业务状态
   * @format int32
   */
  status?: number;
  /**
   * @minLength 0
   * @maxLength 50
   */
  suffix?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 更新人id */
  updateUser?: string;
  /** 更新人 */
  updateUserName?: string;
  /** 文件版本 */
  version?: string;
  /** 文件版本 */
  versionDesc?: string;
}

/**
 * DncFixSpaceVO对象
 * 固定空间目录
 */
export interface DncFixSpaceVO {
  /** 全路径(包含自身) */
  allPath?: string;
  /** 是否有子节点 */
  hasChildren?: boolean;
  /** 主键 */
  id?: string;
  /** 工艺目录名称 */
  name?: string;
  /** 父主键 */
  parentId?: string;
  /** FTP目录id */
  tdId?: string;
}

/**
 * DncProcessCatalogueVo对象
 * 工艺目录表
 */
export interface DncProcessCatalogueVo {
  /** 全路径(包含自身) */
  allPath?: string;
  /** 职权域id */
  deptId?: string;
  /** 主键 */
  id?: string;
  /** 工艺目录名称 */
  name?: string;
  /** 父主键 */
  parentId?: string;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /** 租户ID */
  tenantId?: string;
}

/** IPage«DncArchiveDirectoryFileVo对象» */
export interface IPageDncArchiveDirectoryFileVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: DncArchiveDirectoryFileVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«DncArtBagLogVo对象» */
export interface IPageDncArtBagLogVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: DncArtBagLogVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«DncArtBagVo对象» */
export interface IPageDncArtBagVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: DncArtBagVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«DncFactoryFileVo对象» */
export interface IPageDncFactoryFileVo {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: DncFactoryFileVo[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«DncOperationLogVO» */
export interface IPageDncOperationLogVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: DncOperationLogVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«FileVO» */
export interface IPageFileVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: FileVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«TransferDirectoryFilePageVO» */
export interface IPageTransferDirectoryFilePageVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  records?: TransferDirectoryFilePageVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/**
 * R«BatchArchiveArtBagFilesVO»
 * 返回信息
 */
export interface RBatchArchiveArtBagFilesVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BatchArchiveArtBagFilesVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«BladeFile»
 * 返回信息
 */
export interface RBladeFile {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: BladeFile;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«CreateFileVO»
 * 返回信息
 */
export interface RCreateFileVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: CreateFileVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DncArchiveDirectoryFileVo对象»
 * 返回信息
 */
export interface RDncArchiveDirectoryFileVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncArchiveDirectoryFileVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DncArchiveDirectoryVo对象»
 * 返回信息
 */
export interface RDncArchiveDirectoryVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncArchiveDirectoryVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DncArchiveFileAddVO»
 * 返回信息
 */
export interface RDncArchiveFileAddVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncArchiveFileAddVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DncArtBagVo对象»
 * 返回信息
 */
export interface RDncArtBagVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncArtBagVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DncArtFileVo对象»
 * 返回信息
 */
export interface RDncArtFileVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncArtFileVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DncArtProductVo对象»
 * 返回信息
 */
export interface RDncArtProductVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncArtProductVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DncDirectorySettingsVO»
 * 返回信息
 */
export interface RDncDirectorySettingsVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncDirectorySettingsVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DncFactoryFileVo对象»
 * 返回信息
 */
export interface RDncFactoryFileVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncFactoryFileVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DncFixSpaceVO对象»
 * 返回信息
 */
export interface RDncFixSpaceVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncFixSpaceVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«DncProcessCatalogueVo对象»
 * 返回信息
 */
export interface RDncProcessCatalogueVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncProcessCatalogueVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«EntityInfoVO»
 * 返回信息
 */
export interface REntityInfoVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: EntityInfoVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«FolderListVO»
 * 返回信息
 */
export interface RFolderListVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FolderListVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«FtpDirectoryVO»
 * 返回信息
 */
export interface RFtpDirectoryVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FtpDirectoryVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«DncArchiveDirectoryFileVo对象»»
 * 返回信息
 */
export interface RIPageDncArchiveDirectoryFileVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageDncArchiveDirectoryFileVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«DncArtBagLogVo对象»»
 * 返回信息
 */
export interface RIPageDncArtBagLogVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageDncArtBagLogVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«DncArtBagVo对象»»
 * 返回信息
 */
export interface RIPageDncArtBagVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageDncArtBagVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«DncFactoryFileVo对象»»
 * 返回信息
 */
export interface RIPageDncFactoryFileVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageDncFactoryFileVo;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«DncOperationLogVO»»
 * 返回信息
 */
export interface RIPageDncOperationLogVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageDncOperationLogVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«IPage«FileVO»»
 * 返回信息
 */
export interface RIPageFileVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: IPageFileVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DncArchiveDirectoryVo对象»»
 * 返回信息
 */
export interface RListDncArchiveDirectoryVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncArchiveDirectoryVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DncArtFileAddVO»»
 * 返回信息
 */
export interface RListDncArtFileAddVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncArtFileAddVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DncArtFileVo对象»»
 * 返回信息
 */
export interface RListDncArtFileVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncArtFileVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DncArtProductVo对象»»
 * 返回信息
 */
export interface RListDncArtProductVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncArtProductVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DncCatalogueAndArtBagTreeVO»»
 * 返回信息
 */
export interface RListDncCatalogueAndArtBagTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncCatalogueAndArtBagTreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DncCatalogueAndArtBagVO»»
 * 返回信息
 */
export interface RListDncCatalogueAndArtBagVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncCatalogueAndArtBagVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DncFixSpaceTreeVO»»
 * 返回信息
 */
export interface RListDncFixSpaceTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncFixSpaceTreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DncFixSpaceVO对象»»
 * 返回信息
 */
export interface RListDncFixSpaceVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncFixSpaceVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«DncProcessCatalogueVo对象»»
 * 返回信息
 */
export interface RListDncProcessCatalogueVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: DncProcessCatalogueVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FileHistoryVO»»
 * 返回信息
 */
export interface RListFileHistoryVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FileHistoryVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FolderTreeVO»»
 * 返回信息
 */
export interface RListFolderTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FolderTreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FolderVO»»
 * 返回信息
 */
export interface RListFolderVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FolderVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FtpDirectoryRelationWorkstationVO»»
 * 返回信息
 */
export interface RListFtpDirectoryRelationWorkstationVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FtpDirectoryRelationWorkstationVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«FtpTransferDirectoryVO»»
 * 返回信息
 */
export interface RListFtpTransferDirectoryVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: FtpTransferDirectoryVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«HmiDeviceVO»»
 * 返回信息
 */
export interface RListHmiDeviceVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: HmiDeviceVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«ProcessCatalogueTreeVO»»
 * 返回信息
 */
export interface RListProcessCatalogueTreeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ProcessCatalogueTreeVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«SerialInfoDTO»»
 * 返回信息
 */
export interface RListSerialInfoDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: SerialInfoDTO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«TransferDirectoryFileVo»»
 * 返回信息
 */
export interface RListTransferDirectoryFileVo {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: TransferDirectoryFileVo[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«UploadFileOssVO»»
 * 返回信息
 */
export interface RListUploadFileOssVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: UploadFileOssVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«WorkstationDirectoryFileVO»»
 * 返回信息
 */
export interface RListWorkstationDirectoryFileVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationDirectoryFileVO[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«List«string»»
 * 返回信息
 */
export interface RListString {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: string[];
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«MachineToolBatchWriteFileVO»
 * 返回信息
 */
export interface RMachineToolBatchWriteFileVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: MachineToolBatchWriteFileVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«NewFolderVO»
 * 返回信息
 */
export interface RNewFolderVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: NewFolderVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«ReceiveScheduleVO»
 * 返回信息
 */
export interface RReceiveScheduleVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: ReceiveScheduleVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«SendScheduleVO»
 * 返回信息
 */
export interface RSendScheduleVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: SendScheduleVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«SpaceRootNodeVO»
 * 返回信息
 */
export interface RSpaceRootNodeVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: SpaceRootNodeVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«SuffixListVO»
 * 返回信息
 */
export interface RSuffixListVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: SuffixListVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«SwitchDTO»
 * 返回信息
 */
export interface RSwitchDTO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: SwitchDTO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«Void»
 * 返回信息
 */
export interface RVoid {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«WorkstationTdVO»
 * 返回信息
 */
export interface RWorkstationTdVO {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: WorkstationTdVO;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«boolean»
 * 返回信息
 */
export interface RBoolean {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: boolean;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«int»
 * 返回信息
 */
export interface RInt {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /**
   * 承载数据
   * @format int32
   */
  data?: number;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

/**
 * R«string»
 * 返回信息
 */
export interface RString {
  /**
   * 状态码
   * @format int32
   */
  code: number;
  /** 承载数据 */
  data?: string;
  /** 返回消息 */
  msg: string;
  /** 是否成功 */
  success: boolean;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from 'axios';
import axios from '/@/utils/http';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios;
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams = ((typeof secure === 'boolean' ? secure : this.secure) && this.securityWorker && (await this.securityWorker(this.securityData))) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title BladeX 接口文档系统
 * @version 2.8.2.RELEASE
 * @license Powered By BladeX (https://bladex.vip)
 * @termsOfService https://bladex.vip
 * @baseUrl //frp.linkvision.cloud
 * @contact smallchill <smallchill@163.com> (https://gitee.com/smallc)
 *
 * BladeX 接口文档系统
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  bladeDnc = {
    /**
     * @description 传入verifyArchiveFiles
     *
     * @tags 归档文件管理
     * @name DncArchiveDirectoryFileCheckFile
     * @summary 验证归档文件是否已经重复
     * @request POST:/blade-dnc/dnc-archive-directory-file/checkFile
     * @secure
     */
    dncArchiveDirectoryFileCheckFile: (verifyArchiveFile: VerifyArchiveFileVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/dnc-archive-directory-file/checkFile`,
        method: 'POST',
        body: verifyArchiveFile,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dncArchiveDirectoryFile
     *
     * @tags 归档文件管理
     * @name DncArchiveDirectoryFileDetail
     * @summary 归档目录文件详情
     * @request GET:/blade-dnc/dnc-archive-directory-file/get/{id}
     * @secure
     */
    dncArchiveDirectoryFileDetail: (id: string, params: RequestParams = {}) =>
      this.request<RDncArchiveDirectoryFileVo, void>({
        path: `/blade-dnc/dnc-archive-directory-file/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dncArchiveDirectoryFileVO
     *
     * @tags 归档文件管理
     * @name DncArchiveDirectoryFileInsert
     * @summary 归档目录文件新增
     * @request POST:/blade-dnc/dnc-archive-directory-file/insert
     * @secure
     */
    dncArchiveDirectoryFileInsert: (dncArchiveFileAddVO: DncArchiveFileAddVO, params: RequestParams = {}) =>
      this.request<RDncArchiveFileAddVO, void>({
        path: `/blade-dnc/dnc-archive-directory-file/insert`,
        method: 'POST',
        body: dncArchiveFileAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入map
     *
     * @tags 归档文件管理
     * @name DncArchiveDirectoryFilePage
     * @summary 归档目录文件分页
     * @request POST:/blade-dnc/dnc-archive-directory-file/page
     * @secure
     */
    dncArchiveDirectoryFilePage: (
      searchVO: ArchiveDirectoryFileSearchVO,
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 排序字段 json传递 */
        orderField?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageDncArchiveDirectoryFileVo, void>({
        path: `/blade-dnc/dnc-archive-directory-file/page`,
        method: 'POST',
        query: query,
        body: searchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 归档文件管理
     * @name DncArchiveDirectoryFileRemove
     * @summary 归档目录文件删除
     * @request DELETE:/blade-dnc/dnc-archive-directory-file/remove
     * @secure
     */
    dncArchiveDirectoryFileRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-dnc/dnc-archive-directory-file/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dncArchiveDirectory
     *
     * @tags 归档目录管理
     * @name DncArchiveDirectoryDetail
     * @summary dnc 归档目录详情
     * @request GET:/blade-dnc/dnc-archive-directory/get/{id}
     * @secure
     */
    dncArchiveDirectoryDetail: (id: string, params: RequestParams = {}) =>
      this.request<RDncArchiveDirectoryVo, void>({
        path: `/blade-dnc/dnc-archive-directory/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dncArchiveDirectoryAddVO
     *
     * @tags 归档目录管理
     * @name DncArchiveDirectoryInsert
     * @summary dnc 归档目录新增
     * @request POST:/blade-dnc/dnc-archive-directory/insert
     * @secure
     */
    dncArchiveDirectoryInsert: (dncArchiveDirectoryAddVO: DncArchiveDirectoryAddVO, params: RequestParams = {}) =>
      this.request<RDncArchiveDirectoryVo, void>({
        path: `/blade-dnc/dnc-archive-directory/insert`,
        method: 'POST',
        body: dncArchiveDirectoryAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入节点id
     *
     * @tags 归档目录管理
     * @name DncArchiveDirectoryList
     * @summary dnc 归档目录（懒加载）列表
     * @request GET:/blade-dnc/dnc-archive-directory/list
     * @secure
     */
    dncArchiveDirectoryList: (
      query?: {
        /** parentId */
        parentId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDncArchiveDirectoryVo, void>({
        path: `/blade-dnc/dnc-archive-directory/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 归档目录管理
     * @name DncArchiveDirectoryRemove
     * @summary dnc 归档目录删除
     * @request DELETE:/blade-dnc/dnc-archive-directory/remove
     * @secure
     */
    dncArchiveDirectoryRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-dnc/dnc-archive-directory/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入directoryUpdateVO
     *
     * @tags 归档目录管理
     * @name DncArchiveDirectoryUpdate
     * @summary dnc 归档目录名称修改
     * @request PUT:/blade-dnc/dnc-archive-directory/update
     * @secure
     */
    dncArchiveDirectoryUpdate: (directoryUpdateVO: DncArchiveDirectoryUpdateVO, params: RequestParams = {}) =>
      this.request<RDncArchiveDirectoryVo, void>({
        path: `/blade-dnc/dnc-archive-directory/update`,
        method: 'PUT',
        body: directoryUpdateVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺包日志管理
     * @name DncArtBagLogExport
     * @summary 工艺包日志导出
     * @request POST:/blade-dnc/dnc-art-bag-log/export
     * @secure
     */
    dncArtBagLogExport: (dncArtBagLogPageVO: DncArtBagLogPageVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-dnc/dnc-art-bag-log/export`,
        method: 'POST',
        body: dncArtBagLogPageVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺包日志管理
     * @name DncArtBagLogListFileClass
     * @summary 文件类型
     * @request GET:/blade-dnc/dnc-art-bag-log/list-file-class
     * @secure
     */
    dncArtBagLogListFileClass: (params: RequestParams = {}) =>
      this.request<RListString, void>({
        path: `/blade-dnc/dnc-art-bag-log/list-file-class`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺包日志管理
     * @name DncArtBagLogPage
     * @summary 工艺包日志分页
     * @request POST:/blade-dnc/dnc-art-bag-log/page
     * @secure
     */
    dncArtBagLogPage: (
      dncArtBagLogPageVO: DncArtBagLogPageVO,
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageDncArtBagLogVo, void>({
        path: `/blade-dnc/dnc-art-bag-log/page`,
        method: 'POST',
        query: query,
        body: dncArtBagLogPageVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺包管理
     * @name DncArtBagCurAndSubPage
     * @summary 当前目录及子集-所有工艺包分页
     * @request GET:/blade-dnc/dnc-art-bag/cur-sub-page
     * @secure
     */
    dncArtBagCurAndSubPage: (
      query: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /** catalogueId */
        catalogueId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageDncArtBagVo, void>({
        path: `/blade-dnc/dnc-art-bag/cur-sub-page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dncArtBag
     *
     * @tags 工艺包管理
     * @name DncArtBagDetail
     * @summary 工艺包详情
     * @request GET:/blade-dnc/dnc-art-bag/get/{id}
     * @secure
     */
    dncArtBagDetail: (id: string, params: RequestParams = {}) =>
      this.request<RDncArtBagVo, void>({
        path: `/blade-dnc/dnc-art-bag/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺包管理
     * @name DncArtBagInsert
     * @summary 工艺包新增
     * @request POST:/blade-dnc/dnc-art-bag/insert
     * @secure
     */
    dncArtBagInsert: (dncArtBagSaveVO: DncArtBagVoSave, params: RequestParams = {}) =>
      this.request<RDncArtBagVo, void>({
        path: `/blade-dnc/dnc-art-bag/insert`,
        method: 'POST',
        body: dncArtBagSaveVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺包管理
     * @name DncArtBagListBagProcess
     * @summary 工艺包 程序文档搜索
     * @request POST:/blade-dnc/dnc-art-bag/list-bag-process
     * @secure
     */
    dncArtBagListBagProcess: (vo: BagProcessQueryVO, params: RequestParams = {}) =>
      this.request<RIPageDncArtBagVo, void>({
        path: `/blade-dnc/dnc-art-bag/list-bag-process`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺包管理
     * @name DncArtBagPage
     * @summary 工艺包分页
     * @request GET:/blade-dnc/dnc-art-bag/page
     * @secure
     */
    dncArtBagPage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /** catalogueId */
        catalogueId?: string;
        /** keyWord */
        keyWord?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageDncArtBagVo, void>({
        path: `/blade-dnc/dnc-art-bag/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 工艺包管理
     * @name DncArtBagRemove
     * @summary 工艺包删除
     * @request DELETE:/blade-dnc/dnc-art-bag/remove
     * @secure
     */
    dncArtBagRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-dnc/dnc-art-bag/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺包管理
     * @name DncArtBagUpdateName
     * @summary 工艺包修改
     * @request PUT:/blade-dnc/dnc-art-bag/update
     * @secure
     */
    dncArtBagUpdateName: (
      query?: {
        /** id */
        id?: string;
        /** name */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RDncArtBagVo, void>({
        path: `/blade-dnc/dnc-art-bag/update`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入bagFilesVO
     *
     * @tags 工艺包文件管理
     * @name DncArtFileBatchInsert
     * @summary 多个工位文件归档多个工艺包文件
     * @request POST:/blade-dnc/dnc-art-file/batch-insert
     * @secure
     */
    dncArtFileBatchInsert: (bagFilesVO: BatchArchiveArtBagFilesVO, params: RequestParams = {}) =>
      this.request<RBatchArchiveArtBagFilesVO, void>({
        path: `/blade-dnc/dnc-art-file/batch-insert`,
        method: 'POST',
        body: bagFilesVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入DuplicateValidationFileVO
     *
     * @tags 工艺包文件管理
     * @name DncArtFileDuplicateValidationArtFile
     * @summary 验证工艺包文件是否存在
     * @request POST:/blade-dnc/dnc-art-file/duplicate-validation-file
     * @secure
     */
    dncArtFileDuplicateValidationArtFile: (validationFileVO: DuplicateValidationFileVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/dnc-art-file/duplicate-validation-file`,
        method: 'POST',
        body: validationFileVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dncArtFile
     *
     * @tags 工艺包文件管理
     * @name DncArtFileDetail
     * @summary 工艺包文件详情
     * @request GET:/blade-dnc/dnc-art-file/get/{id}
     * @secure
     */
    dncArtFileDetail: (id: string, params: RequestParams = {}) =>
      this.request<RDncArtFileVo, void>({
        path: `/blade-dnc/dnc-art-file/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dncArtFileAddVO
     *
     * @tags 工艺包文件管理
     * @name DncArtFileInsert
     * @summary 工艺包文件新增
     * @request POST:/blade-dnc/dnc-art-file/insert
     * @secure
     */
    dncArtFileInsert: (dncArtFileAdds: DncArtFileAddVO[], params: RequestParams = {}) =>
      this.request<RListDncArtFileAddVO, void>({
        path: `/blade-dnc/dnc-art-file/insert`,
        method: 'POST',
        body: dncArtFileAdds,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入工艺包id
     *
     * @tags 工艺包文件管理
     * @name DncArtFileList
     * @summary 工艺包文件列表
     * @request GET:/blade-dnc/dnc-art-file/list
     * @secure
     */
    dncArtFileList: (
      query: {
        /** artBagId */
        artBagId: string;
        /** orderField */
        orderField?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDncArtFileVo, void>({
        path: `/blade-dnc/dnc-art-file/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 工艺包文件管理
     * @name DncArtFileRemove
     * @summary 工艺包文件删除
     * @request DELETE:/blade-dnc/dnc-art-file/remove
     * @secure
     */
    dncArtFileRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-dnc/dnc-art-file/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入syncArtCatalogVO
     *
     * @tags 工艺包文件管理
     * @name DncArtFileSyncArtCatalog
     * @summary 外部系统同步工艺包文件
     * @request POST:/blade-dnc/dnc-art-file/sync
     * @secure
     */
    dncArtFileSyncArtCatalog: (syncArtCatalogVO: SyncArtCatalogVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/dnc-art-file/sync`,
        method: 'POST',
        body: syncArtCatalogVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dncArtProduct
     *
     * @tags 工艺包关联产品
     * @name DncArtProductDetail
     * @summary 工艺包关联产品详情
     * @request GET:/blade-dnc/dnc-art-product/get/{id}
     * @secure
     */
    dncArtProductDetail: (id: string, params: RequestParams = {}) =>
      this.request<RDncArtProductVo, void>({
        path: `/blade-dnc/dnc-art-product/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dncArtProductVO
     *
     * @tags 工艺包关联产品
     * @name DncArtProductInsert
     * @summary 工艺包关联产品新增
     * @request POST:/blade-dnc/dnc-art-product/insert
     * @secure
     */
    dncArtProductInsert: (dncArtProductVOList: DncArtProductVo[], params: RequestParams = {}) =>
      this.request<RListDncArtProductVo, void>({
        path: `/blade-dnc/dnc-art-product/insert`,
        method: 'POST',
        body: dncArtProductVOList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入工艺包id
     *
     * @tags 工艺包关联产品
     * @name DncArtProductList
     * @summary 工艺包关联产品列表
     * @request GET:/blade-dnc/dnc-art-product/list
     * @secure
     */
    dncArtProductList: (
      query: {
        /** artBagId */
        artBagId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDncArtProductVo, void>({
        path: `/blade-dnc/dnc-art-product/list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 工艺包关联产品
     * @name DncArtProductRemove
     * @summary 工艺包关联产品删除
     * @request DELETE:/blade-dnc/dnc-art-product/remove
     * @secure
     */
    dncArtProductRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-dnc/dnc-art-product/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 文件传输文件目录名称设置
     * @name DncDirectorySettingsSwitchState
     * @summary 文件设置：开启、关闭
     * @request POST:/blade-dnc/dnc-directory-settings/change
     * @secure
     */
    dncDirectorySettingsSwitchState: (switchDTO: SwitchDTO, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/blade-dnc/dnc-directory-settings/change`,
        method: 'POST',
        body: switchDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description false 关闭 true 启动
     *
     * @tags 文件传输文件目录名称设置
     * @name DncDirectorySettingsGetFmsOnline
     * @summary 获取文件设置目录状态
     * @request GET:/blade-dnc/dnc-directory-settings/file-running-status
     * @secure
     */
    dncDirectorySettingsGetFmsOnline: (params: RequestParams = {}) =>
      this.request<RSwitchDTO, void>({
        path: `/blade-dnc/dnc-directory-settings/file-running-status`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 文件传输文件目录名称设置
     * @name DncDirectorySettingsGetFileSettingDetail
     * @summary 查看文件目录设置
     * @request GET:/blade-dnc/dnc-directory-settings/setting-detail
     * @secure
     */
    dncDirectorySettingsGetFileSettingDetail: (params: RequestParams = {}) =>
      this.request<RDncDirectorySettingsVO, void>({
        path: `/blade-dnc/dnc-directory-settings/setting-detail`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入DncDirectorySettingsEditVO对象
     *
     * @tags 文件传输文件目录名称设置
     * @name DncDirectorySettingsUpdateFileSettingData
     * @summary 更新文件目录设置
     * @request POST:/blade-dnc/dnc-directory-settings/update-setting
     * @secure
     */
    dncDirectorySettingsUpdateFileSettingData: (settingsEditVO: DncDirectorySettingsEditVO, params: RequestParams = {}) =>
      this.request<RDncDirectorySettingsVO, void>({
        path: `/blade-dnc/dnc-directory-settings/update-setting`,
        method: 'POST',
        body: settingsEditVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dncFactoryFile
     *
     * @tags 工厂文件管理
     * @name DncFactoryFileDetail
     * @summary 工厂文件详情
     * @request GET:/blade-dnc/dnc-factory-file/get/{id}
     * @secure
     */
    dncFactoryFileDetail: (id: string, params: RequestParams = {}) =>
      this.request<RDncFactoryFileVo, void>({
        path: `/blade-dnc/dnc-factory-file/get/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dncFactoryFileVO
     *
     * @tags 工厂文件管理
     * @name DncFactoryFileInsert
     * @summary blade_dnc_factory_file新增
     * @request POST:/blade-dnc/dnc-factory-file/insert
     * @secure
     */
    dncFactoryFileInsert: (dncFactoryFileVO: DncFactoryFileVo, params: RequestParams = {}) =>
      this.request<RDncFactoryFileVo, void>({
        path: `/blade-dnc/dnc-factory-file/insert`,
        method: 'POST',
        body: dncFactoryFileVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 关键词查询：文件名称、文件后缀
     *
     * @tags 工厂文件管理
     * @name DncFactoryFilePage
     * @summary 工厂文件分页
     * @request GET:/blade-dnc/dnc-factory-file/page
     * @secure
     */
    dncFactoryFilePage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 排序字段 json传递 */
        orderField?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /** keywords */
        keywords?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageDncFactoryFileVo, void>({
        path: `/blade-dnc/dnc-factory-file/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 工厂文件管理
     * @name DncFactoryFileRemove
     * @summary 工厂文件删除
     * @request DELETE:/blade-dnc/dnc-factory-file/remove
     * @secure
     */
    dncFactoryFileRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-dnc/dnc-factory-file/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 切换工厂当前文件版本
     *
     * @tags 工厂文件管理
     * @name DncFactoryFileSwitchFile
     * @summary 切换工厂文件版本
     * @request POST:/blade-dnc/dnc-factory-file/switch-file
     * @secure
     */
    dncFactoryFileSwitchFile: (fileVersionSwitchVO: FileVersionSwitchVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/dnc-factory-file/switch-file`,
        method: 'POST',
        body: fileVersionSwitchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 传入dncFactoryFileVO
     *
     * @tags 工厂文件管理
     * @name DncFactoryFileUpdate
     * @summary 工厂文件修改
     * @request PUT:/blade-dnc/dnc-factory-file/update
     * @secure
     */
    dncFactoryFileUpdate: (dncFactoryFileVO: DncFactoryFileVo, params: RequestParams = {}) =>
      this.request<RDncFactoryFileVo, void>({
        path: `/blade-dnc/dnc-factory-file/update`,
        method: 'PUT',
        body: dncFactoryFileVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 验证文件
     *
     * @tags 工厂文件管理
     * @name DncFactoryFileVerifyFileName
     * @summary 验证文件是否重复
     * @request POST:/blade-dnc/dnc-factory-file/verifyFile
     * @secure
     */
    dncFactoryFileVerifyFileName: (factoryFileVO: FactoryFileVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/dnc-factory-file/verifyFile`,
        method: 'POST',
        body: factoryFileVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 文件id
     *
     * @tags 工厂文件管理
     * @name DncFactoryFileGetFileHistory
     * @summary 工厂文件版本历史列表
     * @request GET:/blade-dnc/dnc-factory-file/{fileId}/fileHistoryList
     * @secure
     */
    dncFactoryFileGetFileHistory: (fileId?: string, params: RequestParams = {}) =>
      this.request<RListFileHistoryVO, void>({
        path: `/blade-dnc/dnc-factory-file/${fileId}/fileHistoryList`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 新增目录
     *
     * @tags 工位目录关联固定空间表管理
     * @name DncFixedSpaceAddFixSpace
     * @summary 新增固定空间目录
     * @request POST:/blade-dnc/dnc-fixed-space/add-fix-space
     * @secure
     */
    dncFixedSpaceAddFixSpace: (dncFixedSpaceAdVO: DncFixedSpaceAdVO, params: RequestParams = {}) =>
      this.request<RDncFixSpaceVO, void>({
        path: `/blade-dnc/dnc-fixed-space/add-fix-space`,
        method: 'POST',
        body: dncFixedSpaceAdVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 删除目录
     *
     * @tags 工位目录关联固定空间表管理
     * @name DncFixedSpaceDelFixSpace
     * @summary 删除固定空间目录
     * @request GET:/blade-dnc/dnc-fixed-space/del-fix-space
     * @secure
     */
    dncFixedSpaceDelFixSpace: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/dnc-fixed-space/del-fix-space`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 直接加载树
     *
     * @tags 工位目录关联固定空间表管理
     * @name DncFixedSpaceFixSpaceDirectLoadingTree
     * @summary 工位获取固定空间树
     * @request GET:/blade-dnc/dnc-fixed-space/direct-loading-space-tree
     * @secure
     */
    dncFixedSpaceFixSpaceDirectLoadingTree: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDncFixSpaceTreeVO, void>({
        path: `/blade-dnc/dnc-fixed-space/direct-loading-space-tree`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 懒加载树
     *
     * @tags 工位目录关联固定空间表管理
     * @name DncFixedSpaceGetTree
     * @summary 工位获取固定空间树
     * @request GET:/blade-dnc/dnc-fixed-space/tree-fix-space
     * @secure
     */
    dncFixedSpaceGetTree: (
      query: {
        /** nodeId */
        nodeId: string;
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDncFixSpaceVO, void>({
        path: `/blade-dnc/dnc-fixed-space/tree-fix-space`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 根节点
     *
     * @tags 工位目录关联固定空间表管理
     * @name DncFixedSpaceGetTreeRoot
     * @summary 工位获取固定空间树根节点
     * @request GET:/blade-dnc/dnc-fixed-space/tree-root-id
     * @secure
     */
    dncFixedSpaceGetTreeRoot: (
      query: {
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RSpaceRootNodeVO, void>({
        path: `/blade-dnc/dnc-fixed-space/tree-root-id`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 编辑名称
     *
     * @tags 工位目录关联固定空间表管理
     * @name DncFixedSpaceUpdateName
     * @summary 编辑固定空间目录
     * @request POST:/blade-dnc/dnc-fixed-space/update-fix-space
     * @secure
     */
    dncFixedSpaceUpdateName: (dncFixedSpaceUpVO: DncFixedSpaceUpVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/dnc-fixed-space/update-fix-space`,
        method: 'POST',
        body: dncFixedSpaceUpVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 工艺目录->工艺包 树结构
     *
     * @tags 工艺目录
     * @name DncProcessCatalogueArtTree
     * @summary # 工艺目录树结构
     * @request GET:/blade-dnc/dnc-process-catalogue/art-tree
     * @secure
     */
    dncProcessCatalogueArtTree: (params: RequestParams = {}) =>
      this.request<RListDncCatalogueAndArtBagTreeVO, void>({
        path: `/blade-dnc/dnc-process-catalogue/art-tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺目录
     * @name DncProcessCatalogueCateArtBagTree
     * @summary 工艺目录表工艺包程序树
     * @request GET:/blade-dnc/dnc-process-catalogue/cate-art-bag-tree
     * @secure
     */
    dncProcessCatalogueCateArtBagTree: (params: RequestParams = {}) =>
      this.request<RListProcessCatalogueTreeVO, void>({
        path: `/blade-dnc/dnc-process-catalogue/cate-art-bag-tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dncProcessCatalogueVO
     *
     * @tags 工艺目录
     * @name DncProcessCatalogueInsert
     * @summary 工艺目录表新增
     * @request POST:/blade-dnc/dnc-process-catalogue/insert
     * @secure
     */
    dncProcessCatalogueInsert: (
      query?: {
        /** name */
        name?: string;
        /** parentId */
        parentId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RDncProcessCatalogueVo, void>({
        path: `/blade-dnc/dnc-process-catalogue/insert`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺目录
     * @name DncProcessCatalogueLazyArtBagList
     * @summary 工艺目录表工艺包列表（懒加载）
     * @request GET:/blade-dnc/dnc-process-catalogue/lazy-art-list
     * @secure
     */
    dncProcessCatalogueLazyArtBagList: (
      query: {
        /** parentId */
        parentId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDncCatalogueAndArtBagVO, void>({
        path: `/blade-dnc/dnc-process-catalogue/lazy-art-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工艺目录
     * @name DncProcessCatalogueLazyList
     * @summary 工艺目录表列表（懒加载）
     * @request GET:/blade-dnc/dnc-process-catalogue/lazy-list
     * @secure
     */
    dncProcessCatalogueLazyList: (
      query: {
        /** parentId */
        parentId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListDncProcessCatalogueVo, void>({
        path: `/blade-dnc/dnc-process-catalogue/lazy-list`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入ids
     *
     * @tags 工艺目录
     * @name DncProcessCatalogueRemove
     * @summary 工艺目录表删除
     * @request DELETE:/blade-dnc/dnc-process-catalogue/remove
     * @secure
     */
    dncProcessCatalogueRemove: (ids: string[], params: RequestParams = {}) =>
      this.request<R, void>({
        path: `/blade-dnc/dnc-process-catalogue/remove`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * @description 传入dncProcessCatalogueVO
     *
     * @tags 工艺目录
     * @name DncProcessCatalogueUpdateName
     * @summary 工艺目录表修改
     * @request PUT:/blade-dnc/dnc-process-catalogue/update
     * @secure
     */
    dncProcessCatalogueUpdateName: (
      query?: {
        /** id */
        id?: string;
        /** name */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RDncProcessCatalogueVo, void>({
        path: `/blade-dnc/dnc-process-catalogue/update`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FTP目录与工位关系表管理
     * @name DncWsRelationTdBindingDirectory
     * @summary 工位绑定FTP目录
     * @request POST:/blade-dnc/dnc-ws-relation-td/binding-directory
     * @secure
     */
    dncWsRelationTdBindingDirectory: (workstationTdVO: WorkstationTdVO, params: RequestParams = {}) =>
      this.request<RWorkstationTdVO, void>({
        path: `/blade-dnc/dnc-ws-relation-td/binding-directory`,
        method: 'POST',
        body: workstationTdVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 删除文件接口
     *
     * @tags 文件controller
     * @name FileDelete
     * @summary 删除文件
     * @request DELETE:/blade-dnc/file
     * @secure
     */
    fileDelete: (deleteFileVO: DeleteFileVO, params: RequestParams = {}) =>
      this.request<RVoid, void>({
        path: `/blade-dnc/file`,
        method: 'DELETE',
        body: deleteFileVO,
        secure: true,
        ...params,
      }),

    /**
     * @description 批量保存文件
     *
     * @tags 文件controller
     * @name FileBatchSave
     * @summary 批量保存文件
     * @request POST:/blade-dnc/file/batch-save
     * @secure
     */
    fileBatchSave: (list: UploadFileOssVO[], params: RequestParams = {}) =>
      this.request<RListUploadFileOssVO, void>({
        path: `/blade-dnc/file/batch-save`,
        method: 'POST',
        body: list,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 切换版本
     *
     * @tags 文件controller
     * @name FileChangeVersion
     * @summary 切换版本
     * @request PUT:/blade-dnc/file/change-version
     * @secure
     */
    fileChangeVersion: (
      query: {
        /** newId */
        newId: string;
        /** oldId */
        oldId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/file/change-version`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 复制文件
     *
     * @tags 文件controller
     * @name FileCopy
     * @summary 复制文件
     * @request POST:/blade-dnc/file/copy
     * @secure
     */
    fileCopy: (changeFileParentVO: ChangeFileParentVO, params: RequestParams = {}) =>
      this.request<RVoid, void>({
        path: `/blade-dnc/file/copy`,
        method: 'POST',
        body: changeFileParentVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 新建文件(未上传)
     *
     * @tags 文件controller
     * @name FileCreateFile
     * @summary 新建文件
     * @request POST:/blade-dnc/file/create-file
     * @secure
     */
    fileCreateFile: (createFileVO: CreateFileVO, params: RequestParams = {}) =>
      this.request<RCreateFileVO, void>({
        path: `/blade-dnc/file/create-file`,
        method: 'POST',
        body: createFileVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 是否名称重复，null：不重复  非null: 文件名称
     *
     * @tags 文件controller
     * @name FileIsDuplicateName
     * @summary 是否名称重复
     * @request POST:/blade-dnc/file/duplicateName
     * @secure
     */
    fileIsDuplicateName: (uploadFileOssVOList: UploadFileOssVO[], params: RequestParams = {}) =>
      this.request<RListString, void>({
        path: `/blade-dnc/file/duplicateName`,
        method: 'POST',
        body: uploadFileOssVOList,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 文件夹下是否存在文件
     *
     * @tags 文件controller
     * @name FileExistsFile
     * @summary 文件夹下是否存在文件
     * @request POST:/blade-dnc/file/exists-file
     * @secure
     */
    fileExistsFile: (deleteFileVO: DeleteFileVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/file/exists-file`,
        method: 'POST',
        body: deleteFileVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 版本历史
     *
     * @tags 文件controller
     * @name FileHistory
     * @summary 版本历史
     * @request GET:/blade-dnc/file/history
     * @secure
     */
    fileHistory: (
      query: {
        /** name */
        name: string;
        /** pid */
        pid: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListFileHistoryVO, void>({
        path: `/blade-dnc/file/history`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 移动文件
     *
     * @tags 文件controller
     * @name FileMove
     * @summary 移动文件
     * @request PUT:/blade-dnc/file/move
     * @secure
     */
    fileMove: (changeFileParentVO: ChangeFileParentVO, params: RequestParams = {}) =>
      this.request<RVoid, void>({
        path: `/blade-dnc/file/move`,
        method: 'PUT',
        body: changeFileParentVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 编辑文件内容
     *
     * @tags 文件controller
     * @name FileUpdateFile
     * @summary 编辑文件内容
     * @request PUT:/blade-dnc/file/update-file
     * @secure
     */
    fileUpdateFile: (updateFileVO: UpdateFileVO, params: RequestParams = {}) =>
      this.request<RVoid, void>({
        path: `/blade-dnc/file/update-file`,
        method: 'PUT',
        body: updateFileVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 重命名
     *
     * @tags 文件controller
     * @name FileRename
     * @summary 重命名
     * @request PUT:/blade-dnc/file/{id}/rename
     * @secure
     */
    fileRename: (id: string, renameVO: RenameVO, params: RequestParams = {}) =>
      this.request<RVoid, void>({
        path: `/blade-dnc/file/${id}/rename`,
        method: 'PUT',
        body: renameVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 文件夹下文件以及文件夹
     *
     * @tags 文件夹
     * @name FolderFolderList
     * @summary 文件夹下文件以及文件夹
     * @request GET:/blade-dnc/folder
     * @secure
     */
    folderFolderList: (
      query?: {
        /** orderField */
        orderField?: string;
        /** parent */
        parent?: string;
        /** searchKey */
        searchKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RFolderListVO, void>({
        path: `/blade-dnc/folder`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 新建文件夹
     *
     * @tags 文件夹
     * @name FolderCreate
     * @summary 新建文件夹
     * @request POST:/blade-dnc/folder
     * @secure
     */
    folderCreate: (vo: NewFolderVO, params: RequestParams = {}) =>
      this.request<RNewFolderVO, void>({
        path: `/blade-dnc/folder`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 分页查询文件
     *
     * @tags 文件夹
     * @name FolderFilePage
     * @summary 分页查询文件
     * @request GET:/blade-dnc/folder/file-page
     * @secure
     */
    folderFilePage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * fileType
         * @format int32
         */
        fileType?: number;
        /** parent */
        parent?: string;
        /** searchKey */
        searchKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageFileVO, void>({
        path: `/blade-dnc/folder/file-page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 文件树结构
     *
     * @tags 文件夹
     * @name FolderFolderTree
     * @summary # 查询树结构
     * @request GET:/blade-dnc/folder/folder-tree
     * @secure
     */
    folderFolderTree: (params: RequestParams = {}) =>
      this.request<RListFolderTreeVO, void>({
        path: `/blade-dnc/folder/folder-tree`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 文件夹列表(懒加载)
     *
     * @tags 文件夹
     * @name FolderLazyFolderList
     * @summary 文件夹列表(懒加载)
     * @request GET:/blade-dnc/folder/lazy
     * @secure
     */
    folderLazyFolderList: (
      query?: {
        /** 文件夹Id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListFolderVO, void>({
        path: `/blade-dnc/folder/lazy`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 分页查询文件夹下文件以及文件夹
     *
     * @tags 文件夹
     * @name FolderFolderPage
     * @summary 分页查询文件夹下文件以及文件夹
     * @request GET:/blade-dnc/folder/page
     * @secure
     */
    folderFolderPage: (
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 排序字段 json传递 */
        orderField?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
        /**
         * fileType
         * @format int32
         */
        fileType?: number;
        /** parent */
        parent?: string;
        /** searchKey */
        searchKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageFileVO, void>({
        path: `/blade-dnc/folder/page`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 创建工位目录与关联工位
     *
     * @tags director
     * @name TransferDirectorCreateDirectory
     * @summary 创建工位目录
     * @request POST:/blade-dnc/ftp-director/create-director
     * @secure
     */
    transferDirectorCreateDirectory: (transferDirectorAddVO: TransferDirectorAddVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/ftp-director/create-director`,
        method: 'POST',
        body: transferDirectorAddVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 目录id必传
     *
     * @tags director
     * @name TransferDirectorDelDirectory
     * @summary 删除工位目录
     * @request GET:/blade-dnc/ftp-director/del-director
     * @secure
     */
    transferDirectorDelDirectory: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/ftp-director/del-director`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 获取目录与工位关系
     *
     * @tags director
     * @name TransferDirectorFtpListRelationWorkstation
     * @summary 获取工位目录工位关系列表
     * @request POST:/blade-dnc/ftp-director/ftp-workstation-list
     * @secure
     */
    transferDirectorFtpListRelationWorkstation: (ftpDirectorySearchVO: FtpDirectorySearchVO, params: RequestParams = {}) =>
      this.request<RListFtpDirectoryRelationWorkstationVO, void>({
        path: `/blade-dnc/ftp-director/ftp-workstation-list`,
        method: 'POST',
        body: ftpDirectorySearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 根据机器获取FTP目录
     *
     * @tags director
     * @name TransferDirectorGetMachineOfWorkstationForFtp
     * @summary 获取工位目录列表
     * @request GET:/blade-dnc/ftp-director/get-machine-of-workstation-ftp
     * @secure
     */
    transferDirectorGetMachineOfWorkstationForFtp: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListFtpTransferDirectoryVO, void>({
        path: `/blade-dnc/ftp-director/get-machine-of-workstation-ftp`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 新增工位那边使用
     *
     * @tags director
     * @name TransferDirectorGetFtpList
     * @summary 获取工位目录列表
     * @request GET:/blade-dnc/ftp-director/list
     * @secure
     */
    transferDirectorGetFtpList: (params: RequestParams = {}) =>
      this.request<RListFtpTransferDirectoryVO, void>({
        path: `/blade-dnc/ftp-director/list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 修改工位目录
     *
     * @tags director
     * @name TransferDirectorUpdateDirectory
     * @summary 编辑工位目录
     * @request POST:/blade-dnc/ftp-director/update-director
     * @secure
     */
    transferDirectorUpdateDirectory: (updateDirectoryVO: UpdateDirectoryVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/ftp-director/update-director`,
        method: 'POST',
        body: updateDirectoryVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ftp接口controller
     * @name DockingFtpGetOrderCwd
     * @summary cwd命令接口
     * @request GET:/blade-dnc/ftp/cwd
     * @secure
     */
    dockingFtpGetOrderCwd: (
      query: {
        /** path */
        path: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RVoid, void>({
        path: `/blade-dnc/ftp/cwd`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ftp接口controller
     * @name DockingFtpReadDirectory
     * @summary 获取目录下所有的当前版本的加工文件
     * @request GET:/blade-dnc/ftp/directory/read
     * @secure
     */
    dockingFtpReadDirectory: (
      query?: {
        /** path */
        path?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RFtpDirectoryVO, void>({
        path: `/blade-dnc/ftp/directory/read`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ftp接口controller
     * @name DockingFtpEntriesInfo
     * @summary 根据路径读取信息
     * @request GET:/blade-dnc/ftp/entries/info
     * @secure
     */
    dockingFtpEntriesInfo: (
      query: {
        /** path */
        path: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<REntityInfoVO, void>({
        path: `/blade-dnc/ftp/entries/info`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ftp接口controller
     * @name DockingFtpCreateFile
     * @summary 在根目录下创建当前版本的加工文件
     * @request POST:/blade-dnc/ftp/file/create
     * @secure
     */
    dockingFtpCreateFile: (
      query: {
        /** path */
        path: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<REntityInfoVO, void>({
        path: `/blade-dnc/ftp/file/create`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ftp接口controller
     * @name DockingFtpDeleteFile
     * @summary 删除文件
     * @request DELETE:/blade-dnc/ftp/file/delete
     * @secure
     */
    dockingFtpDeleteFile: (
      query: {
        /** filename */
        filename: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/ftp/file/delete`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ftp接口controller
     * @name DockingFtpReadFile
     * @summary 下载文件
     * @request GET:/blade-dnc/ftp/file/read
     * @secure
     */
    dockingFtpReadFile: (
      query: {
        /** path */
        path: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RString, void>({
        path: `/blade-dnc/ftp/file/read`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ftp接口controller
     * @name DockingFtpRenameFile
     * @summary 修改文件名称
     * @request PUT:/blade-dnc/ftp/file/rename
     * @secure
     */
    dockingFtpRenameFile: (
      query: {
        /** newFileName */
        newFileName: string;
        /** oldFileName */
        oldFileName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/ftp/file/rename`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 机器id
     *
     * @tags hmi
     * @name HmiDncGetHmiDevice
     * @summary 获取机器绑定的工位
     * @request GET:/blade-dnc/hmi/getHmiDevice/{machineId}
     * @secure
     */
    hmiDncGetHmiDevice: (machineId?: string, params: RequestParams = {}) =>
      this.request<RListHmiDeviceVO, void>({
        path: `/blade-dnc/hmi/getHmiDevice/${machineId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags dnc日志
     * @name DncOperationLogExportDncLog
     * @summary 导出dnc操作日志
     * @request POST:/blade-dnc/operation-file/export-log
     * @secure
     */
    dncOperationLogExportDncLog: (dncOperationLogSearchVO: DncOperationLogSearchVO, params: RequestParams = {}) =>
      this.request<RBladeFile, void>({
        path: `/blade-dnc/operation-file/export-log`,
        method: 'POST',
        body: dncOperationLogSearchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 所有后缀
     *
     * @tags dnc日志
     * @name DncOperationLogGetSuffixList
     * @summary 后缀名
     * @request GET:/blade-dnc/operation-file/list/suffix
     * @secure
     */
    dncOperationLogGetSuffixList: (params: RequestParams = {}) =>
      this.request<RSuffixListVO, void>({
        path: `/blade-dnc/operation-file/list/suffix`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 全日志列表
     *
     * @tags dnc日志
     * @name DncOperationLogGetPageAllDncData
     * @summary dnc全部操作日志查询分页
     * @request POST:/blade-dnc/operation-file/page-allData
     * @secure
     */
    dncOperationLogGetPageAllDncData: (
      search: DncOperationLogSearchVO,
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /** 排序字段 json传递 */
        orderField?: string;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageDncOperationLogVO, void>({
        path: `/blade-dnc/operation-file/page-allData`,
        method: 'POST',
        query: query,
        body: search,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 日志分页列表
     *
     * @tags dnc日志
     * @name DncOperationLogGetPageWorkstationLog
     * @summary dnc工位操作日志查询分页
     * @request POST:/blade-dnc/operation-file/page/{workstationId}
     * @secure
     */
    dncOperationLogGetPageWorkstationLog: (
      workstationId: string,
      search: LogSearchVO,
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<RIPageDncOperationLogVO, void>({
        path: `/blade-dnc/operation-file/page/${workstationId}`,
        method: 'POST',
        query: query,
        body: search,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 校验机床写入文件
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileCheckMachineToolFile
     * @summary 校验机床写入文件
     * @request POST:/blade-dnc/transfer-directory/check-write-file
     * @secure
     */
    transferDirectoryFileCheckMachineToolFile: (writeFileVO: MachineToolBatchWriteFileVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/transfer-directory/check-write-file`,
        method: 'POST',
        body: writeFileVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 工位文件id
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileDeleteWorkstationFile
     * @summary 删除工位文件
     * @request GET:/blade-dnc/transfer-directory/delete-file/{workstationFileId}
     * @secure
     */
    transferDirectoryFileDeleteWorkstationFile: (workstationFileId?: string, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/transfer-directory/delete-file/${workstationFileId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileSerialDownloadSend
     * @summary 在线下载文件 串口发送
     * @request POST:/blade-dnc/transfer-directory/download-send
     * @secure
     */
    transferDirectoryFileSerialDownloadSend: (vo: SerialSendVO, params: RequestParams = {}) =>
      this.request<RInt, void>({
        path: `/blade-dnc/transfer-directory/download-send`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 验证文件是否重复 true 是  false 否
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileExistDuplicateFile
     * @summary 验证文件是否重复
     * @request POST:/blade-dnc/transfer-directory/duplicate-file
     * @secure
     */
    transferDirectoryFileExistDuplicateFile: (workstationFileVo: WorkstationFileVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/transfer-directory/duplicate-file`,
        method: 'POST',
        body: workstationFileVo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 工位目录文件保存
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileSave
     * @summary 工位目录文件保存
     * @request POST:/blade-dnc/transfer-directory/file
     * @secure
     */
    transferDirectoryFileSave: (workstationFileVo: WorkstationFileVO, params: RequestParams = {}) =>
      this.request<RListWorkstationDirectoryFileVO, void>({
        path: `/blade-dnc/transfer-directory/file`,
        method: 'POST',
        body: workstationFileVo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 工位文件
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileGetWorkstationFile
     * @summary 获取工位目录下的文件列表
     * @request POST:/blade-dnc/transfer-directory/fileList
     * @secure
     */
    transferDirectoryFileGetWorkstationFile: (
      workstationDetailVO: WorkstationDetailVO,
      query?: {
        /** orderField */
        orderField?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RListTransferDirectoryFileVo, void>({
        path: `/blade-dnc/transfer-directory/fileList`,
        method: 'POST',
        query: query,
        body: workstationDetailVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description hmi读取机床文件
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileGetOnlineRead
     * @summary hmi在线读文件
     * @request GET:/blade-dnc/transfer-directory/get-online-read-file
     * @secure
     */
    transferDirectoryFileGetOnlineRead: (
      query: {
        /** fileName */
        fileName: string;
        /** workstationId */
        workstationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/blade-dnc/transfer-directory/get-online-read-file`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 删除文件
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileOnlineDel
     * @summary 删除机床文件
     * @request POST:/blade-dnc/transfer-directory/online-del-file
     * @secure
     */
    transferDirectoryFileOnlineDel: (dncReadFileVO: DncReadFileVO, params: RequestParams = {}) =>
      this.request<RString, void>({
        path: `/blade-dnc/transfer-directory/online-del-file`,
        method: 'POST',
        body: dncReadFileVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 文件列表
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileGetOnlineFileList
     * @summary 机床文件列表
     * @request POST:/blade-dnc/transfer-directory/online-file-list
     * @secure
     */
    transferDirectoryFileGetOnlineFileList: (dncReadFileVO: DncReadFileVO, params: RequestParams = {}) =>
      this.request<RListTransferDirectoryFileVo, void>({
        path: `/blade-dnc/transfer-directory/online-file-list`,
        method: 'POST',
        body: dncReadFileVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 读取机床文件
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileOnlineRead
     * @summary 在线读文件
     * @request POST:/blade-dnc/transfer-directory/online-read-file
     * @secure
     */
    transferDirectoryFileOnlineRead: (dncReadFileVO: DncReadFileVO, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/blade-dnc/transfer-directory/online-read-file`,
        method: 'POST',
        body: dncReadFileVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 文件写入
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileOnlineWrite
     * @summary 文件在线写入
     * @request POST:/blade-dnc/transfer-directory/online-write-file
     * @secure
     */
    transferDirectoryFileOnlineWrite: (writeFileVO: MachineToolBatchWriteFileVO, params: RequestParams = {}) =>
      this.request<RMachineToolBatchWriteFileVO, void>({
        path: `/blade-dnc/transfer-directory/online-write-file`,
        method: 'POST',
        body: writeFileVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 根据工位workstationId获取文件列表
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileFilePages
     * @summary 工位文件（分页）
     * @request POST:/blade-dnc/transfer-directory/page
     * @secure
     */
    transferDirectoryFileFilePages: (
      searchDTO: WorkstationFileSearchVO,
      query?: {
        /**
         * 当前页
         * @format int32
         */
        current?: number;
        /**
         * 每页的数量
         * @format int32
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<IPageTransferDirectoryFilePageVO, void>({
        path: `/blade-dnc/transfer-directory/page`,
        method: 'POST',
        query: query,
        body: searchDTO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileReceiveSchedule
     * @summary 接收进度
     * @request GET:/blade-dnc/transfer-directory/receive-schedule
     * @secure
     */
    transferDirectoryFileReceiveSchedule: (
      query: {
        /** encodingType */
        encodingType: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RReceiveScheduleVO, void>({
        path: `/blade-dnc/transfer-directory/receive-schedule`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileSendSchedule
     * @summary 获取串口发送进度
     * @request GET:/blade-dnc/transfer-directory/send-schedule
     * @secure
     */
    transferDirectoryFileSendSchedule: (params: RequestParams = {}) =>
      this.request<RSendScheduleVO, void>({
        path: `/blade-dnc/transfer-directory/send-schedule`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileAllSerialList
     * @summary 获取串口列表
     * @request GET:/blade-dnc/transfer-directory/serial-list
     * @secure
     */
    transferDirectoryFileAllSerialList: (params: RequestParams = {}) =>
      this.request<RListSerialInfoDTO, void>({
        path: `/blade-dnc/transfer-directory/serial-list`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileSerialReceive
     * @summary 串口接收
     * @request POST:/blade-dnc/transfer-directory/serial-receive
     * @secure
     */
    transferDirectoryFileSerialReceive: (serialSetting: SerialSetting, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/transfer-directory/serial-receive`,
        method: 'POST',
        body: serialSetting,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileSerialSaveFile
     * @summary 获取文件内容保存之后 生成传输文件信息
     * @request POST:/blade-dnc/transfer-directory/serial-save-file
     * @secure
     */
    transferDirectoryFileSerialSaveFile: (vo: WorkstationDirectoryFileVO, params: RequestParams = {}) =>
      this.request<RListWorkstationDirectoryFileVO, void>({
        path: `/blade-dnc/transfer-directory/serial-save-file`,
        method: 'POST',
        body: vo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 切换当前文件版本
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileSwitchFile
     * @summary 切换文件版本
     * @request POST:/blade-dnc/transfer-directory/switch-file
     * @secure
     */
    transferDirectoryFileSwitchFile: (fileVersionSwitchVO: FileVersionSwitchVO, params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/transfer-directory/switch-file`,
        method: 'POST',
        body: fileVersionSwitchVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileTransportCancel
     * @summary 关闭串口传输
     * @request GET:/blade-dnc/transfer-directory/transport-cancel
     * @secure
     */
    transferDirectoryFileTransportCancel: (params: RequestParams = {}) =>
      this.request<RBoolean, void>({
        path: `/blade-dnc/transfer-directory/transport-cancel`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 上传文件:fileType 加工程序 1 工艺文件 2
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileWorkstationFromDocuments
     * @summary 工位文件批量上传到我的文档
     * @request POST:/blade-dnc/transfer-directory/workstation-from-documents
     * @secure
     */
    transferDirectoryFileWorkstationFromDocuments: (workstationFromDocumentsVO: WorkstationFromDocumentsVO, params: RequestParams = {}) =>
      this.request<RListUploadFileOssVO, void>({
        path: `/blade-dnc/transfer-directory/workstation-from-documents`,
        method: 'POST',
        body: workstationFromDocumentsVO,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 文件id
     *
     * @tags 传输目录文件增删controller
     * @name TransferDirectoryFileGetFileHistory
     * @summary 工位文件版本历史列表
     * @request GET:/blade-dnc/transfer-directory/{fileId}/fileHistoryList
     * @secure
     */
    transferDirectoryFileGetFileHistory: (fileId?: string, params: RequestParams = {}) =>
      this.request<RListFileHistoryVO, void>({
        path: `/blade-dnc/transfer-directory/${fileId}/fileHistoryList`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
}
