type Data<T> = {
  data: T;
  statusCode: number;
  header: Record<string, any>;
  cookies: string[];
};

const baseURL = 'http://localhost:3000';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InR1amlhbmdsaW4iLCJpYXQiOjE2OTIzNDUxNzcsImV4cCI6MTY5MjU2MTE3N30.8XC8Xc99kq1GpwBZRZEBW7MsoEo-HXA1Rw-W_gam85U';

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    // 非http开头拼接地址
    if (!options.url.startsWith('http')) {
      options.url = `${baseURL}${options.url}`;
    }
    // 请求超时默认10s
    options.timeout = 10000;
    options.header = {
      ...options.header,
    };
    if (token) {
      options.header.Authorization = `Bearer ${token}`;
    }
  },
};

uni.addInterceptor('request', httpInterceptor);
uni.addInterceptor('uploadFile', httpInterceptor);

export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success: (res: any) => {
        resolve(res);
      },
      fail: (err: any) => {
        console.log(err);
        reject(err);
      },
    });
  });
};
