
// 运行时配置文件
export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      global: {
        text: 'hi umi + dva'
      }
    }
  },
};
