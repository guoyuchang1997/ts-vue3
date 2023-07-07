<template>
  <div class="apisumm">
    <div class="le">
      <div class="text" :class="{ active: num === 1 }" @click="num = 1">概述</div>
      <div class="text" :class="{ active: num === 2 }" @click="num = 2">API接口状态</div>
      <div class="text" :class="{ active: num === 3 }" @click="num = 3">启动浏览器</div>
      <div class="text" :class="{ active: num === 4 }" @click="num = 4">关闭用户的浏览器</div>
      <div class="text" :class="{ active: num === 5 }" @click="num = 5">检查启动状态</div>
    </div>
    <div class="ri">
      <div v-for="(item, index) in contentList[num]" :key="index" v-html="item"> </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const num = ref(1)
const contentList = {
  1: [
    '<a ><h3 id="outline_0" style="text-align: start;line-height:40px;font-size:24px;margin:10px auto;">功能概述</h3></a>',
    '<p style="font-size:14px;line-height:26px">云登浏览器支持本地Local API的功能，帮助用户通过程序化的方式来启动和关闭浏览器，还可以配合Selenium和Puppeteer等自动化框架来实现浏览器操作的自动化。</p>',
    '<a ><h3 id="outline_1" style="text-align: start;line-height:40px;font-size:24px;margin:10px auto;"">使用方法</h3></a>',
    `<p style="font-size:14px;line-height:26px">•检查账号管理->设置按钮中的API接口状态为正常，当前版本API接口地址: http://localhost:50213/，端口号默认为50213，以设置中看到的地址为准。<br />
        •使用脚本或者http请求工具调用本地API接口，支持启动/关闭浏览器等程序化操作<br />
        •API接口的参数类型都是字符串，POST的内容格式为JSON，非必需参数为可选参数可以不传递<br />
        •访问频次控制，所有接口都具备访问频次控制各接口每秒最多请求1次</p>`,
  ],
  2: [
    '<a ><h3 id="outline_0" style="text-align: start;line-height:40px;font-size:24px;margin:10px auto;">基础信息</h3></a>',
    `<p  style="text-align: start; font-size:14px;line-height:26px"><strong>Path：</strong> /status</p>
        <p style="text-align: start; font-size:14px;line-height:26px"><strong>Method：</strong> GET</p>
        <p style="text-align: start; font-size:14px;line-height:26px"><strong>接口描述：用于检查API接口的可用性</strong></p><a >
        <h3 id="outline_1" style="text-align: start;line-height:40px;font-size:24px;margin:10px auto;">返回数据</h3>`,
    `<div class="code-toolbar" style="background: #f5f2f0;
padding: 15px 0;font-size:14px"><pre style="text-align: start;" class="language-javascript"><code class="language-javascript">
      <span class="token punctuation">{</span>
        <span class="token string-property property">"code"</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token string-property property">"msg"</span><span class="token operator">:</span><span class="token string">"success"</span>
      <span class="token punctuation">}</span> </code></pre></div>`,
  ],
  3: [
    '<a ><h3 id="outline_0" style="text-align: start;line-height:40px;font-size:24px;margin:10px auto;">基础信息</h3></a>',
    `<div class="code-toolbar" style="background: #f5f2f0;
padding: 15px;font-size:14px"><pre class="language-sql" tabindex="0"><code class="language-sql">POST  <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>browser<span class="token operator">/</span><span class="token keyword">start</span></code></pre></div>`,
    `<p style="text-align: start;font-size:14px;line-height:26px;margin-top:15px"><span style="font-size: 14px;">接口描述：用于启动账号对应的浏览器，需要指定账号ID，启动成功后可以获取浏览器debug接口用于执行selenium和puppeteer自动化。 Selenium需要使用到对应内核版本匹配的Webdriver。启动浏览器后可在返回值中拿到对应的Webdriver的路径</span></p>`,
    `<a ><h3 id="outline_1" style="text-align: start;line-height:40px;font-size:24px;margin:10px auto;">请求参数</h3></a>`,
    `<p class="code-box" style="background: #f5f2f0; padding: 15px; font-size: 14px">
      <code class="language-javascript">
        <span>{ </span><br />
        <span style="padding-left: 10px">"account_id": "testAccountId", //账号ID </span><br />
        <span style="padding-left: 10px">"anonymous": "1", //匿名 </span><br />
        <span style="padding-left: 10px">"name": "TestAccountName", //账号名称 </span><br />
        <span style="padding-left: 10px">"platform": "platform", //平台 </span><br />
        <span style="padding-left: 10px"
          >"bypass_list": "*.baidu.com,*.hao123.com", //绕过列表 </span
        ><br />
        <span style="padding-left: 10px"
          >"open_urls": ["https://www.baidu.com"], //打开的URL列表 </span
        ><br />
        <span style="padding-left: 10px">"proxy": { </span><br />
        <span style="padding-left: 10px">//代理设置 </span><br />
        <span style="padding-left: 20px">"protocol": "socks5", //协议 </span><br />
        <span style="padding-left: 20px">"host": "192.168.0.106", // 主机 </span><br />
        <span style="padding-left: 20px"> "port": 10808 //端口 </span><br />
        <span style="padding-left: 10px">}, </span><br />
        <span style="padding-left: 10px">"fingerprint": { </span><br />
        <span style="padding-left: 20px"> //浏览器指纹 </span><br /><span
          style="padding-left: 20px"
        >
          "userAgent": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like
          Gecko) Chrome/108.0.5359.21 Safari/537.36", //用户代理 </span
        ><br /><span style="padding-left: 20px"> "timezone": "America/Marigot", //时区 </span
        ><br /><span style="padding-left: 20px">
          "languages": ["zh-CN", "zh", "en-US", "en"], //语言 </span
        ><br /><span style="padding-left: 20px"> "dnt": "1", //不追踪表头 </span><br />
        <span style="padding-left: 20px"> "screenSize": "2560x1440", //屏幕尺寸 </span
        ><br /><span style="padding-left: 20px"> "devicePixelRatio": 1.5, //设备像素比 </span
        ><br /><span style="padding-left: 20px"> "cpu": 12, //CPU核数 </span><br /><span
          style="padding-left: 20px"
        >
          "deviceMemory": 8, //设备内存 </span
        ><br /><span style="padding-left: 20px"> "battery": 1, //电池状态 </span><br />

        <span style="padding-left: 20px"> "plugins": [ </span><br />
        <span style="padding-left: 30px"> //插件列表 </span><br /><span
          style="padding-left: 30px"
        >
          { </span
        ><br /><span style="padding-left: 30px">
          "name": "WebKit built-in PDF", //插件名称 </span
        ><br /><span style="padding-left: 30px">
          "filename": "internal-pdf-viewer", //插件文件名 </span
        ><br /><span style="padding-left: 30px">
          "description": "Portable Document Format", //插件描述 </span
        ><br /><span style="padding-left: 30px"> "version": "", //插件版本 </span><br /><span
          style="padding-left: 30px"
        >
          "mimeTypes": "application/pdf pdf,text/pdf pdf" // 插件支持的 MIME 类型 </span
        ><br /><span style="padding-left: 30px"> }, </span><br /><span
          style="padding-left: 30px"
        >
          { </span
        ><br /><span style="padding-left: 30px"> "name": "Microsoft Edge PDF Viewer", </span
        ><br /><span style="padding-left: 30px"> "filename": "internal-pdf-viewer", </span
        ><br /><span style="padding-left: 30px">
          "description": "Portable Document Format", </span
        ><br /><span style="padding-left: 30px"> "version": "", </span><br /><span
          style="padding-left: 30px"
        >
          "mimeTypes": "application/pdf pdf,text/pdf pdf" </span
        ><br /><span style="padding-left: 30px"> }, </span><br /><span
          style="padding-left: 30px"
        >
          { </span
        ><br /><span style="padding-left: 30px"> "name": "Chromium PDF Viewer", </span
        ><br /><span style="padding-left: 30px"> "filename": "internal-pdf-viewer", </span
        ><br /><span style="padding-left: 30px">
          "description": "Portable Document Format", </span
        ><br /><span style="padding-left: 30px"> "version": "", </span><br /><span
          style="padding-left: 30px"
        >
          "mimeTypes": "application/pdf pdf,text/pdf pdf" </span
        ><br /><span style="padding-left: 30px"> }, </span><br /><span
          style="padding-left: 30px"
        >
          { </span
        ><br /><span style="padding-left: 30px"> "name": "Chrome PDF Viewer", </span><br /><span
          style="padding-left: 30px"
        >
          "filename": "internal-pdf-viewer", </span
        ><br /><span style="padding-left: 30px">
          "description": "Portable Document Format", </span
        ><br /><span style="padding-left: 30px"> "version": "", </span><br /><span
          style="padding-left: 30px"
        >
          "mimeTypes": "application/pdf pdf,text/pdf pdf" </span
        ><br /><span style="padding-left: 30px"> } </span><br /><span
          style="padding-left: 20px"
        >
          ], </span
        ><br />
        <span style="padding-left: 20px"> "videoInputs": [ </span><br />
        <span style="padding-left: 30px"> // 视频输入设备列表 </span><br /><span
          style="padding-left: 30px"
        >
          { </span
        ><br /><span style="padding-left: 40px"> "deviceId": "", //设备ID </span><br /><span
          style="padding-left: 40px"
        >
          "label": "", //设备标签 </span
        ><br /><span style="padding-left: 40px">
          "groupId": "2c401233e6e341f7a06c5f02c17e96e5e17b44a61a654287a267e948961043fb"
          //设备组ID </span
        ><br /><span style="padding-left: 30px"> } </span><br /><span
          style="padding-left: 20px"
        >
          ], </span
        ><br />
        <span style="padding-left: 20px"> "audioInputs": [ </span><br /><span
          style="padding-left: 30px"
        >
          //音频输入设备列表 </span
        ><br /><span style="padding-left: 30px"> { </span><br /><span
          style="padding-left: 40px"
        >
          "deviceId": "", </span
        ><br /><span style="padding-left: 40px"> "label": "", </span><br /><span
          style="padding-left: 40px"
        >
          "groupId": "3c9917157d95451f826c0f13a23dff292797fcc745fe4bd3adef8067eada5c47" </span
        ><br /><span style="padding-left: 30px"> } </span><br /><span
          style="padding-left: 20px"
        >
          ], </span
        ><br />
        <span style="padding-left: 20px"> "audioOutputs": [ </span><br /><span
          style="padding-left: 30px"
        >
          //音频输出设备列表 </span
        ><br /><span style="padding-left: 30px"> { </span><br /><span
          style="padding-left: 40px"
        >
          "deviceId": "", </span
        ><br /><span style="padding-left: 40px"> "label": "", </span><br /><span
          style="padding-left: 40px"
        >
          "groupId": "3c9917157d95451f826c0f13a23dff292797fcc745fe4bd3adef8067eada5c47" </span
        ><br /><span style="padding-left: 30px"> } </span><br /><span
          style="padding-left: 20px"
        >
          ], </span
        ><br />
        <span style="padding-left: 20px">
          "speeches": ["Clayton", "Jasper"], //文字转语音引擎列表 </span
        ><br />
        <span style="padding-left: 20px"> "bluetoothDisabled": 1, //蓝牙是否禁用 </span
        ><br /><span style="padding-left: 20px">
          "webglVendor": "Microsoft", //WebGL供应商 </span
        ><br /><span style="padding-left: 20px">
          "webglRenderer": "ANGLE(Intel(R) UHD Graphics 750 Direct3D11 vs_5_0 ps_5_0)",
          //WebGL渲染器 </span
        ><br /><span style="padding-left: 20px"> "webrtcMode": "Forbidden", //WebRTC模式 </span
        ><br /><span style="padding-left: 20px">
          "webrtcPublicIp": "33.44.55.88", //WebRTC公网IP </span
        ><br /><span style="padding-left: 20px"> "webrtcInnerIp": "", // WebRTC内网IP </span
        ><br /><span style="padding-left: 20px"> </span><br /><span style="padding-left: 20px">
          "canvasPerturb": 1, // Canvas扰动 </span
        ><br /><span style="padding-left: 20px"> "canvasFont": 1, //Canvas字体 </span
        ><br /><span style="padding-left: 20px"> </span><br /><span style="padding-left: 20px">
          "webglEnabled": 1, // WebGL是否启用 </span
        ><br /><span style="padding-left: 20px"> "webglProtected": 1, // WebGL是否受保护 </span
        ><br /><span style="padding-left: 20px"> </span><br /><span style="padding-left: 20px">
          "audio": 1, //音频支持 </span
        ><br /><span style="padding-left: 20px"> "textMesure": 1, //文本测量 </span><br /><span
          style="padding-left: 20px"
        >
          "clientRects": 1, //元素尺寸 </span
        ><br /><span style="padding-left: 20px"> </span><br /><span style="padding-left: 20px">
          "allowPortScanning": 1, //是否允许端口扫描 </span
        ><br /><span style="padding-left: 20px">
          "allowScanningPorts": "9784,7599" //允许扫描的端口 </span
        ><br /><span style="padding-left: 10px">} </span><br />
        <span style="padding-left: 0">}</span><br />
      </code>
    </p>`,

    `<a ><h3 id="outline_0" style="text-align: start;line-height:40px;font-size:24px;margin:10px auto;">返回数据</h3></a>`,
    `<p class="code-box" style="background: #f5f2f0; padding: 15px;font-size:14px"><code class="language-javascript">
        <span class="token comment">//执行成功</span><br />
        <span class="token punctuation">{</span><br />
          <span class="token string-property property" style="padding-left:10px">"code"</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><br />
          <span class="token string-property property" style="padding-left:10px">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span><br />

            <span style="padding-left:20px">"ws":{</span><br />
            <span style="padding-left:30px">"selenium":"127.0.0.1:xxxx",    //浏览器debug接口，可用于selenium自动化</span><br />
            <span style="padding-left:30px">"puppeteer":"ws://127.0.0.1:xxxx/devtools/browser/xxxxxx"   //浏览器debug接口，可用于puppeteer自动化</span><br />
            <span style="padding-left:20px">}</span><br />
            <span style="padding-left:20px">"debuggingPort": "xxxx", // debug端口</span><br />
            <span style="padding-left:20px">"webdriver": "C:\\xxxx\\chromedriver.exe" // webdriver路径</span><br />
            <span class="token punctuation" style="padding-left:10px">}</span><span class="token punctuation">,</span><br />

          <span class="token string-property property" style="padding-left:10px">"msg"</span><span class="token operator">:</span><span class="token string">"success"</span><br />

        <span class="token punctuation">}</span><br />
        <span class="token comment">//执行失败</span><br />
        <span class="token punctuation">{</span><br />
          <span class="token string-property property" style="padding-left:10px">"code"</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><br />
          <span class="token string-property property" style="padding-left:10px">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><br />
          <span class="token string-property property" style="padding-left:10px">"msg"</span><span class="token operator">:</span><span class="token string">"failed"</span><br />
        <span class="token punctuation">}</span>
              </code></p>`,
  ],
  4: [
    `<a ><h3 id="outline_0" style="text-align: start;line-height:40px;font-size:24px;margin:10px auto;">基础信息</h3></a>`,
    `<p class="code-box" style="background: #f5f2f0; padding: 15px;font-size:14px">GET  /api/v1/browser/stop</p>`,
    `<p style="text-align: start; font-size:14px;line-height:26px;margin-top:15px">接口描述：用于关闭账号对应的浏览器，需要指定账号ID</p>`,
    `<a ><h3 id="outline_0" style="text-align: start;line-height:40px;font-size:24px;margin:10px auto;">请求参数</h3></a>`,
    `<h4 style="text-align: start;font-size:16px;line-height:26px;margin-bottom:15px">Query 非必需参数可以不传递</h4>`,
    `<table style="width: 100%; text-align: start; border:1px solid #ccc;overflow: hidden;">
        <tbody>
          <tr>
            <th colspan="1" rowspan="1" width="155.81"><span style="font-size: 12px;padding:10px 0;padding-left:10px;line-height:30px">参数名称</span></th>
            <th colspan="1" rowspan="1" width="37.64"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">必需</span></th>
            <th colspan="1" rowspan="1" width="63"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">默认值</span></th>
            <th colspan="1" rowspan="1" width="100"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">示例</span></th>
            <th colspan="1" rowspan="1" width="214.5"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">说明</span></th>


          </tr>
          <tr style="border-top:1px solid #ccc">
            <td colspan="1" rowspan="1" width="auto"><span style="font-size: 12px;padding:10px 0;padding-left:10px;line-height:30px">account_id</span></td>
            <td colspan="1" rowspan="1" width="auto"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">是</span></td>
            <td colspan="1" rowspan="1" width="auto"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">-</span></td>
            <td colspan="1" rowspan="1" width="auto"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">123</span></td>
            <td colspan="1" rowspan="1" width="auto"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">账号ID，账号导入成功后生成的唯一ID</span></td>

          </tr>

        </tbody>
      </table>`,
    `<a ><h3 id="outline_0" style="text-align: start;line-height:40px;font-size:24px;margin:10px auto;">返回数据</h3></a>`,
    `<p class="code-box" style="background: #f5f2f0; padding: 15px;font-size:14px"><code class="language-javascript">
        <span class="token comment">//执行成功</span><br />
        <span class="token punctuation">{</span><br />
          <span class="token string-property property" style="padding-left:10px">"code"</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><br />
          <span class="token string-property property" style="padding-left:10px">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><br />
          <span class="token string-property property" style="padding-left:10px">"msg"</span><span class="token operator">:</span><span class="token string">"success"</span><br />

        <span class="token punctuation">}</span><br />
        <span class="token comment">//执行失败</span><br />
        <span class="token punctuation">{</span><br />
          <span class="token string-property property" style="padding-left:10px">"code"</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><br />
          <span class="token string-property property" style="padding-left:10px">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><br />
          <span class="token string-property property" style="padding-left:10px">"msg"</span><span class="token operator">:</span><span class="token string">"failed"</span><br />
        <span class="token punctuation">}</span>
              </code></p>`,
  ],
  5: [
    `<a ><h3 id="outline_0" style="text-align: start;line-height:40px;font-size:24px;margin:10px auto;">基础信息</h3></a>`,
    `<p class="code-box" style="background: #f5f2f0; padding: 15px;font-size:14px">GET  /api/v1/browser/status</p>`,
    `<p style="text-align: start; font-size:14px;line-height:26px;margin-top:15px">接口描述：用于账号浏览器的启动状态，需要指定账号ID</p>`,
    `<a ><h3 id="outline_0" style="text-align: start;line-height:40px;font-size:24px;margin:10px auto;">请求参数</h3></a>`,
    `<h4 style="text-align: start;font-size:16px;line-height:26px;margin-bottom:15px">Query 非必需参数可以不传递</h4>`,
    `<table style="width: 100%; text-align: start; border:1px solid #ccc;overflow: hidden;">
        <tbody>
          <tr>
            <th colspan="1" rowspan="1" width="155.81"><span style="font-size: 12px;padding:10px 0;padding-left:10px;line-height:30px">参数名称</span></th>
            <th colspan="1" rowspan="1" width="37.64"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">必需</span></th>
            <th colspan="1" rowspan="1" width="63"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">默认值</span></th>
            <th colspan="1" rowspan="1" width="100"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">示例</span></th>
            <th colspan="1" rowspan="1" width="214.5"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">说明</span></th>

          </tr>
          <tr style="border-top:1px solid #ccc">
            <td colspan="1" rowspan="1" width="auto"><span style="font-size: 12px;padding:10px 0;padding-left:10px;line-height:30px">account_id</span></td>
            <td colspan="1" rowspan="1" width="auto"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">是</span></td>
            <td colspan="1" rowspan="1" width="auto"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">-</span></td>
            <td colspan="1" rowspan="1" width="auto"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">123</span></td>
            <td colspan="1" rowspan="1" width="auto"><span style="font-size: 12px;border-left:1px solid #ccc;padding:10px 0;padding-left:10px;line-height:30px">账号ID，账号导入成功后生成的唯一ID</span></td>

          </tr>

        </tbody>
      </table>`,
    `<a ><h3 id="outline_0" style="text-align: start;line-height:40px;font-size:24px;margin:10px auto;">返回数据</h3></a>`,
    `<p class="code-box" style="background: #f5f2f0; padding: 15px;font-size:14px"><code class="language-javascript">
        <span class="token comment">//执行成功</span><br />
        <span class="token punctuation">{</span><br />
          <span class="token string-property property" style="padding-left:10px">"code"</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><br />
          <span class="token string-property property" style="padding-left:10px">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span><br />
            <span style="padding-left:20px">"status": "Active",   // 浏览器已打开运行中 "Active" ，未打开则是 "Inactive"</span><br />
            <span style="padding-left:20px">"ws":{</span><br />
              <span style="padding-left:30px">"selenium":"127.0.0.1:xxxx",    //浏览器debug接口，可用于selenium自动化</span><br />
                <span style="padding-left:30px">"puppeteer":"ws://127.0.0.1:xxxx/devtools/browser/xxxxxx"   //浏览器debug接口，可用于puppeteer自动化</span><br />
                  <span style="padding-left:20px">}</span><br />
            <span class="token punctuation" style="padding-left:10px">}</span><span class="token punctuation">,</span><br />
          <span class="token string-property property" style="padding-left:10px">"msg"</span><span class="token operator">:</span><span class="token string">"success"</span><br />

        <span class="token punctuation">}</span><br />
        <span class="token comment">//执行失败</span><br />
        <span class="token punctuation">{</span><br />
          <span class="token string-property property" style="padding-left:10px">"code"</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><br />
          <span class="token string-property property" style="padding-left:10px">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><br />
          <span class="token string-property property" style="padding-left:10px">"msg"</span><span class="token operator">:</span><span class="token string">"failed"</span><br />
        <span class="token punctuation">}</span>
              </code></p>`,
  ],
}
</script>

<style scoped lang="less">
.apisumm {
  // height: 481px;
  height: calc(100vh - 517px);
  background: #ffffff;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  display: flex;
  margin-bottom: 10px;
  .le {
    width: 200px;
    height: 100%;
    background: #f7f9ff;
    border-radius: 0px 0px 0px 0px;
    padding: 10px;
    .text {
      cursor: pointer;
      text-align: center;
      width: 180px;
      height: 40px;
      line-height: 40px;

      border-radius: 8px 8px 8px 8px;
      &.active {
        background: #2d5aff !important;
        color: #fff;
      }
    }
    .text:hover {
      background: rgba(45, 90, 255, 0.1);
    }
  }
  .ri {
    width: 1410px;
    height: 100%;
    overflow-y: auto;
    border: 1px solid #eeeeee;
    border-left: unset;
    padding: 10px;
  }
}
</style>
