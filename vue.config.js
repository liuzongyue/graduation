module.exports = {
  devServer: {
    open: true,
    https: false,
    hotOnly: false,
    proxy: { // 配置跨域
        '/': {
            target: 'http://192.168.1.7:3000/',	//接口域名
            ws: true,	//是否代理websockets
            changOrigin: true,	//是否跨域
            pathRewrite: {		//重置路径
                '/': ''
            }
        }
    },
    // before: app => { }
}
}