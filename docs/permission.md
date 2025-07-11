# 象皮泥权限申请与使用情况说明  

1. 为保障象皮泥稳定运行及功能实现，我们可能申请或使用操作系统权限；  
2. 以下列表展示产品可能申请的操作系统权限，您可按需管理；  
3. 产品升级时权限类型/目的可能变动，我们会及时更新列表；  
4. 我们可能使用第三方SDK，其也可能申请权限；  
5. 第三方H5/小程序也可能因功能需要申请权限；  
6. 本说明适用于象皮泥APP、小程序。  


### 一、安卓操作系统应用权限列表  

| 权限名称                                                                 | 权限功能说明                     | 使用场景与目的                                                                                     |  
|--------------------------------------------------------------------------|----------------------------------|--------------------------------------------------------------------------------------------------|  
| 相机拍摄<br />`android.permission.CAMERA`                                | 拍摄照片/视频、扫描二维码        | 用于扫码登录、更换头像、社区发布图文/视频、客服沟通、商品搜索/纠错、上传凭证等功能。               |  
| 录音<br />`android.permission.RECORD_AUDIO`                              | 录制音频                        | 用于社区发布视频、客服语音沟通等场景。                                                             |  
| 读取外置存储（Android 13以下）<br />`android.permission.READ_EXTERNAL_STORAGE` | 读取存储空间内容                | 上传照片/视频/文件（如头像、反馈凭证）、读取日志用于安全风控。                                    |  
| 写入外置存储（Android 13以下）<br />`android.permission.WRITE_EXTERNAL_STORAGE` | 写入存储空间                    | 下载/保存/缓存图片、文件、日志（如商品图片、崩溃日志）。                                           |  
| 读取媒体文件（Android 13及以上）<br />`android.permission.READ_MEDIA_IMAGES`<br />`android.permission.READ_MEDIA_VIDEO`<br />`android.permission.READ_MEDIA_AUDIO` | 读取相册/视频/音频              | 上传内容（头像、社区图文、反馈凭证）、商品搜索/纠错、安全风控日志读取。                            |  
| 大致地理位置<br />`android.permission.ACCESS_COARSE_LOCATION`            | 通过基站/WLAN获取大致位置        | 用于社区定位分享、自动填充地址、安全风控。                                                         |  
| 精确地理位置<br />`android.permission.ACCESS_FINE_LOCATION`              | 通过GPS/WLAN获取精准位置        | 用于社区定位分享、自动填充地址、安全风控（如异地登录检测）。                                       |  
| 读取通讯录<br />`android.permission.READ_CONTACTS`                       | 获取通讯录信息                  | 帮助发现通讯录好友、添加关注（如适用）。                                                          |  
| 悬浮窗<br />`android.permission.SYSTEM_ALERT_WINDOW`                     | 悬浮窗显示                     | 特定功能悬浮展示（如消息通知，如适用），关闭仅影响该功能。                                         |  
| 日历<br />`android.permission.READ_CALENDAR`<br />`android.permission.WRITE_CALENDAR` | 读写日历                       | 订阅活动/功能提醒（如新品、社区活动，如适用）。                                                    |  
| 通知权限<br />`android.permission.POST_NOTIFICATIONS`                    | 消息推送                       | 向您推送服务通知、活动提醒等。                                                                     |  
| 照片地理位置                                                             | 读取照片拍摄时的地理位置        | 用于社区话题推送（如周边内容推荐，如适用）。                                                       |  


### 二、IOS操作系统应用权限列表  

