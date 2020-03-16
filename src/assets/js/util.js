/***
 * _ooOoo_
 * o8888888o
 * 88" . "88
 * (| -_- |)
 *  O\ = /O
 * ___/`---'\____
 * .   ' \\| |// `.
 * / \\||| : |||// \
 * / _||||| -:- |||||- \
 * | | \\\ - /// | |
 * | \_| ''\---/'' | |
 * \ .-\__ `-` ___/-. /
 * ___`. .' /--.--\ `. . __
 * ."" '< `.___\_<|>_/___.' >'"".
 * | | : `- \`.;`\ _ /`;.`/ - ` : | |
 * \ \ `-. \_ __\ /__ _/ .-` / /
 * ======`-.____`-.___\_____/___.-`____.-'======
 * `=---='
 *          .............................................
 *           佛曰：bug泛滥，我已瘫痪！
 */


/***
 *      ┌─┐       ┌─┐ + +
 *   ┌──┘ ┴───────┘ ┴──┐++
 *   │                 │
 *   │       ───       │++ + + +
 *   ███████───███████ │+
 *   │                 │+
 *   │       ─┴─       │
 *   │                 │
 *   └───┐         ┌───┘
 *       │         │
 *       │         │   + +
 *       │         │
 *       │         └──────────────┐
 *       │                        │
 *       │                        ├─┐
 *       │                        ┌─┘
 *       │                        │
 *       └─┐  ┐  ┌───────┬──┐  ┌──┘  + + + +
 *         │ ─┤ ─┤       │ ─┤ ─┤
 *         └──┴──┘       └──┴──┘  + + + +
 *                神兽保佑
 *               代码无BUG!
 */

