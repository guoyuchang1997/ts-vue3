<template>
  <div class="Expert">
    <slot name="account"></slot>
    <div class="conten">
      <div class="le">浏览器内核</div>
      <div class="ri">
        <img src="@/assets/img/account/chrome.png" alt="" />&nbsp;Chrome
        <el-select v-model="group" style="width: 120px" class="m-2 fs-xs" placeholder="选择模式">
          <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" /> </el-select>
      </div>
    </div>
    <div class="conten contentop">
      <div class="le">操作系统</div>
      <div class="ri foucsicons flex" :class="{ foucsicon: Systemwindows }">
        <el-select v-model="group" style="width: 160px" class="m-2 fs-xs" placeholder="选择模式">
          <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" />
          <template #prefix>
            <div class="flex" @click.stop="Systemwindows = !Systemwindows">
              <div class="checker"> <span :class="{ active: Systemwindows }"></span> </div>&nbsp;
              <i class="iconfont icon-windows1 fontclolricon"></i>
            </div>
          </template>
        </el-select>
        <el-select v-model="group" style="width: 160px" class="m-2 fs-xs" placeholder="选择模式">
          <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" />
          <template #prefix>
            <div class="flex" @click.stop="Systemwindows = !Systemwindows">
              <div class="checker"> <span :class="{ active: Systemwindows }"></span> </div>&nbsp;
              <i class="iconfont icon-windows1 fontclolricon"></i>
            </div>
          </template>
        </el-select>
        <el-select v-model="group" style="width: 160px" class="m-2 fs-xs" placeholder="选择模式">
          <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" />
          <template #prefix>
            <div class="flex" @click.stop="Systemwindows = !Systemwindows">
              <div class="checker"> <span :class="{ active: Systemwindows }"></span> </div>&nbsp;
              <i class="iconfont icon-windows1 fontclolricon"></i>
            </div>
          </template>
        </el-select>
        <el-select v-model="group" style="width: 160px" class="m-2 fs-xs" placeholder="选择模式">
          <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" />
          <template #prefix>
            <div class="flex" @click.stop="Systemwindows = !Systemwindows">
              <div class="checker"> <span :class="{ active: Systemwindows }"></span> </div>&nbsp;
              <i class="iconfont icon-windows1 fontclolricon"></i>
            </div>
          </template>
        </el-select>
        <el-select v-model="group" style="width: 160px" class="m-2 fs-xs" placeholder="选择模式">
          <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" />
          <template #prefix>
            <div class="flex" @click.stop="Systemwindows = !Systemwindows">
              <div class="checker"> <span :class="{ active: Systemwindows }"></span> </div>&nbsp;
              <i class="iconfont icon-windows1 fontclolricon"></i>
            </div>
          </template>
        </el-select>
        <el-select v-model="group" style="width: 160px" class="m-2 fs-xs" placeholder="选择模式">
          <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" />
          <template #prefix>
            <div class="flex" @click.stop="Systemwindows = !Systemwindows">
              <div class="checker"> <span :class="{ active: Systemwindows }"></span> </div>&nbsp;
              <i class="iconfont icon-windows1 fontclolricon"></i>
            </div>
          </template>
        </el-select>
      </div>
    </div>

    <div class="conten">
      <div class="le">UA版本</div>
      <div class="ri">
        <el-select v-model="UA" multiple collapse-tags collapse-tags-tooltip :max-collapse-tags="3" style="width: 480px"
          class="m-2 fs-xs" placeholder="选择UA版本">
          <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <span class="text">基于IP生成对应的语言</span>
      </div>
    </div>
    <div class="conten">
      <div class="le">UA</div>
      <div class="ri">
        <div class="uabai">
          <el-input v-model="from.UAinfo" class="baimingdan" type="textarea" show-word-limit></el-input>
        </div>
      </div>
    </div>
    <div class="conten" :class="{ contens: Languageselect === 1 }">
      <div class="le">语言</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: Languageselect === 0 }" @click="Languageselect = 0">自动</li>
          <li :class="{ tab_title_active: Languageselect === 1 }" @click="Languageselect = 1"> 自定义 </li>
        </ul>
        <span class="text">{{ Languagetext[Languageselect] }}</span>
      </div>
    </div>
    <div v-if="Languageselect === 1" class="conten">
      <div class="le"></div>
      <div class="ri flex">
        <el-select v-model="Language" class="m-2" placeholder="选择字体">
          <el-option v-for="item in Languagelist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <div class="ziti">设置字体</div>
      </div>
    </div>
    <div class="conten" :class="{ contens: screenLanguageselect === 1 }">
      <div class="le">界面语言</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: screenLanguageselect === 0 }" @click="screenLanguageselect = 0">自动</li>
          <li :class="{ tab_title_active: screenLanguageselect === 1 }" @click="screenLanguageselect = 1"> 自定义 </li>
        </ul>
        <span class="text">{{ screenLanguagetext[screenLanguageselect] }}</span>
      </div>
    </div>
    <div v-if="screenLanguageselect === 1" class="conten">
      <div class="le"></div>
      <div class="ri flex">
        <el-select v-model="screenLanguage" class="m-2" placeholder="选择界面语言">
          <el-option v-for="item in screenLanguagelist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div>

    <div class="conten" :class="{ contens: Timezoneselect === 1 }">
      <div class="le">时区</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: Timezoneselect === 0 }" @click="Timezoneselect = 0">自动</li>
          <li :class="{ tab_title_active: Timezoneselect === 1 }" @click="Timezoneselect = 1"> 自定义 </li>
        </ul>
        <span class="text">{{ Timezonetext[Timezoneselect] }}</span>
      </div>
    </div>
    <div v-if="Timezoneselect === 1" class="conten">
      <div class="le"></div>
      <div class="ri flex">
        <el-select v-model="Timezone" class="m-2" placeholder="选择界面语言">
          <el-option v-for="item in Timezonelist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div>
    <div class="conten contens">
      <div class="le">地理位置</div>
      <div class="ri">
        <ul class="tab_title">
          <li @click="num = 1" :class="{ tab_title_active: num == 1 }">询问</li>
          <li @click="num = 2" :class="{ tab_title_active: num == 2 }">允许 </li>
          <li @click="num = 3" :class="{ tab_title_active: num == 3 }">禁止 </li>
        </ul>
      </div>
    </div>
    <div class="conten contens">
      <div class="le"></div>
      <div class="ri">
        <div class="ippipei"><el-radio-group v-model="Geographyip" class="ml-4">
            <el-radio label="0" size="large"><span class="fs-xs">IP匹配</span></el-radio>
            <el-radio label="1" size="large"><span class="fs-xs">自定义</span></el-radio>
          </el-radio-group></div>
      </div>
    </div>
    <div v-if="Geographyip === '1'" class="conten">
      <div class="le"><span class="red">*</span>经度</div>
      <div class="ri">
        <el-input v-model="from.UAinfo" style="width: 320px" placeholder="请填写经度，示例：-40.123" class="webgl"></el-input>
      </div>
    </div>
    <div v-if="Geographyip === '1'" class="conten">
      <div class="le"><span class="red">*</span>纬度</div>
      <div class="ri">
        <el-input v-model="from.UAinfo" style="width: 320px" placeholder="请填写纬度，示例：30.123" class="webgl"></el-input>
      </div>
    </div>
    <div v-if="Geographyip === '1'" class="conten">
      <div class="le"><span class="red">*</span>精度（米）</div>
      <div class="ri">
        <el-input v-model="from.UAinfo" style="width: 320px" placeholder="请填写精度，示例：10-5000" class="webgl"></el-input>
      </div>
    </div>
    <!-- Window 隐藏 -->
    <!-- <div class="conten contens">
      <div class="le">Windows</div>
      <div class="ri">
        <ul class="tab_title">
          <li @click="num = 1" :class="{ tab_title_active: num == 1 }">Windows10</li>
          <li @click="num = 2" :class="{ tab_title_active: num == 2 }"> Windows8.1 </li>
        </ul>
        <span class="text"></span>
      </div>
    </div>
    <div class="conten">
      <div class="le"></div>
      <div class="ri">
        <el-input v-model="from.Windows" type="textarea" show-word-limit></el-input>
      </div>
    </div> -->

    <!-- <div class="conten">
      <div class="le"></div>
      <div class="ri">
        <el-select v-model="Timezone" class="m-2" placeholder="请选择时区">
          <el-option v-for="item in Timezonelist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div> -->

    <div class="conten">
      <div class="le">屏幕分辨率</div>
      <div class="ri">
        <el-select style="width: 380px" v-model="ScreenResolution" class="m-2" placeholder="选择分辨率">
          <el-option v-for="item in ScreenResolutionlist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div>
    <div class="conten">
      <div class="le">浏览器窗口大小</div>
      <div class="ri">
        <el-select v-model="windowsize" class="m-2" placeholder="选择窗口大小">
          <el-option v-for="item in windowsizelist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div>

    <!-- <el-divider></el-divider>
    <div class="h3"> 指纹隐私保护配置 </div> -->
    <div class="conten" :class="{ contens: typeface === 1 }">
      <div class="le">字体列表</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: typeface === 0 }" @click="typeface = 0">隐私</li>
          <li :class="{ tab_title_active: typeface === 1 }" @click="typeface = 1">真实</li>
        </ul>
        <span class="text">{{ typefacetext[typeface] }}</span>
      </div>
    </div>
    <div v-if="typeface === 1" class="conten">
      <div class="le"></div>
      <div class="ri flex flextop">
        <div class="textear">
          <div class="fs-xs">123123</div>
          <div class="fs-xs">123123</div>
          <div class="fs-xs">123123</div>
          <div class="fs-xs">123123</div>
          <div class="fs-xs">123123</div>
          <div class="fs-xs">123123</div>
          <div class="fs-xs">123123</div>
          <div class="fs-xs">123123</div>
          <div class="fs-xs">123123</div>
          <div class="fs-xs">123123</div>
          <div class="fs-xs">123123</div>
          <div class="fs-xs">123123</div>
          <div class="fs-xs">123123</div>
          <div class="fs-xs">123123</div>
          <div class="fs-xs">123123</div>
        </div>
        <div class="ziti">设置字体</div>
      </div>
    </div>
    <div class="conten">
      <div class="le">字体指纹</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: Fontfingerprint === 0 }" @click="Fontfingerprint = 0">隐私</li>
          <li :class="{ tab_title_active: Fontfingerprint === 1 }" @click="Fontfingerprint = 1"> 真实 </li>
        </ul>
        <span class="text">{{ Fontfingerprinttext[Fontfingerprint] }}</span>
      </div>
    </div>
    <div class="conten">
      <div class="le">WebRTC</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: webRTC === 0 }" @click="webRTC = 0">隐私</li>
          <li :class="{ tab_title_active: webRTC === 1 }" @click="webRTC = 1">替换</li>
          <li :class="{ tab_title_active: webRTC === 2 }" @click="webRTC = 2">真实</li>
          <li :class="{ tab_title_active: webRTC === 3 }" @click="webRTC = 3">禁用</li>
        </ul>
        <span class="text">{{ webRTCtext[webRTC] }}</span>
      </div>
    </div>
    <div v-if="webRTC === 1" class="conten">
      <div class="le">内网ip</div>
      <div class="ri">
        <el-input v-model="from.UAinfo" style="width: 320px" placeholder="请填写内网ip" class="webgl">
          <template #suffix> <i class="iconfont icon-suiji" style="color: #2b53e5"></i> </template></el-input>
      </div>
    </div>
    <div class="conten" :class="{ contens: Canvas === 1 }">
      <div class="le">Canvas</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: Canvas === 0 }" @click="Canvas = 0">隐私</li>
          <li :class="{ tab_title_active: Canvas === 1 }" @click="Canvas = 1"> 自定义 </li>
        </ul>
        <span class="text">{{ Canvastext[Canvas] }}</span>
      </div>
    </div>
    <div v-if="Canvas === 1" class="conten">
      <div class="le"></div>
      <div class="ri">
        <div class="Canvas ippipei"><el-radio-group v-model="IpNormal" class="ml-4">
            <el-radio label="1" size="large"><span class="fs-xs">倾向一致性</span></el-radio>
            <el-radio label="2" size="large"><span class="fs-xs">倾向随机性</span></el-radio>
          </el-radio-group></div>
      </div>
    </div>
    <div class="conten">
      <div class="le">WebGl</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: WebGl === 0 }" @click="WebGl = 0">隐私</li>
          <li :class="{ tab_title_active: WebGl === 1 }" @click="WebGl = 1"> 真实 </li>
        </ul>
        <span class="text">{{ WebGltext[WebGl] }}</span>
      </div>
    </div>
    <div class="conten">
      <div class="le">WebGl info</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: Webinfo === 0 }" @click="Webinfo = 0">自定义</li>
          <li :class="{ tab_title_active: Webinfo === 1 }" @click="Webinfo = 1"> 真实 </li>
          <li :class="{ tab_title_active: Webinfo === 2 }" @click="Webinfo = 2"> 关闭 </li>
        </ul>
        <span class="text">{{ Webinfotext[Webinfo] }}</span>
      </div>
    </div>
    <div v-if="Webinfo === 0" class="conten">
      <div class="le">WebGL厂商</div>
      <div class="ri">
        <el-input style="width: 480px" v-model="from.UAinfo" class="webgl"></el-input>
      </div>
    </div>
    <div v-if="Webinfo === 0" class="conten">
      <div class="le">WebGL渲染</div>
      <div class="ri">
        <el-input style="width: 480px" v-model="from.UAinfo" class="webgl">
          <template #suffix>
            <i class="iconfont icon-suiji" style="color: #2b53e5"></i>
          </template>
        </el-input>
      </div>
    </div>
    <div class="conten">
      <div class="le">AudioContext</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: AudioContext === 0 }" @click="AudioContext = 0">隐私</li>
          <li :class="{ tab_title_active: AudioContext === 1 }" @click="AudioContext = 1">真实 </li>
        </ul>
        <span class="text">{{ AudioContexttext[AudioContext] }}</span>
      </div>
    </div>
    <div class="conten">
      <div class="le">SpeechVoices</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: SpeechVoices === 0 }" @click="SpeechVoices = 0">隐私</li>
          <li :class="{ tab_title_active: SpeechVoices === 1 }" @click="SpeechVoices = 1">真实 </li>
        </ul>
        <span class="text">{{ SpeechVoicestext[SpeechVoices] }}</span>
      </div>
    </div>
    <div class="conten">
      <div class="le">媒体设备</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: Mediaequipment === 0 }" @click="Mediaequipment = 0">隐私</li>
          <li :class="{ tab_title_active: Mediaequipment === 1 }" @click="Mediaequipment = 1">真实 </li>
        </ul>
        <span class="text">{{ Mediaequipmenttext[Mediaequipment] }}</span>
      </div>
    </div>
    <div class="conten">
      <div class="le">CPU参数</div>
      <div class="ri">
        <el-select v-model="Resolution" class="m-2" placeholder="请填写CPU参数">
          <el-option v-for="item in Resolutionlist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <span class="text">使用您设置的CPU核心数</span>
      </div>
    </div>
    <div class="conten">
      <div class="le">内存参数</div>
      <div class="ri">
        <el-select v-model="Resolution" class="m-2" placeholder="请填写内存参数">
          <el-option v-for="item in Resolutionlist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <span class="text">使用您设置的CPU核心数</span>
      </div>
    </div>
    <div class="conten" :class="{ contens: Devicename === 0 }">
      <div class="le">设备名称</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: Devicename === 0 }" @click="Devicename = 0">自定义</li>
          <li :class="{ tab_title_active: Devicename === 1 }" @click="Devicename = 1">关闭 </li>
        </ul>
        <span class="text">{{ Devicenametext[Devicename] }}</span>
      </div>
    </div>
    <div v-if="Devicename === 0" class="conten">
      <div class="le"></div>
      <div class="ri">
        <el-input style="width: 480px" v-model="from.UAinfo" class="webgl">
          <template #suffix>
            <i class="iconfont icon-suiji" style="color: #2b53e5"></i>
          </template>
        </el-input>
      </div>
    </div>
    <div class="conten" :class="{ contens: Maxaddress === 0 }">
      <div class="le">MAC地址</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: Maxaddress === 0 }" @click="Maxaddress = 0">自定义</li>
          <li :class="{ tab_title_active: Maxaddress === 1 }" @click="Maxaddress = 1">关闭 </li>
        </ul>
        <span class="text">{{ Maxaddresstext[Maxaddress] }}</span>
      </div>
    </div>
    <div v-if="Maxaddress === 0" class="conten">
      <div class="le"></div>
      <div class="ri">
        <el-input style="width: 480px" v-model="from.UAinfo" class="webgl">
          <template #suffix>
            <i class="iconfont icon-suiji" style="color: #2b53e5"></i>
          </template>
        </el-input>
      </div>
    </div>
    <div class="conten">
      <div class="le">硬件加速</div>
      <div class="ri">
        <ul class="tab_title">
          <li @click="num = 1" :class="{ tab_title_active: num == 1 }">默认</li>
          <li @click="num = 2" :class="{ tab_title_active: num == 2 }"> 自定义 </li>
          <li @click="num = 3" :class="{ tab_title_active: num == 3 }"> 关闭 </li>
        </ul>
        <span class="text"></span>
      </div>
    </div>
    <div class="conten">
      <div class="le">蓝牙</div>
      <div class="ri">
        <ul class="tab_title">
          <li @click="num = 1" :class="{ tab_title_active: num == 1 }">关闭</li>
          <li @click="num = 2" :class="{ tab_title_active: num == 2 }"> 开启 </li>
        </ul>
        <span class="text"></span>
      </div>
    </div>
    <div class="conten">
      <div class="le">Donottrack</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: Donottrack === 0 }" @click="Donottrack = 0">默认</li>
          <li :class="{ tab_title_active: Donottrack === 1 }" @click="Donottrack = 1">启用 </li>
          <li :class="{ tab_title_active: Donottrack === 2 }" @click="Donottrack = 2">禁止 </li>
        </ul>
        <span class="text">{{ Donottracktext[Donottrack] }}</span>
      </div>
    </div>
    <div class="conten">
      <div class="le">电池</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: battery === 0 }" @click="battery = 0">隐私</li>
          <li :class="{ tab_title_active: battery === 1 }" @click="battery = 1">真实 </li>
          <li :class="{ tab_title_active: battery === 2 }" @click="battery = 2">禁止 </li>
        </ul>
        <span class="text">{{ batterytext[battery] }}</span>
      </div>
    </div>
    <div class="conten">
      <div class="le">端口扫描防护</div>
      <div class="ri">
        <ul class="tab_title">
          <li :class="{ tab_title_active: portProtection === 0 }" @click="portProtection = 0">启用</li>
          <li :class="{ tab_title_active: portProtection === 1 }" @click="portProtection = 1">关闭 </li>
        </ul>
        <span class="text">{{ portProtectiontext[portProtection] }}</span>
      </div>
    </div>

    <div v-if="portProtection === 0" class="conten contens">
      <div class="le">白名单</div>
      <div class="ri">
        <div class="uabai">
          <el-input placeholder="请填写允许被网站扫描的端口" class="baimingdan" v-model="from.Windows" type="textarea"
            show-word-limit></el-input>
        </div>
      </div>
    </div>
    <div class="conten contenfooter">
      <div class="le"></div>
      <div class="ri">
        <div class="color"> 整数，范围从1到65535，多个端口请用逗号（半角）分开，示例4000,4001 </div>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="h3"> 偏好设置 </div>
    <div class="conten">
      <div class="le">Cookie</div>
      <div class="ri">
        <ul class="tab_title">
          <li @click="num = 1" :class="{ tab_title_active: num == 1 }">按环境</li>
          <li @click="num = 2" :class="{ tab_title_active: num == 2 }">按用户</li>
        </ul>
        <span class="text">不同用户打开相同环境时Cookie不同，同个用户在不同设备打开相同环境时Cookie相同</span>
      </div>
    </div>
    <div class="conten">
      <div class="le">多开设置</div>
      <div class="ri">
        <ul class="tab_title">
          <li @click="num = 1" :class="{ tab_title_active: num == 1 }">跟随团队</li>
          <li @click="num = 2" :class="{ tab_title_active: num == 2 }">开启</li>
          <li @click="num = 3" :class="{ tab_title_active: num == 3 }">关闭</li>
        </ul>
        <span class="text">跟随团队设置（允许多人同时打开该环境）</span>
      </div>
    </div>
    <div class="conten">
      <div class="le">网页通知</div>
      <div class="ri">
        <ul class="tab_title">
          <li @click="num = 1" :class="{ tab_title_active: num == 1 }">询问</li>
          <li @click="num = 2" :class="{ tab_title_active: num == 2 }">禁止通知</li>
        </ul>
        <span class="text">网站可以询问是否发送通知</span>
      </div>
    </div>
    <div class="conten">
      <div class="le">禁止加载图片</div>
      <div class="ri">
        <ul class="tab_title">
          <li @click="num = 1" :class="{ tab_title_active: num == 1 }">跟随团队</li>
          <li @click="num = 2" :class="{ tab_title_active: num == 2 }">自定义</li>
          <li @click="num = 3" :class="{ tab_title_active: num == 3 }">关闭</li>
        </ul>
        <span class="text">跟随团队设置（浏览器正常加载图片）</span>
      </div>
    </div>
    <div class="conten">
      <div class="le">禁止播放声音</div>
      <div class="ri">
        <ul class="tab_title">
          <li @click="num = 1" :class="{ tab_title_active: num == 1 }">跟随团队</li>
          <li @click="num = 2" :class="{ tab_title_active: num == 2 }">开启</li>
          <li @click="num = 3" :class="{ tab_title_active: num == 3 }">关闭</li>
        </ul>
        <span class="text">跟随团队设置（浏览器正常加载视频）</span>
      </div>
    </div>
    <div class="conten">
      <div class="le">禁止加载视频</div>
      <div class="ri">
        <ul class="tab_title">
          <li @click="num = 1" :class="{ tab_title_active: num == 1 }">跟随团队</li>
          <li @click="num = 2" :class="{ tab_title_active: num == 2 }">开启</li>
          <li @click="num = 3" :class="{ tab_title_active: num == 3 }">关闭</li>
        </ul>
        <span class="text">跟随团队设置（音视频默认正常播放）</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