| 权限名称                                                                 | 权限功能说明                     | 使用场景与目的                                                                                     |  
|--------------------------------------------------------------------------|----------------------------------|--------------------------------------------------------------------------------------------------|  
| 使用期间访问位置<br />`NSLocationWhenInUseUsageDescription`              | APP使用时获取位置               | 用于社区定位分享、自动填充地址、安全风控（如异地登录检测）。                                       |  
| 日历<br />`NSCalendarsUsageDescription`                                  | 访问系统日历                    | 订阅活动/功能提醒（如新品、社区活动，如适用）。                                                    |  
| 通讯录<br />`NSContactsUsageDescription`                                 | 读取通讯录                      | 帮助发现通讯录好友、添加关注（如适用）。                                                          |  
| 麦克风<br />`NSMicrophoneUsageDescription`                               | 录制音频                        | 用于社区发布视频、客服语音沟通等场景。                                                             |  
| 读取照片库<br />`NSPhotoLibraryUsageDescription`                         | 读取相册内容                    | 上传内容（头像、社区图文、反馈凭证）、商品搜索/纠错、安全风控日志读取，及照片地理位置用于话题推送（如适用）。 |  
| 写入照片库<br />`NSPhotoLibraryAddUsageDescription`                      | 向相册写入内容                  | 下载/保存/缓存图片（如商品图片、社区素材）。                                                       |  
| 相机<br />`NSCameraUsageDescription`                                     | 拍摄照片/视频、扫描二维码        | 用于扫码登录、更换头像、社区发布图文/视频、客服沟通、商品搜索/纠错、上传凭证等功能。               |  
| FaceID 面容ID<br />`NSFaceIDUsageDescription`                            | 面容ID验证                      | 辅助身份验证、支付操作（如适用）。                                                                 |  
| 广告标识符IDFA<br />`NSUserTrackingUsageDescription`                     | 获取广告标识符                  | 用于安全风控验证（如适用，可关闭）。                                                              |  
| 本地网络权限<br />`NSLocalNetworkUsageDescription`                       | 获取本地网络权限                | 优化视频播放流畅度（如社区视频、商品介绍视频）。                                                   |  


### 三、鸿蒙操作系统应用权限列表  

| 权限名称                                                                 | 权限功能说明                     | 使用场景与目的                                                                                     |  
|--------------------------------------------------------------------------|----------------------------------|--------------------------------------------------------------------------------------------------|  
| 使用Internet网络<br />`ohos.permission.INTERNET`                         | 访问网络数据                    | 加载应用数据（如商品信息、社区内容）。                                                             |  
| 获取Wi-Fi信息<br />`ohos.permission.GET_WIFI_INFO`                       | 获取Wi-Fi状态                   | 判断网络环境，控制视频自动播放等流量优化场景。                                                     |  
| 获取数据网络信息<br />`ohos.permission.GET_NETWORK_INFO`                 | 获取网络状态                   | 判断网络环境，控制视频自动播放等流量优化场景。                                                     |  
| 存储持久化数据<br />`ohos.permission.STORE_PERSISTENT_DATA`              | 存储持久化数据                  | 下载/保存/缓存图片、文件、日志（如商品图片、崩溃日志）。                                           |  
| 读取开放匿名设备标识符<br />`ohos.permission.APP_TRACKING_CONSENT`       | 读取设备标识符                  | 用于安全风控验证（如适用，可关闭）。                                                              |  
| 相机拍摄<br />`ohos.permission.CAMERA`                                   | 拍摄照片/视频、扫描二维码        | 用于扫码登录、更换头像、社区发布图文/视频、客服沟通、商品搜索/纠错、上传凭证等功能。               |  
| 访问媒体地理位置<br />`ohos.permission.MEDIA_LOCATION`                  | 读取照片拍摄位置                | 用于社区话题推送（如周边内容推荐，如适用）。                                                       |  
| 大致位置信息<br />`ohos.permission.APPROXIMATELY_LOCATION`              | 通过基站/WLAN获取大致位置        | 用于社区定位分享、自动填充地址、安全风控。                                                         |  
| 精准位置信息<br />`ohos.permission.LOCATION`                             | 通过GPS/WLAN获取精准位置        | 用于社区定位分享、自动填充地址、安全风控（如异地登录检测）。                                       |  
| 控制马达振动<br />`ohos.permission.VIBRATE`                              | 设备振动提醒                    | 交互反馈（如长按操作提醒、消息通知振动）。                                                         |  
| 读写日历<br />`ohos.permission.READ_CALENDAR`<br />`ohos.permission.WRITE_CALENDAR` | 读写日历                       | 订阅活动/功能提醒（如新品、社区活动，如适用）。                                                    |  
| 麦克风<br />`ohos.permission.MICROPHONE`                                 | 录制音频                        | 用于社区发布视频、客服语音沟通等场景。                                                             |  


### 特别说明  
- 若象皮泥无对应功能（如直播、AI测肤），相关场景已标记为 **“如适用”**，实际以App功能为准；  
- 权限申请遵循 **最小必要原则**，您可通过设备设置管理权限，关闭不影响核心功能使用；  
- 第三方SDK/小程序的权限申请以其自身隐私政策为准。  