import cookie from 'js-cookie'
//import axios from 'axios'
//import qs from 'qs'
//import $ from 'jquery'
import Bus from 'vue'
export default {
    install(Vue, options) {
        /**
         *                      江城子 . 程序员之歌
         *
         *                  十年生死两茫茫，写程序，到天亮。
         *                      千行代码，Bug何处藏。
         *                  纵使上线又怎样，朝令改，夕断肠。
         *
         *                  领导每天新想法，天天改，日日忙。
         *                      相顾无言，惟有泪千行。
         *                  每晚灯火阑珊处，夜难寐，加班狂。
         */

        Vue.prototype.getCurrentEnv = function() {
            /*
            local          --           本地调试
            ckl            --           内网
            test           --           外测
            production     --           生产
            */
            return 'test'
        }

        Vue.prototype.getWSDomain = function() {
            let env = this.getCurrentEnv();
            let protocol = location.protocol;
            let origin = '//ws.ckl.com';
            if (env == 'test') {
                origin = '//test.ws.forclass.net';
                /*
                origin = '//test.webservice.forclass.net';
                origin = '//test.ws.eduzibo.com';
                */
            }
            if (env == 'production') {
                origin = '//webservice.forclass.net';
                //origin = '//ws.forclass.net';
            }

            return protocol + origin;
        }



        Vue.prototype.$event = new Bus()


        Vue.prototype.startLoading = function() {
            Vue.prototype.loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });
        }

        Vue.prototype.stopLoading = function() {
            Vue.prototype.loading.close();
        }

        // 获取session
        Vue.prototype.getSession = function() {
            var acnt = this.loadAccount()
            if (this.isValid(acnt) &&
                this.isValid(acnt.session)) {
                return acnt.session
            }
        }


        Vue.prototype.getLocalVal = function(key) {
            var value = (typeof localStorage[key] == "undefined" || localStorage[key] == "undefined") ? "" : localStorage[key]
            return value
        }

        Vue.prototype.updateLocal = function(key, value) {
            localStorage[key] = value
        }

        Vue.prototype.getSessionVal = function(key) {
            var value = (typeof sessionStorage[key] == "undefined" || sessionStorage[key] == "undefined") ? "" : sessionStorage[key]
            return value
        }

        Vue.prototype.loadAccount = function() {
            let device = this.getSessionVal('device') || window.navigator.userAgent.toLowerCase().indexOf('wke') >= 0
            let tool = this.getSessionVal('tool')
            let clientBrowser = device || tool
            let account = null
                //客户端（教师端，学生端）浏览器允许使用sessionStorage；PC浏览器只允许使用Cookie
            if (this.isSupportJSON()) {
                let cookieAccount = this.getCookie('account')
                let sessionAccount = this.getSessionVal('account')
                if (clientBrowser && this.isValid(sessionAccount) && sessionAccount != '') {
                    account = JSON.parse(sessionAccount)
                } else if (this.isValid(cookieAccount) && cookieAccount != '') {
                    account = this.getCookie('account')
                }
            }
            return account
        }
        Vue.prototype.loadPlatform = function() {
            let device = this.getSessionVal('device') || window.navigator.userAgent.toLowerCase().indexOf('wke') >= 0
            let tool = this.getSessionVal('tool')
            let clientBrowser = device || tool
            let platform = null
            if (this.isSupportJSON()) {
                let cookiePlatform = this.getCookie('platform')
                let sessionPlatform = this.getSessionVal('platform')
                if (clientBrowser && this.isValid(sessionPlatform) && sessionPlatform != '') {
                    platform = JSON.parse(sessionPlatform)
                } else if (this.isValid(cookiePlatform) && cookiePlatform != '') {
                    platform = this.getCookie('platform')
                }
            }
            return platform
        }

        Vue.prototype.updateSession = function(key, value) {
            sessionStorage[key] = value
        }

        Vue.prototype.getCookie = function(name) {
            return cookie.getJSON(name)
        }

        Vue.prototype.setCookie = function(name, value, options) {
            if (this.isValid(name)) {
                cookie.set(name, value, options)
            }
        }

        //var g_upgrademsgshowed = false

        Vue.prototype.isSupportJSON = function() {
            var support = JSON != null && typeof JSON != 'undefined'
            if (!support && !g_upgrademsgshowed) {
                g_upgrademsgshowed = true
                alert("您的浏览器版本过低，请升级浏览器。")
            }

            return support
        }

        Vue.prototype.isValid = function(value) {
            return value != null && typeof value != 'undefined'
        }


        Vue.prototype.getDomain = function() {
            var domain = window.location.hostname.split('.')
            var arrLength = domain.length
            if (arrLength >= 2) {
                domain = domain[arrLength - 2] + '.' + domain[arrLength - 1]
            }

            return domain
        }

        Vue.prototype.appendScriptToBody = function(id, $scriptObj) {
            $scriptObj.attr('id', id)
            if ($("#" + id).length == 0) {
                let $body = $('body')
                let $lastScriptEle = $body.find('script:last')
                if ($lastScriptEle.length > 0) {
                    $scriptObj.insertAfter($lastScriptEle)
                } else {
                    $body.append($scriptObj)
                }
            }
        }

        Vue.prototype.loadSession = function(result, that) {
            if (that.isValidArray(result)) {
                var account = result[0]
                let clientSession = that.getSession()
                let serverSession = account.session
                let loginUrl = "/Account/SignIn"
                if (that.isValid(serverSession) && (clientSession == serverSession)) {
                    var realname = account.realname
                    var showname = account.showname
                    var username = (realname == null || realname == "") ? showname : realname
                    var classidx = (account.classidx > 0 ? account.classidx : 0)
                    var classname = ((account.classname == null || account.classname == undefined) ? "" : account.classname)
                    var acnt = {
                        "userid": account.userid,
                        "session": account.session,
                        "loginname": account.showname,
                        "realname": account.realname,
                        "account": username,
                        "role": account.role,
                        "period": account.period,
                        "coin": account.coin,
                        "level": account.level,
                        "email": account.email,
                        "avatar": account.avatar,
                        "dlserver": account.dlserver,
                        "zoneidx": account.zoneidx,
                        "schoolidx": account.schoolidx,
                        "role1": account.role,
                        "classidx": classidx,
                        "classname": classname,
                        "zonename": account.zone,
                        "schoolname": account.school,
                        'zonelevel': account.zonelevel,
                        'platformzonelevel': account.platformzonelevel,
                        'zonelevelname': account.zonelevelname,
                        'showname': account.showname,
                        'sourceid': account.sourceid
                    }
                    that.saveAccount(acnt)
                } else {
                    console.log('client session not equal with server session')
                        //location.href = loginUrl
                }
            } else {
                console.log('请检查服务器返回的session')
                sessionStorage.removeItem('account')
                    //that.setCookie('account', null, { expires: -1, path: that.getDomain() })
                cookie.set('account', null, { expires: -1, path: that.getDomain() })
                that.$store.commit({ type: 'UPDATE_ACCOUNT', account: { Account: null } })
                    //location.href = loginUrl
            }
        }

        var g_ajaxQueue = []
        var g_ajaxIsRunning = false
        Vue.prototype.addToQueue = function(methodName, inputObj, handleFunc, target, runNow) {
            g_ajaxQueue.push(this.sendRequest(methodName, inputObj, handleFunc, target))
            if (runNow) {
                /*
                axios.all(g_ajaxQueue).then(axios.spread((response) => {
                    console.log(response)
                }))
                */
            }
        }

        // Vue.prototype.sendRequest = function(methodName, inputObj, handleFunc, target, next) {
        //     if (this.isValid(inputObj)) {
        //         var dataObj = {}

        //         var session = this.getSession()
        //         if (session != null)
        //             Object.assign(dataObj, { "session": session })
        //         else
        //             Object.assign(dataObj, { "session": "" })
        //         if (!this.isValidInt(inputObj.page, -1))
        //             inputObj.page = 0

        //         Object.assign(dataObj, inputObj)

        //         var contentType = "application/x-www-form-urlencoded"
        //         var dataType = "json"
        //         g_ajaxIsRunning = true
        //         if (!this.isValid(window.ajaxRandomArr)) {
        //             window.ajaxRandomArr = []
        //         }
        //         window.ajaxRandomArr.push(Math.random())
        //         axios({
        //             url: methodName,
        //             method: "post",
        //             baseURL: this.getWSDomain(),
        //             /*
        //             transformRequest: [function(data) {

        //                 return data
        //             }],
        //             transformResponse: [function(data) {

        //             }],
        //             */
        //             /*//谨慎使用
        //             headers: { 'Access-Control-Allow-Origin': '*' },
        //             params: qs.stringify(dataObj),
        //             paramsSerializer: function(params) {
        //                 return qs.stringify(params, { arrarFormat: 'brackets' })
        //             },
        //             */
        //             data: this.$qs.stringify(dataObj),
        //             timeout: 0,
        //             withCredentials: false,
        //             /*//谨慎使用
        //             adapter: function(config) {

        //             },
        //             */
        //             auth: null, //谨慎使用
        //             //responseType: dataType,   //谨慎使用
        //             xsrfCookieName: 'XSRF-TOKEN',
        //             xsrfHeaderName: 'X-XSRF-TOKEN',
        //             //maxContentLength: 2000,
        //             /*
        //             validateStatus: function(status) { //研究一下
        //                 return status >= 200 && status < 300
        //             },
        //             maxRedirects: 5,
        //             httpAgent: new http.Agent({ keepAlive: true }),
        //             httpsAgent: new https.Agent({ keepAlive: true }),
        //             proxy: {
        //                 host: 'ws.ckl.com',
        //                 port: '80',
        //                 auth: {}
        //             },
        //             cancelToken: new axios.CancelToken(function(cancel) {

        //             })
        //             */
        //         }).then((response) => {
        //             g_ajaxIsRunning = false
        //             window.ajaxRandomArr.pop()
        //             var d = response.data
        //             if (this.isValid(d)) {
        //                 var rc = this.getReturnCode(d)
        //                 if (rc == 1) {
        //                     var np = this.getResultNextPage(d)
        //                     if (np > 0) {
        //                         inputObj.page = np
        //                         this.addToQueue(methodName, inputObj, handleFunc, target, true)
        //                     }

        //                     var result = this.getResultData(d)
        //                     handleFunc(result, target, np)
        //                         // need get more pages
        //                 } else if (rc < 1) {
        //                     // hide waiting msg
        //                     // return error
        //                     var result = this.getResultData(d)
        //                     handleFunc(result, target, 0)
        //                 }
        //             } else {
        //                 handleFunc(-1, target, 0)
        //             }
        //         }).catch(function(error) {
        //             console.log(error)
        //             g_ajaxIsRunning = false
        //         })
        //     }
        // }


        // 封装的简单发送请求
        Vue.prototype.sendRequest = function(methodName, inputObj, handleFunc, target, next) {
            this.$axios.post(methodName,inputObj)
            .then(res=>{
                res = res.data
                handleFunc(res)
                // this.stopLoading()
            })
        }


        // 获取平台
        Vue.prototype.getDefaultPlatformInfo = function() {
            return {
                PlatformSystemNumber: '000001',
                PlatformSystemName: 'ForClass教育资源公共服务平台',
                CurrentSystemAlias: 'home',
                ZoneIdx: 1,
                NavList: [{
                        Name: '首页',
                        Alias: 'home',
                        HostName: 'paas.forclass.net',
                        Enabled: true
                    },
                    {
                        Name: '资源',
                        Alias: 'res',
                        HostName: 'res.forclass.net',
                        Enabled: true
                    },
                    {
                        Name: '视频',
                        Alias: 'v',
                        HostName: 'v.forclass.net',
                        Enabled: true
                    },
                    {
                        Name: '社区',
                        Alias: 'cm',
                        HostName: 'cm.forclass.net',
                        Enabled: true
                    },
                    {
                        Name: '作业',
                        Alias: 'zzn',
                        HostName: 'zzn.forclass.net',
                        Enabled: true
                    },
                    {
                        Name: '空间',
                        Alias: 'zone',
                        HostName: 'zone.forclass.net',
                        Enabled: true
                    },
                    {
                        Name: '统计',
                        Alias: 'cm',
                        HostName: 'st.forclass.net',
                        Enabled: true
                    },
                    {
                        Name: '管理',
                        Alias: 'console',
                        HostName: 'console.forclass.net',
                        Enabled: true
                    }
                ]
            }
        }


        Vue.prototype.getDownloadXml = function(list, type, className) {
            let $xml = $('<download>', {
                'type': type,
                'classname': className
            });
            if (this.isValidArray(list)) {
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var url = item.url;
                    var name = item.name;
                    var source = item.source || '资源导出';
                    var size = item.size || '未知';
                    var dataid = item.dataid;
                    var $item = $('<item>', {
                        'url': url,
                        'showname': name,
                        'source': source,
                        'Size': size,
                        'dataid': dataid
                    });
                    $item.appendTo($xml);
                }
            }
            return $xml;
        }

        Vue.prototype.setAccountResourceQuery = function(callback) {
            let param = {
                session: this.getSession(),
                sysType: 2
            }
            let unitList = this.getLocalVal("unitList")
            unitList = this.isValid(unitList) && unitList != '' ? JSON.parse(unitList) : []
            let accountQuery = {
                PeriodName: this.getLocalVal("speriod"),
                SubjectName: this.getLocalVal("ssubject"),
                EditionName: this.getLocalVal("sedition"),
                TermName: this.getLocalVal("sterm"),
                BookName: this.getLocalVal("sbook"),
                UnitList: unitList,
                RSName: this.getLocalVal("sscope"),
                RTName: this.getLocalVal("stype"),
                ATName: this.getLocalVal("sattachtype"),
                CTName: this.getLocalVal("screatetype")
            }
            accountQuery = JSON.stringify(accountQuery)
            param.arqName = accountQuery
            let api = this.getWSDomain() + this.getWebServiceURL4('SetAccountResourceQuery')
            this.$http.post(api, this.$qs.stringify(param)).then((res) => {
                if (typeof(callback) == 'function') {
                    callback()
                }
            })
        }

        Vue.prototype.isImg = function(url) {
            if (this.isValid(url)) {
                let index = url.indexOf('?')
                if (index > 0) {
                    url = url.substring(0, index)
                }
                let ext = url.substring(url.lastIndexOf('.')).toLowerCase()
                let arr = [".jpg", ".jpeg", ".png", ".bmp", ".gif", ".svg"]
                if (arr.indexOf(ext) >= 0) {
                    return true
                }
            }
            return false
        }

        Vue.prototype.getDownloadServer = function() {
            let acnt = this.loadAccount();
            return this.isValid(acnt) && this.isValidArray(acnt.dlserver) ? acnt.dlserver : "/";
        }

        Vue.prototype.getAttachFileUrl = function(url) {
            let ret = ""
            if (this.isValid(url)) {
                let items = url.split('|')
                let params = "";
                if (this.isValidArray(items) && items.length >= 3) {
                    ret = this.getDownloadServer() + "AttachFiles/" + items[2] + "/" + encodeURI(items[1])
                } else {
                    ret = url
                }
            }
            return $.trim(ret)
        }

        Vue.prototype.replaceUrl2OSSCDN = function(url) {
            if (url) {
                url = url.replace("forcass-res.oss-cn-qingdao.aliyuncs.com", "fcdata.forclass.net");
                url = url.replace("//AttachFiles", "/AttachFiles");
                url = url.replace("//CKLAttachFiles", "/CKLAttachFiles");
            }

            return url;
        }

    }
}
