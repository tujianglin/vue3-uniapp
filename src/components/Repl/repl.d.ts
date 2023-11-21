import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import * as defaultCompiler from 'vue/compiler-sfc';
import { DefineComponent } from 'vue';
import type { editor } from 'monaco-editor-core';
import { ExtractPropTypes } from 'vue';
import { FunctionalComponent } from 'vue';
import { PropType } from 'vue';
import { SFCAsyncStyleCompileOptions } from 'vue/compiler-sfc';
import { SFCScriptCompileOptions } from 'vue/compiler-sfc';
import { SFCTemplateCompileOptions } from 'vue/compiler-sfc';
import { VNodeProps } from 'vue';

export declare function compileFile(store: Store, { filename, code, compiled }: File_2): Promise<(string | Error)[]>;

declare type EditorComponentType = FunctionalComponent<
  EditorProps,
  {
    change: (code: string) => void;
  }
> & {
  editorType: 'monaco' | 'codemirror';
};

declare interface EditorProps {
  value: string;
  filename: string;
  readonly?: boolean;
  mode?: PreviewMode;
}

declare class File_2 {
  filename: string;
  code: string;
  hidden: boolean;
  compiled: {
    js: string;
    css: string;
    ssr: string;
  };
  editorViewState: editor.ICodeEditorViewState | null;
  constructor(filename: string, code?: string, hidden?: boolean);
  get language(): 'vue' | 'typescript' | 'css' | 'html' | 'javascript';
}
export { File_2 as File };

export declare type OutputModes = 'preview' | 'js' | 'css' | 'ssr';

export declare const Preview: DefineComponent<
  {
    show: {
      type: PropType<boolean>;
      required: true;
    };
    ssr: {
      type: PropType<boolean>;
      required: true;
    };
  },
  {
    reload: typeof reload_2;
  },
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {},
  string,
  VNodeProps & AllowedComponentProps & ComponentCustomProps,
  Readonly<
    ExtractPropTypes<{
      show: {
        type: PropType<boolean>;
        required: true;
      };
      ssr: {
        type: PropType<boolean>;
        required: true;
      };
    }>
  >,
  {},
  {}
>;

declare type PreviewMode = 'js' | 'css' | 'ssr';

/**
 * Reload the preview iframe
 */
declare function reload(): void;

/**
 * Reload the preview iframe
 */
declare function reload_2(): void;

export declare const Repl: DefineComponent<
  {
    ssr: {
      type: PropType<boolean>;
      default: boolean;
    };
    layout: {
      type: PropType<'horizontal' | 'vertical'>;
    };
    store: {
      type: PropType<Store>;
      default: () => ReplStore;
    };
    previewOptions: {
      type: PropType<{
        headHTML?: string | undefined;
        bodyHTML?: string | undefined;
        placeholderHTML?: string | undefined;
        customCode?:
          | {
              importCode?: string | undefined;
              useCode?: string | undefined;
            }
          | undefined;
      }>;
      default: () => {
        headHTML: string;
        bodyHTML: string;
        placeholderHTML: string;
        customCode: {
          importCode: string;
          useCode: string;
        };
      };
    };
    showCompileOutput: {
      type: PropType<boolean>;
      default: boolean;
    };
    showTsConfig: {
      type: PropType<boolean>;
      default: boolean;
    };
    showImportMap: {
      type: PropType<boolean>;
      default: boolean;
    };
    theme: {
      type: PropType<'dark' | 'light'>;
      default: string;
    };
    editor: {
      type: PropType<EditorComponentType>;
      required: true;
    };
    autoResize: {
      type: PropType<boolean>;
      default: boolean;
    };
    clearConsole: {
      type: PropType<boolean>;
      default: boolean;
    };
    sfcOptions: {
      type: PropType<SFCOptions>;
    };
  },
  {
    reload: typeof reload;
  },
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {},
  string,
  VNodeProps & AllowedComponentProps & ComponentCustomProps,
  Readonly<
    ExtractPropTypes<{
      ssr: {
        type: PropType<boolean>;
        default: boolean;
      };
      layout: {
        type: PropType<'horizontal' | 'vertical'>;
      };
      store: {
        type: PropType<Store>;
        default: () => ReplStore;
      };
      previewOptions: {
        type: PropType<{
          headHTML?: string | undefined;
          bodyHTML?: string | undefined;
          placeholderHTML?: string | undefined;
          customCode?:
            | {
                importCode?: string | undefined;
                useCode?: string | undefined;
              }
            | undefined;
        }>;
        default: () => {
          headHTML: string;
          bodyHTML: string;
          placeholderHTML: string;
          customCode: {
            importCode: string;
            useCode: string;
          };
        };
      };
      showCompileOutput: {
        type: PropType<boolean>;
        default: boolean;
      };
      showTsConfig: {
        type: PropType<boolean>;
        default: boolean;
      };
      showImportMap: {
        type: PropType<boolean>;
        default: boolean;
      };
      theme: {
        type: PropType<'dark' | 'light'>;
        default: string;
      };
      editor: {
        type: PropType<EditorComponentType>;
        required: true;
      };
      autoResize: {
        type: PropType<boolean>;
        default: boolean;
      };
      clearConsole: {
        type: PropType<boolean>;
        default: boolean;
      };
      sfcOptions: {
        type: PropType<SFCOptions>;
      };
    }>
  >,
  {
    ssr: boolean;
    store: Store;
    previewOptions: {
      headHTML?: string | undefined;
      bodyHTML?: string | undefined;
      placeholderHTML?: string | undefined;
      customCode?:
        | {
            importCode?: string | undefined;
            useCode?: string | undefined;
          }
        | undefined;
    };
    showCompileOutput: boolean;
    showTsConfig: boolean;
    showImportMap: boolean;
    theme: 'dark' | 'light';
    autoResize: boolean;
    clearConsole: boolean;
  },
  {}
