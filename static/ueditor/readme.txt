
1 ueditor.all.js是1.4.3.3(从community工程copy过来的；对应ueditor 1.4.3.3版本)

2 ueditor.all.min.js是早期版本（从zhizhiniao工程copy过来的）

3 ueditor.all.min.xg.js（在community工程压缩之后copy过来的）
  3.1 修改了UE.plugins['paste']命令，注释掉代码：domUtils.remove(node,true)			在Webkit内核浏览器向编辑器内粘贴内容时会过滤掉空的div节点
  3.2 修改了关于在IE中使用粘贴快捷键的问题：
	  在一下代码中去掉针对IE的处理
		 domUtils.on(me.body, browser.ie || browser.opera ? 'keydown' : 'paste', function (e) {
            if ((browser.ie || browser.opera) && ((!e.ctrlKey && !e.metaKey) || e.keyCode != '86')) {

4 ueditor.config.js 根据当前环境，修改serverUrl为项目对应接口
	 var sUrl = 'http://test.ws.forclass.net'
  	 var env = localStorage.getItem('current-env')
  	 if (env == 'ckl') {
    	 	sUrl = 'http://ws.ckl.com'
  	 }
  	 if (env == 'production') {
    	 	sUrl = 'http://webservice.forclass.net'
  	 }

	 serverUrl: sUrl + '/UEditor/UEditorHandler.ashx?bucket=forcass-res',