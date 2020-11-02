import axios from 'axios';
import qs from 'qs';
const instance = axios.create({
	method:'post',
	baseURL:'http://localhost:116/api',//接口地址
    transformRequest: [function (data, headers) {
        return qs.stringify(data);
    }],
    transformResponse: [function (data) {
      let d = JSON.parse(data);
      if(d.msg = '登录过期'){
      	localStorage.removeItem('token')
      	localStorage.removeItem('user')
      }
      return JSON.parse(data) ;
    }],
})

instance.interceptors.request.use(function(config){
	config.headers.common['token']=localStorage.getItem('token');//登录成功localst
	return config;
},function(error){
	return Promise.reject(error);
});

export default instance;