>;

export declare interface ReplProps {
  theme?: 'dark' | 'light';
  editor: EditorComponentType;
  store?: Store;
  autoResize?: boolean;
  showCompileOutput?: boolean;
  showImportMap?: boolean;
  showTsConfig?: boolean;
  clearConsole?: boolean;
  sfcOptions?: SFCOptions;
  layout?: 'horizontal' | 'vertical';
  ssr?: boolean;
  previewOptions?: {
    headHTML?: string;
    bodyHTML?: string;
    placeholderHTML?: string;
    customCode?: {
      importCode?: string;
      useCode?: string;
    };
  };
}

export declare class ReplStore implements Store {
  state: StoreState;
  compiler: typeof defaultCompiler;
  vueVersion?: string;
  options?: SFCOptions;
  initialShowOutput: boolean;
  initialOutputMode: OutputModes;
  reloadLanguageTools: undefined | (() => void);
  private defaultVueRuntimeURL;
  private defaultVueServerRendererURL;
  private pendingCompiler;
  constructor({ serializedState, defaultVueRuntimeURL, defaultVueServerRendererURL, showOutput, outputMode }?: StoreOptions);
  init(): void;
  private initTsConfig;
  setTsConfig(config: any): void;
  getTsConfig(): any;
  setActive(filename: string): void;
  addFile(fileOrFilename: string | File_2): void;
  deleteFile(filename: string): void;
  renameFile(oldFilename: string, newFilename: string): void;
  serialize(): string;
  getFiles(): Record<string, string>;
  setFiles(newFiles: Record<string, string>, mainFile?: string): Promise<void>;
  private forceSandboxReset;
  private initImportMap;
  getImportMap(): any;
  setImportMap(map: { imports: Record<string, string>; scopes?: Record<string, Record<string, string>> }): void;
  setTypeScriptVersion(version: string): void;
  setVueVersion(version: string): Promise<void>;
  resetVueVersion(): void;
}

export declare interface SFCOptions {
  script?: Partial<SFCScriptCompileOptions>;
  style?: Partial<SFCAsyncStyleCompileOptions>;
  template?: Partial<SFCTemplateCompileOptions>;
}

export declare interface Store {
  state: StoreState;
  options?: SFCOptions;
  compiler: typeof defaultCompiler;
  vueVersion?: string;
  init: () => void;
  setActive: (filename: string) => void;
  addFile: (filename: string | File_2) => void;
  deleteFile: (filename: string) => void;
  renameFile: (oldFilename: string, newFilename: string) => void;
  getImportMap: () => any;
  getTsConfig?: () => any;
  reloadLanguageTools?: undefined | (() => void);
  initialShowOutput: boolean;
  initialOutputMode: OutputModes;
}

export declare interface StoreOptions {
  serializedState?: string;
  showOutput?: boolean;
  outputMode?: OutputModes | string;
  defaultVueRuntimeURL?: string;
  defaultVueServerRendererURL?: string;
}

export declare interface StoreState {
  mainFile: string;
  files: Record<string, File_2>;
  activeFile: File_2;
  errors: (string | Error)[];
  vueRuntimeURL: string;
  vueServerRendererURL: string;
  typescriptVersion: string;
  /** @deprecated use `locale` instead */
  typescriptLocale?: string | undefined;
  locale?: string | undefined;
  resetFlip: boolean;
  /** \{ dependencyName: version \} */
  dependencyVersion?: Record<string, string>;
}

export {};
