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

        Vue.prototype.getWebServiceURL = function(m) {
            return "/ANAService.asmx/" + m
        }

        Vue.prototype.getWebServiceURL1 = function(m) {
            return "/ZoneService.asmx/" + m
        }

        Vue.prototype.getWebServiceURL2 = function(m) {
            return "/CommService.asmx/" + m
        }

        Vue.prototype.getWebServiceURL3 = function(m) {
            return "/ConsoleService.asmx/" + m
        }

        Vue.prototype.getWebServiceURL4 = function(m) {
            return "/ResourceService.asmx/" + m
        }

        Vue.prototype.getWebServiceURL5 = function(m) {
            return "/VideoService.asmx/" + m
        }

        Vue.prototype.getWebServiceURL6 = function(m) {
            return "/StService.asmx/" + m
        }

        Vue.prototype.getWebServiceURL7 = function(m) {
            return "/AccountService.asmx/" + m
        }

        Vue.prototype.getWebServiceURL8 = function(m) {
            return "/PaasService.asmx/" + m
        }
        Vue.prototype.getWebServiceURL9 = function(m) {
            return "/StudyService.asmx/" + m
        }
        Vue.prototype.getWebServiceURL10 = function(m) {
            return "/HTService.asmx/" + m
        }

        Vue.prototype.getANAFTSServiceURL = function(m) {
            return "/ANAFileTransferService.asmx/" + m
        }

        Vue.prototype.getWebServiceURL11 = function(m) {
            return "/ConsoleService_ZYBH.asmx/" + m
        }

        Vue.prototype.getWebServiceURL12 = function(m) {
            return "/VHallService.asmx/" + m
        }

        Vue.prototype.getWebServiceURL13 = function(m) {
            return "/GooseService.asmx/" + m
        }
        Vue.prototype.getWebServiceURL14 = function(m) {
            return "/QAService.asmx/" + m
        }
        Vue.prototype.getWebServiceURL15 = function(m) {
            return "/WeChatParentService.asmx/" + m
        }

        Vue.prototype.getYoYaURL = function(m) {
            let basicURL = 'http://test.fc.forclass.net/Home/'
            if (this.getCurrentEnv() == 'production') {
                basicURL = 'http://www.forclass.net/Home/'
            }
            return basicURL + m
        }

        Vue.prototype.getUrlC = function(m) {
            return this.getWSDomain() + this.getWebServiceURL3(m)
        }
        Vue.prototype.getHdUrl = function(m) {
            return this.getWSDomain() + this.getWebServiceURL10(m)
        }

        Vue.prototype.getUrlCom = function(m) {
            return this.getWSDomain() + this.getWebServiceURL2(m)
        }

        Vue.prototype.getUrlWcl = function(m) {
            return this.getWSDomain() + this.getWebServiceURL12(m)
        }

        Vue.prototype.getUrlCourse = function(m) {
            return this.getWSDomain() + this.getWebServiceURL13(m)
        }

        Vue.prototype.getUrlRes = function(m) {
            return this.getWSDomain() + this.getWebServiceURL4(m)
        }
        Vue.prototype.getUrlQa = function(m) {
            return this.getWSDomain() + this.getWebServiceURL14(m)
        }

        Vue.prototype.Bus = new Bus()

        Vue.prototype.getProfileData = function(systemAlias) {
            if (this.isValid(systemAlias) && systemAlias != '') {
                let account = this.loadAccount()
                if (this.isValid(account)) {
                    let profileInfo = this.getLocalVal(systemAlias + "_" + "profile" + "_" + account.loginname)
                    if (this.isValid(profileInfo) && profileInfo != '') {
                        return JSON.parse(profileInfo)
                    }
                }
            }
            return null
        }

        Vue.prototype.updateProfile = function(alias, profile) {
            if (this.isValid(profile) && this.isValid(alias) && alias != '') {
                let account = this.loadAccount()
                if (this.isValid(account)) {
                    let loginName = account.loginname
                    let key = alias + "_profile_" + loginName
                    let localProfile = this.getProfileData('console')
                    localProfile = localProfile ? localProfile : {}
                    Object.assign(localProfile, profile)
                    this.updateLocal(key, JSON.stringify(profile))
                }
            }
        }

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

        Vue.prototype.getRequestParamValue = function(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)")
            var ret = regex.exec(location.search)
            return ret == null ? "" : decodeURIComponent(ret[1].replace(/\+/g, " "))
        }

        Vue.prototype.getSession = function() {
            var acnt = this.loadAccount()
            if (this.isValid(acnt) &&
                this.isValid(acnt.session)) {
                return acnt.session
            }
        }

        Vue.prototype.saveAccount = function(acnt) {
            if (!this.isValidArray(acnt.dlserver))
                acnt.dlserver = "/"

            if (this.isSupportJSON()) {
                sessionStorage.account = JSON.stringify(acnt)
            }
            this.$account = acnt
            this.$store.commit({ type: 'UPDATE_ACCOUNT', account: { Account: acnt } })
        }

        Vue.prototype.savePlatform = function(platform) {
            if (this.isSupportJSON()) {
                sessionStorage.platform = JSON.stringify(platform)
            }
            var date = new Date();
            var nightDate = date.toLocaleDateString() + " " + "23:59:59";
            var span = (new Date(nightDate) - new Date()) / 1000 / 3600 / 24;
            var cookieOptions = { expires: span, path: '/' };
            var hostName = window.location.hostname;
            var domain = hostName;
            var domainArr = domain.split('.');
            var arrLength = domainArr.length;
            if (arrLength >= 2) {
                domain = domainArr[arrLength - 2] + "." + domainArr[arrLength - 1];
            }
            if (domain != 'localhost') {
                cookieOptions.domain = domain;
            }
            cookie.set('platform', platform, cookieOptions);
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
            /*
            if (this.isValid(sessionStorage.account) && this.isSupportJSON()) {
                return JSON.parse(sessionStorage.account)
            } else if (this.isValid(this.getCookie('account')) && this.isSupportJSON()) {
                return this.getCookie('account')
            }
            */

            /*if (this.isValid(this.getCookie('account')) && this.isSupportJSON()) {
                return this.getCookie('account')
            }
            return null*/
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

        Vue.prototype.isParent = function() {
            var account = this.loadAccount()
            if (this.isValid(account))
                return account.role == "家长"

            return false
        }

        Vue.prototype.isStudent = function() {
            var account = this.loadAccount()
            if (this.isValid(account))
                return account.role == "学生"

            return false
        }

        Vue.prototype.isTeacher = function() {
            var account = this.loadAccount()
            if (this.isValid(account))
                return account.role == "教师"

            return false
        }

        Vue.prototype.isValid = function(value) {
            return value != null && typeof value != 'undefined'
        }

        Vue.prototype.isValidInt = function(prop, minValue) {
            if (!this.isValid(prop) || !$.isNumeric(prop) || prop <= minValue)
                return false

            return true
        }

        Vue.prototype.isValidArray = function(arr) {
            if (!this.isValid(arr) || !this.isValid(arr.length) || arr.length < 1)
                return false
            return true
        }

        Vue.prototype.formateString = function(str) {
            return this.isValid(str) ? str : ""
        }

        Vue.prototype.getNavigationUrl = function(alias) {
            let data = this.getHostInfo(alias)
            if (this.isValid(data)) {
                let protocol = location.protocol
                if (protocol == 'https:') {
                    return protocol + "//" + data.HostName + data.Path
                } else {
                    return data.Url
                }
            }
            return ''
        }

        Vue.prototype.getNavigationHostName = function(alias) {
            let data = this.getHostInfo(alias)
            if (this.isValid(data)) {
                let protocol = location.protocol
                return protocol + "//" + data.HostName
            }
            return ''
        }

        Vue.prototype.getHostInfo = function(alias) {
            let platform = this.$store.state.platform
            if (this.isValid(platform)) {
                let hostList = platform.NavList
                let linkList = platform.InNavList
                if (this.isValid(hostList) && this.isValid(linkList)) {
                    hostList = hostList.concat(linkList)
                }
                if (this.isValidArray(hostList)) {
                    for (var i = 0; i < hostList.length; i++) {
                        var host = hostList[i]
                        let childList = host.ModList
                        if (host.Alias == alias) {
                            return host
                            break
                        }
                        if (this.isValidArray(childList)) {
                            for (let j = 0; j < childList.length; j++) {
                                let childHost = childList[j]
                                if (childHost.Alias == alias) {
                                    return childHost
                                    break
                                }
                            }
                        }
                    }
                }
            }

            return null
        }

        Vue.prototype.getResultData = function(data) {
            if (typeof data.result != 'undefined' && data.result != null) {
                return data.result
            }

            return data
        }

        Vue.prototype.getReturnCode = function(data) {
            if (this.isValid(data.ReturnCode)) {
                return data.ReturnCode
            }

            return 0
        }

        Vue.prototype.getResultNextPage = function(data) {

            if (this.isValid(data.NextPage)) {
                return data.NextPage
            }

            return 0
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

        Vue.prototype.validateSession = function(callback) {
            let loginUrl = "/Account/SignIn"
            let clientSession = this.getSession()
            if (!this.isValid(clientSession)) {
                console.log('未获取到本地session')
                    //location.href = loginUrl
                return
            } else {
                let param = { "session": clientSession, "page": 0, "hostName": window.location.hostname }
                    //axios.post(this.getWSDomain() + "/ANAService.asmx/LoginSessionJson", qs.stringify(param)).then((response) => {})
                    /*
                    axios.all([axios.post(this.getWSDomain() + "/ANAService.asmx/LoginSessionJson", qs.stringify(param))]).then(axios.spread(function(result) {

                    }))
                    return
                    */
                let api = this.getWSDomain() + this.getWebServiceURL7('LoginSessionJson')
                this.addToQueue(api, param, function(result, that) {
                        that.loadSession(result, that)
                        if (typeof(callback) == "function") {
                            callback()
                        }
                    }, this, false)
                    //this.addToQueue(this.getWebServiceURL7("LoginSessionJson"), param, this.loadSession, this, true)
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
        Vue.prototype.sendRequest = function(methodName, inputObj, handleFunc, target, next) {
            this.$axios.post(methodName,inputObj)
            .then(res=>{
                res = res.data
                handleFunc(res)
                // this.stopLoading()
            })
        }

        
        Vue.prototype.getNavList = function(callback) {
            let hostName = window.location.hostname
            let account = this.loadAccount()
            let param = {
                session: this.getSession() || null,
                hostName: hostName,
                platformNumber: '',
                platformName: null,
                role: account ? account.role : null
            }

            // this.Platform = this.getDefaultPlatformInfo()
            // this.$store.commit({ type: 'UPDATE_PLATFORM', platform: this.Platform })
            // return

            let api = this.getWSDomain() + this.getWebServiceURL8('GetPlatformSystemHost')
            this.addToQueue(api, param, function(result, that) {
                let platform = null
                if (that.isValidArray(result)) {
                    // console.log(1)
                    platform = result[0]
                        //that.savePlatform(platform)
                } else {
                    // console.log(2)
                    platform = that.getDefaultPlatformInfo()
                }
                window.document.title = platform.PlatformSystemName
                that.$store.commit({ type: 'UPDATE_PLATFORM', platform: platform })
                if (typeof(callback) == 'function') {
                    callback(platform)
                }
            }, this, false)
        }

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
        Vue.prototype.sendCPPMessage = function(data, type, className, callback, multiple, maxNum, maxSize) {
            let device = this.getSessionVal('device')

            if (type == 'scrollScreen') {
                var scrollY = data.scrollY;
                var $item = $('<scrolly>', {
                    'num': scrollY
                });
                var result = $item.prop('outerHTML');
                CallCPP(result);
            } else if (type == 'export' || type == 'open') {
                var $result = this.getDownloadXml(data, type, className);
                var result = $result.prop('outerHTML');
                CallCPP(result);
            } else if (type == 'touchmode') {
                var $item = $('<touchmode>', {
                    'enable': data
                })
                var result = $item.prop('outerHTML');
                CallCPP(result);
            } else if (type == 'upload' || type == 'uploadimage' || type == 'uploadppt' || type == 'uploaddcf' || type == 'uploadres') {
                if (device == 'androidPadCKL') {
                    let that = this
                    let baseOrigin = 'http://test.zzn.271bay.com'
                    let notifyStr = baseOrigin + '/Account/UpdateAndroidFileState'
                    let isMulti = this.isValid(multiple) ? multiple : false
                    let maxUploadNum = this.isValidInt(maxNum, 0) ? maxNum : 1
                    let maxUploadSize = this.isValid(maxSize) ? maxSize : 0
                    let singleUploadFlag = false // 保证每次只取一次有效结果，防止多次渲染
                    if (isMulti) {
                        notifyStr = baseOrigin + '/Account/UpdateFileState'
                    }
                    var currid = setInterval(function() {
                        $.post(baseOrigin + "/Account/Polling", { session: that.getSession() },
                            function(data) {
                                if (that.isValid(data) && data != '' && !singleUploadFlag) {
                                    singleUploadFlag = true
                                    if (data.indexOf("SUCCESS") == 0) { // 单文件上传
                                        clearInterval(currid);
                                        var rets = data.split('|');
                                        if (that.isValidArray(rets) && rets.length > 1) {
                                            let obj = {
                                                'uniqueName': rets[1],
                                                'url': that.replaceUrl2OSSCDN(rets[2]),
                                                'name': rets[3],
                                                'size': rets[4]
                                            }
                                            callback(obj)
                                        }
                                        $.post(baseOrigin + "/Account/ClearAndroidCache", { session: that.getSession() }, function() {});
                                    } else { // 多文件上传
                                        clearInterval(currid);
                                        let arr = eval(data)
                                        if (that.isValidArray(arr)) {
                                            let trans_arr = []
                                            for (let i = 0; i < arr.length; i++) {
                                                trans_arr.push({
                                                    'uniqueName': arr[i].UniqueName,
                                                    'url': that.replaceUrl2OSSCDN(arr[i].Url),
                                                    'name': arr[i].Name,
                                                    'size': arr[i].FileSize
                                                })
                                            }
                                            callback(trans_arr)
                                        }
                                        $.post(baseOrigin + "/Account/ClearAndroidCache", { session: that.getSession() }, function() {});
                                    }
                                }
                            });
                    }, 3000);
                    let mimeType = '*/*'
                    if (type == 'uploadimage') {
                        mimeType = 'image/*'
                    }
                    if (type == 'uploadppt') {
                        mimeType = 'ppt,pptx'
                    }
                    if (type == 'uploaddcf') {
                        mimeType = 'dcf'
                    }
                    if (type == 'uploadres') {
                        mimeType = 'image/*,ppt,pptx,dcf,doc,docx,xls,xlsx,wps,pdf,txt,mp3,mp4,mov,mpeg'
                    }

                    var androidParam = {
                        'cmd': 'fileUpload',
                        'multiple': isMulti,
                        'maxNum': maxUploadNum,
                        'mimeType': mimeType,
                        'notifyUrl': notifyStr,
                        'maxsize': maxUploadSize
                    };
                    console.log(androidParam)
                    HostApp.alert(androidParam);
                } else {
                    // pc客户端上传
                    let that = this
                    let baseOrigin = location.protocol + '//'
                    if (this.getCurrentEnv() == "production") {
                        baseOrigin += 'zzn.271bay.com'
                    } else {
                        baseOrigin += 'test.zzn.271bay.com'
                    }
                    let notifyStr = baseOrigin + '/Account/UpdateFileState'
                    let isMulti = this.isValid(multiple) ? multiple : false
                    let maxUploadNum = this.isValidInt(maxNum, 0) ? maxNum : 1
                    let maxUploadSize = this.isValid(maxSize) ? maxSize : 0
                    let singleUploadFlag = false // 保证每次只取一次有效结果，防止多次渲染
                    var currid = setInterval(function() {
                        $.post(baseOrigin + "/Account/Polling", { session: that.getSession() },
                            function(data) {
                                console.log(data)
                                if (that.isValid(data) && data != '' && !singleUploadFlag) {
                                    singleUploadFlag = true
                                    var list = $.parseJSON(data);
                                    if (that.isValidArray(list)) {
                                        clearInterval(currid);
                                        var arr = [];
                                        for (var i = 0; i < list.length; i++) {
                                            var item = list[i];
                                            var name = item.Name;
                                            var uniqueName = item.UniqueName;
                                            var size = item.FileSize;
                                            var url = item.Url;
                                            var res = {
                                                'uniqueName': uniqueName,
                                                'url': that.replaceUrl2OSSCDN(url),
                                                'name': name,
                                                'size': size
                                            };
                                            arr.push(res);
                                        }
                                        callback(arr);
                                        $.post(baseOrigin + "/Account/ClearAndroidCache", { session: that.getSession() }, function() {});
                                    }
                                }
                            });
                    }, 3000);
                    let mimeType = ''
                    let acceptStr = null
                    if (type == 'uploadimage') {
                        mimeType = 'img'
                        acceptStr = '.jpg,.jpeg,.png'
                    }
                    if (type == 'uploadppt') {
                        mimeType = '*.ppt'
                        acceptStr = '.ppt,.pptx'
                    }
                    if (type == 'uploaddcf') {
                        mimeType = '*.dcf'
                        acceptStr = '.dcf'
                    }
                    if (type == 'uploadres') {
                        mimeType = '*'
                        acceptStr = '.ppt,.pptx,.dcf,.mp3,.mp4,.mov,.mpeg,.doc,.docx,.xls,.xlsx,.wps,.pdf,.txt,.jpg,.jpeg,.gif,.png,.bmp'
                    }
                    var cppParam = {
                        'cmd': 'fileUpload',
                        'mimeType': mimeType,
                        'multiple': isMulti,
                        'accept': acceptStr,
                        'maxNum': maxUploadNum,
                        'notifyUrl': notifyStr,
                        'jsCallback': 'coursepccallback',
                        'maxsize': maxUploadSize
                    };
                    var $item = $('<upload>', cppParam)
                    var result = $item.prop('outerHTML');
                    console.log(result)
                    CallCPP(result);
                }
            } else {
                var result = null;
                if (data.constructor == Array) {
                    var $result = this.getDownloadXml(data, type, className);
                    result = $result.prop('outerHTML');
                } else if (data.constructor == Object) {
                    var $dir = $('<batchdownload>', { 'dirname': data.name });
                    var childList = data.childlist;
                    if (this.isValidArray(childList)) {
                        for (var i = 0; i < childList.length; i++) {
                            var $xml = this.getDownloadXml([childList[i]], type, data.name);
                            $xml.appendTo($dir);
                        }
                    }
                    result = $dir.prop('outerHTML');
                }
                CallCPP(result);
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

        Vue.prototype.uniqueid = function() {
            if (!Array.prototype.derangedArray) {
                Array.prototype.derangedArray = function() {
                    var a = this
                    var len = a.length;
                    for (var i = 0; i < len; i++) {
                        var end = len - 1;
                        var index = (Math.random() * (end + 1)) >> 0;
                        var t = a[end];
                        a[end] = a[index];
                        a[index] = t;
                    }
                    return a;
                }
            }
            let timestamp = new Date().getTime()
            let randomNumber = Math.floor(Math.random() * (1 - 10000000000) + 10000000000)
            let uniqueid = timestamp + randomNumber
            uniqueid = String(uniqueid).split("").derangedArray().join("")
            return uniqueid
        }
    }
}