//系统选择
const Systemwindows = ref(false)
// 语言
const Languageselect = ref<number>(0)
const Language = ref()
const Languagetext = ['基于IP生成对应的语言', '使用您设置的语言']
const Languagelist = ref([
  {
    value: 0,
    label: '英文',
  },
  {
    value: 1,
    label: '中文',
  },
])
// 界面语言
const screenLanguageselect = ref<number>(0)
const screenLanguage = ref()
const screenLanguagetext = ['基于IP生成对应的界面语言', '使用您设置的界面语言']
const screenLanguagelist = ref([
  {
    value: 0,
    label: '跟随系统',
  },
  {
    value: 1,
    label: '英文',
  },
  {
    value: 2,
    label: '中文',
  },
])
// 时区
const Timezoneselect = ref<number>(0)
const Timezone = ref()
const Timezonetext = ['基于IP生成对应的时区', '使用您设置的时区']
const Timezonelist = ref([
  {
    value: 0,
    label: 'GMT-12:00Etc/GMT+12',
  },
  {
    value: 1,
    label: 'GMT-12:00Etc/GMT+111',
  },
])
// 地理位置ip
const Geographyip = ref<string>('0')
// 屏幕分辨率
const ScreenResolution = ref()
const ScreenResolutionlist = [
  {
    value: 0,
    label: '1080',
  },
  {
    value: 1,
    label: '2060',
  },
]
// 窗口大小
const windowsize = ref()
const windowsizelist = [
  {
    value: 0,
    label: '1080',
  },
  {
    value: 1,
    label: '2060',
  },
]
// 字体列表
const typeface = ref(0)
const typefacelist = [
  {
    value: 0,
    label: '思源',
  },
  {
    value: 1,
    label: '微软雅黑',
  },
]
const typefacetext = ['开启字体列表隐私保护', '跟随电脑的字体列表']
// 字体指纹
const Fontfingerprint = ref(0)
const Fontfingerprinttext = ['开启ClientRects指纹隐私保护', '使用电脑默认的ClientRects']
// webRTC
const webRTC = ref(0)
const webRTCtext = ['开启WebGL，但禁止获取IP', '开启WebGL，将公网IP替换为代理IP，同时掩盖内网IP']
// Canvas
const Canvas = ref(0)
const Canvastext = ['开启Canvas隐私保护', '开启您设置的Canvas隐私保护']
// WebGl
const WebGl = ref(0)
const WebGltext = ['开启WebGl隐私保护', '跟随电脑的WebGL']
// Webinfo
const Webinfo = ref(0)
const Webinfotext = ['使用您设置的WebGLInfo', '跟随电脑的WebGLInfo']
// AudioContext
const AudioContext = ref(0)
const AudioContexttext = ['开启AudioContextint隐私保护', '跟随电脑的AudioContext']
// AudioContext
const SpeechVoices = ref(0)
const SpeechVoicestext = ['开启SpeechVoices', '关闭SpeechVoices']
// 媒体设备
const Mediaequipment = ref(0)
const Mediaequipmenttext = ['开启媒体设备隐私保护', '使用Chrome原生隐私保护（不授权则不会暴露真实媒体设备数量）']
// 设备名称
const Devicename = ref(0)
const Devicenametext = ['', '跟随电脑的设备名称']
// Max地址
const Maxaddress = ref(0)
const Maxaddresstext = ['', '跟随电脑的MAC地址']
// Donottrack
const Donottrack = ref(0)
const Donottracktext = ['默认不设置', '默认不允许追踪']
// 电池
const battery = ref(0)
const batterytext = ['开启电池隐私保护', '使用电脑真实的电池信息']
// 端口保护
const portProtection = ref(0)
const portProtectiontext = ['不允许网站检测您使用的本地网络端口', '允许网站检测您使用的本地网络端口']
const num = ref(1)
/**
 * 分辨率
 */
