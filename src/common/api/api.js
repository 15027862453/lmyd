import axios from 'axios';
import Apis from './url.js';
import CONFIG from '../config.js';
import { Toast } from 'vant';

const API = {};
API.ApiConfig = {
    'Apis': Apis
};

//获取接口完整地址
API.getUrl = function (alias) {
    return CONFIG.API_HOST + this.ApiConfig.Apis[alias];
}

//发送请求
API.getJson = function (alias, params) {
    var url = this.getUrl(alias);
    var token = localStorage.getItem('token');
    if (token) {
        params.token = token
    }
    return new Promise((resolve, reject) => {
        axios({
            method: "POST",
            url: url,
            data: params,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(function (res) {
            if (res.status == 200) {

                if (res.data.code == 1) {
                    //请求成功
                    resolve(res.data.data);

                } else if (res.data.code == -100) {
                    //通用错误消息
                    
                    Toast({
                        message: res.data.msg,
                        position: 'bottom',
                    });
                } else if (res.data.code == -101) {
                    //token不合法或用户未登录
                    Toast({
                        message: res.data.msg,
                        position: 'bottom',
                    });
                } else if (res.data.code == -102) {
                    //用户未绑定手机号码 
                    Toast({
                        message: res.data.msg,
                        position: 'bottom',
                    });
                } else {
                    //未知错误
                    Toast({
                        message: '未知错误',
                        position: 'bottom',
                    });
                }

                return;
            }
        }).catch((err) => {
            Toast('服务器出错，请稍后重试~');
        });
    })

}
export default API;