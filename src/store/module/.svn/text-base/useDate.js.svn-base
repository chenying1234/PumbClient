
import { getToken, setToken, removeToken } from '@/utils/tokenSave'
import { login, getInfo } from '@/api/login'

const user = {
    wxConfig:null,
    state:{
        token:getToken()
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        }
    },
    actions:{
        // 直接登录
        Login({commit}, userInfo) {
            const accountName = userInfo.accountName.trim();
            const password = userInfo.password.trim();
            return new Promise((resolve, reject) => {
                login(accountName, password).then(res => {
                    if(res.data.Result){
                        // setToken(res.data.Message);
                        // commit('SET_TOKEN', res.data.Message);
                    }
                    resolve(res);
                }).catch(err => {
                    console.log('调用登录接口失败')
                    reject(err);
                })
            })
        },
        GetInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                getInfo(state.token).then(res => {
                    // commit('SET_USERNAME', res.data.UserName);
                    // commit('SET_ROLES', [res.data.RoleName]);
                    // resolve(res);
                }).catch(err => {
                    reject(err);
                })
            })
        },

    }
    
}