const Resolution = ref()
const Resolutionlist = [
  {
    value: '1',
    label: '1080',
  },
  {
    value: '2',
    label: '2060',
  },
]
/**
 * 时区
 */
// const Timezone = ref()
// const Timezonelist = [
//   {
//     value: '1',
//     label: 'GMT-12:00Etc/GMT+12',
//   },
//   {
//     value: '2',
//     label: 'GMT-12:00Etc/GMT+111',
//   },
// ]
/**
 *  windows
 */
const from = reactive({
  Windows: '',
  UAinfo: '',
})
const group = ref()
const grouplist = ref([
  {
    value: '属性',
    label: '智能匹配',
  },
  {
    value: 'Option2',
    label: '105',
  },
  {
    value: 'Option3',
    label: '112(beta)',
  },
])
const IpNormal = ref('1')
// UA版本
const UA = ref()
</script>

<style scoped lang="less">
.Expert {
  width: 918px;
  background: #ffffff;
  box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
  border-radius: 8px 8px 8px 8px;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 20px;

  .conten {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .textear {
    width: 240px;
    height: 140px;
    background: #ffffff;
    border-radius: 4px 4px 4px 4px;
    opacity: 1;
    border: 1px solid #eeeeee;
    overflow-y: auto;
    padding: 10px;

    >div {
      margin-bottom: 10px;
    }
  }

  .contenfooter {
    margin-bottom: 30px;
  }

  .contens {
    margin-bottom: 10px;
  }

  .le {
    width: 130px;
    text-align: end;
    color: #333;
    padding-right: 10px;
  }

  .fontmar {
    margin-bottom: 5px;
  }

  .red {
    color: red;
  }

  :deep(.ri) {
    flex: 1;

    .uabai {
      .el-textarea__inner {
        width: 520px !important;
      }
    }

    .color {
      color: #999;
      line-height: 1;
    }

    .ippipei {
      width: 200px;
      display: flex;
      align-items: center;
      height: 32px;
      background: rgba(43, 83, 229, 0.05);
      border-radius: 4px 4px 4px 4px;
      padding-left: 15px;
    }

    .Canvas {
      width: 280px;
    }

    &.flextop {
      align-items: baseline;
    }

    .baimingdan {
      .el-textarea__inner {
        height: 20px !important;
      }
    }

    .ziti {
      margin-left: 10px;
      cursor: pointer;
      text-align: center;
      align-items: baseline;
      width: 68px;
      height: 32px;
      line-height: 32px;
      font-size: 12px;
      background: rgba(45, 90, 255, 0.08);
      border-radius: 4px 4px 4px 4px;
      color: #2d5aff;
    }

    .el-input__wrapper {
      width: 320px;
    }

    .el-textarea .el-textarea__inner {
      width: 770px;
      height: 52px;
      resize: none;
    }

    .el-textarea {
      width: unset !important;
    }

    >img {
      width: 22px;
      vertical-align: middle;
    }

    .tab_title {
      margin: auto;
      width: auto;
      height: 32px;
      display: inline-block;
      white-space: nowrap;
      background-color: #f6f6f6;
      border-radius: 6px 6px 6px 6px;
      font-size: 14px;
      @include font_family();
      font-weight: 300;
      color: #333333;
      line-height: 32px;

      li {
        width: 120px;
        height: 32px;
        display: inline-block;
        text-align: center;
        border-radius: 6px 6px 6px 6px;
        cursor: pointer;
      }

      .tab_title_active {
        color: #ffffff;
        background: #2b53e5;
        box-shadow: 0px 0px 10px 0px rgba(43, 83, 229, 0.3);
      }
    }

    .text {
      color: #999;
      padding-left: 10px;
    }
  }

  :deep(.foucsicon) {
    color: red;

    .el-input__wrapper {
      box-shadow: 0 0 0 1px var(--el-select-input-focus-border-color) inset !important;
    }
  }

  .foucsicons {
    gap: 10px 10px;
    flex-wrap: wrap;

    .le {
      margin-top: 5px;
    }

  }

  .contentop {
    align-items: flex-start;
  }

  .h3 {
    margin: 20px 0;
    padding-left: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #333333;
  }
}

.el-divider--horizontal {
  width: 95%;
  margin: 10px auto 30px;
}
</style>
