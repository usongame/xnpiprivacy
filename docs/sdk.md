## 象皮泥第三方合作个人信息共享清单

为保障象皮泥相关功能的实现与应用安全稳定运行，我们可能会接入由第三方提供的软件开发包（SDK）、应用程序接口（API）等代码或通过其他合作方式，以实现相关服务目的。我们会对合作方的代码进行严格安全监测，保护您的数据安全。

合作方具体的数据处理情况请参见其隐私政策或相关服务说明。请注意，合作方的代码可能因版本升级、策略调整等导致数据处理类型变化，请以其公示的官方说明为准。


### 一、内嵌第三方SDK清单

| SDK名称 | 第三方公司名称 | 共享信息名称 | 可能调用的权限 | 使用场景 | 使用目的 | 共享方式 | 第三方隐私政策链接 |
|---------|----------------|--------------|----------------|----------|----------|----------|--------------------|
| 华为推送SDK | 华为软件技术有限公司 | 应用信息、设备信息（硬件信息、系统基本信息和设置）、应用进程信息、IP地址、BSSID、WIFI信息、Android ID | 网络状态权限、访问网络权限 | 向用户推送通知消息 | 根据用户机型提供通知推送功能 | SDK自行采集 | [https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/sdk-data-security-0000001050042177](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/sdk-data-security-0000001050042177) |
| 小米推送SDK | 北京小米移动软件有限公司 | 设备标识(OAID、加密的Android ID)、推送消息内容、设备信息(厂商、型号、归属地、运营商等)、通知栏设置、单个应用信息、IP地址 | 访问网络状态、获取设备信息、写入设备存储 | 向用户推送通知消息 | 根据用户机型提供通知推送功能 | SDK集成 | [https://dev.mi.com/console/doc/detail?pId=1822](https://dev.mi.com/console/doc/detail?pId=1822) |
| 魅族推送SDK | 珠海星纪魅族信息技术有限公司 | 设备相关信息（手机品牌、型号、系统版本、语言、设备标识符PUSHID）、应用信息、推送状态 | 允许应用发送通知、访问网络信息、访问网络 | 向用户推送通知消息 | 提供魅族手机实时消息推送、优化推送体验 | SDK | [https://open.flyme.cn/docs?id=202](https://open.flyme.cn/docs?id=202) |
| VIVO 推送SDK | 维沃移动通信有限公司 | 应用基本信息（appid、appkey、包名、版本号、pushSDK版本）、应用内设备标识符（vpush的regId）、设备硬件信息（类型、型号）、系统基本信息（类型、版本） | - | 向用户推送通知消息 | 根据用户机型提供通知推送功能 | SDK | [https://dev.vivo.com.cn/documentCenter/doc/706](https://dev.vivo.com.cn/documentCenter/doc/706) |
| OPUSH SDK | 广东欢太科技有限公司 | 应用基本信息（MCS应用包名、版本号、OPUSH SDK版本号）、应用内设备标识符（RegisterId、appKey、appSecret） | - | 向用户推送通知消息 | 根据用户机型提供通知推送功能 | SDK | [https://open.oppomobile.com/new/developmentDoc/info?id=11229](https://open.oppomobile.com/new/developmentDoc/info?id=11229) |
| 天翼账号认证SDK | 天翼数字生活科技有限公司 | 国际移动用户标识码、应用进程信息、Android ID（可选，V3.8.10以上版本去除）、注册手机号码、本机号码、网络连接类型、状态信息、地址、运营商类型、设备类型、厂商、操作系统版本、IP地址 | INTERNET、CHANGE_NETWORK_STATE、ACCESS_WIFI_STATE、ACCESS_NETWORK_STATE、GET_TASKS、USE_FINGERPRINT/CAMERA（可选）、WRITE_EXTERNAL_STORAGE（可选） | 用户选择一键登录时 | 为用户提供一键登录功能 | SDK | [https://id.189.cn/html/agreement_709.html](https://id.189.cn/html/agreement_709.html) |
| 号码认证SDK | 中移互联网有限公司 | 网络类型、网络地址（ip）、运营商类型、本机号码信息、SIM卡状态、设备类型、操作系统、硬件厂商 | - | 手机号一键注册登录、安全风控场景 | 提供一键登录功能及风险控制 | SDK | [https://wap.cmpassport.com/resources/html/contract.html](https://wap.cmpassport.com/resources/html/contract.html) |
| 手机号一键登录SDK | 中国联合网络通信有限公司 | 网络类型、网络地址、运营商类型、本机手机号、设备类型、操作系统、硬件厂商、IP地址 | - | 用户选择一键登录时 | 为用户提供一键登录功能 | SDK | [https://opencloud.wostore.cn/authz/resource/html/disclaimer.html?fromsdk=true](https://opencloud.wostore.cn/authz/resource/html/disclaimer.html?fromsdk=true) |
| 微博SDK | 北京微梦创科网络技术有限公司 | 设备信息（型号、标识符（如IMEI/Android ID/IDFA等）、MAC地址、运营商等）、用户分享的图片或视频、已安装应用包名信息 | - | 第三方登录、内容分享至微博 | 实现微博登录及分享功能 | SDK | [https://open.weibo.com/wiki/Sdk/privacy](https://open.weibo.com/wiki/Sdk/privacy) |
| 微信Open SDK | 深圳市腾讯计算机系统有限公司 | 微信头像、昵称信息、微信支付订单标识、图片或内容、应用进程信息 | - | 第三方登录、微信分享、微信支付 | 实现微信登录、分享及支付功能 | SDK | [https://support.weixin.qq.com/cgi-bin/mmsupportacctnodeweb-bin/pages/RYiYJkLOrQwu0nb8](https://support.weixin.qq.com/cgi-bin/mmsupportacctnodeweb-bin/pages/RYiYJkLOrQwu0nb8) |
| QQ互联SDK | 深圳市腾讯计算机系统有限公司 | 操作系统信息、设备型号信息、剪切板信息、内/外存卡权限、应用列表信息、应用进程信息、传感器信息 | - | 第三方登录、内容分享至QQ | 实现QQ登录及分享功能 | SDK | [https://wiki.connect.qq.com/qq%E4%BA%92%E8%81%94sdk%E9%9A%90%E7%A7%81%E4%BF%9D%E6%8A%A4%E5%A3%B0%E6%98%8E%20](https://wiki.connect.qq.com/qq%E4%BA%92%E8%81%94sdk%E9%9A%90%E7%A7%81%E4%BF%9D%E6%8A%A4%E5%A3%B0%E6%98%8E%20) |
| 腾讯云慧眼人脸核身基础版SDK | 腾讯云计算（北京）有限责任公司 | 身份证照片、姓名、身份证号码、人脸视频、人脸照片（**敏感个人信息**）、传感器信息、设备制造商、型号、操作系统、网络状态、IP地址、硬件序列号、OAID、IDFV、运营商信息、传感器列表、系统设置、相机参数、应用安装列表等 | Android端（相机、网络访问、存储）、IOS端（相机） | 帮助用户完成人脸识别、活体检测以完成身份核验 | 提供安全身份验证服务 | SDK | [https://privacy.qq.com/document/preview/4661fcc5ceb04a4f878a5874c86b34a2](https://privacy.qq.com/document/preview/4661fcc5ceb04a4f878a5874c86b34a2) |
| 腾讯优图Faceln人脸核身SDK（内嵌） | 深圳市腾讯计算机系统有限公司 | 人脸视频及照片（**敏感个人信息**） | - | 用户使用人脸核验相关功能时 | 活体检测实现实人认证 | SDK集成 | [https://privacy.qq.com/document/preview/13a6cbc478814273a8584cce698b8e08](https://privacy.qq.com/document/preview/13a6cbc478814273a8584cce698b8e08) |
| 腾讯图灵盾人脸防攻击SDK（内嵌） | 深圳市腾讯计算机系统有限公司 | 系统设置、属性（含传感器列表）、网络连接类型、设备型号、操作系统、IP地址、相机参数；应用安装列表、进程信息、设备名称、存储权限等 | - | 用户使用人脸核验相关功能时 | 设备风险监测、拦截刷脸作弊行为 | SDK集成 | [https://privacy.qq.com/document/preview/b8f92d6cdc0d4dc3ab6192d7096cee68](https://privacy.qq.com/document/preview/b8f92d6cdc0d4dc3ab6192d7096cee68) |
| 支付宝客户端SDK | 支付宝（中国）网络技术有限公司 | Android ID、OAID、SSID、BSSID；设备型号（IMEI、IMSI、Mac地址）、品牌、操作系统；IP地址、网络类型、运营商信息、WiFi信息、应用进程信息 | 设备状态权限（仅Android）、网络链接权限、相机、存储权限 | 帮助用户在应用内使用支付宝支付 | 提供第三方支付功能 | SDK | [https://opendocs.alipay.com/open/54/01g6qm](https://opendocs.alipay.com/open/54/01g6qm) |
| 神策分析SDK | 神策网络科技（北京）有限公司 | 设备信息（IMEI、Android ID、IDFA、OAID等）、日志信息（IP地址、访问URL、浏览器类型）、应用唯一标识、版本号、SIM卡状态、WiFi信息 | INTERNET、ACCESS_NETWORK_STATE、READ_PHONE_STATE（Android）、网络（iOS） | 基础数据收集 | 驱动业务决策分析 | SDK | [https://www.sensorsdata.cn/market/privacy_policy.html](https://www.sensorsdata.cn/market/privacy_policy.html) |
| 移动智能终端补充设备标识体系统一调用SDK | 中国信息通信研究院 | 品牌信息（设备制造商、型号、品牌）、网络信息（运营商名称）、应用软件信息（APP签名、应用商店ID）、OAID | - | 安全风控、推荐及广告投放归因 | 提供推荐及广告归因 | SDK | [http://www.msa-alliance.cn/col.jsp?id=122](http://www.msa-alliance.cn/col.jsp?id=122) |


### 二、第三方合作方清单

在向您提供产品/服务时，部分服务需与第三方合作完成。我们会采取严格安全措施，仅为实现服务目的共享必要个人信息，并要求第三方依法保护您的信息。

| 所涉第三方 | 第三方主体身份 | 共享的个人信息 | 使用目的 | 使用场景 | 共享方式 |
|------------|----------------|----------------|----------|----------|----------|
| 快递物流服务提供商 | 圆通速递有限公司、申通快递有限公司、顺丰速运集团(上海)速运有限公司等（以实际合作为准） | 用户自填的收货信息（收件人姓名、地址、联系方式） | 提供物流配送服务 | 订单配送 | API后台接口传输 |
| 第三方支付机构 | 支付宝、微信支付 | 交易信息、支付信息、订单安全相关信息、设备类型名称 | 确认支付指令并完成支付 | 下单支付 | API后台接口传输 |
| 短信渠道合作方 | 阿里云、腾讯云等（以实际合作为准） | 手机号、短信内容 | 提供短信发送服务 | 验证码、通知短信发送 | API后台接口传输 |
| 安全风控保障服务合作方 | 腾讯云等（以实际合作为准） | 手机号码、设备信息、网络信息 | 安全风险监测、反欺诈 | 平台安全保障 | API后台接口传输 |
| 内容风控服务提供方 | 北京数美时代科技有限公司、腾讯云计算（北京）有限责任公司等（以实际合作为准） | 用户发布的内容（视频、图片、文本） | 内容安全审核 | 内容发布场景 | API后台接口传输 |
| 实名认证服务提供方 | 京东云计算有限公司等（以实际合作为准） | 用户姓名、身份证号 | 实名认证核验 | 需要实名验证的功能场景（如特定内容发布） | API后台接口传输 |


### 三、关联方

若苏州百夫长网络科技有限公司存在关联公司并提供相关服务，其信息处理将适用关联公司单独的隐私政策。我们会在关联公司提供服务时明确告知您，并征得您的同意。