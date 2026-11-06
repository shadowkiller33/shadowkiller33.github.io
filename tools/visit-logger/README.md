# visit-logger

记录主页和博客文章的访问：时间、IP 地址、大致位置（城市级）、网络（运营商或公司）、访问的页面和语言、来源页面、浏览器。数据存在你自己的 Cloudflare 账号里（Workers + D1，免费额度对个人博客足够），只有你能用密码查看。

只记录主页和博客文章页，Publications、文章列表等其他页面不记录。禁用 JavaScript 或装了拦截插件的访客不会被记录；常见爬虫会被过滤。超过 90 天的记录每天自动删除。

## 第一次部署

1. 注册 Cloudflare：<https://dash.cloudflare.com/sign-up>。免费，不用绑卡，也不需要域名。
2. 确认装了 Node.js 18 或更新的版本：PowerShell 里运行 `node -v` 能显示版本号就行。没有的话，从 <https://nodejs.org> 装 LTS 版。
3. 在 PowerShell 里运行：

   ```powershell
   cd C:\Users\Shenl\Downloads\shadowkiller33.github.io\tools\visit-logger
   node setup.mjs
   ```

   脚本会依次：
   - 装好 wrangler；
   - 打开浏览器，让你登录 Cloudflare 并点授权；
   - 建好数据库，把 `database_id` 写进 `wrangler.toml`，并建表；
   - 部署；
   - 让你把部署出来的 `https://….workers.dev` 地址粘贴回来，写进网站的 `_config.yml`；
   - 最后让你设置查看记录用的密码。

   中途如果问你要不要注册 workers.dev 子域名、是否继续，按提示确认即可。脚本可以重复运行。
4. 回到仓库根目录，commit 并 push。网站更新后就开始记录。

### 不用脚本、手动部署

```powershell
npm install
npx wrangler login
npx wrangler d1 create visit-log        # 把输出里的 database_id 填进 wrangler.toml
npx wrangler d1 execute visit-log --remote --file schema.sql
npx wrangler deploy                     # 打印出 https://visit-logger.<你的子域>.workers.dev
npx wrangler secret put VIEW_PASSWORD   # 设置查看记录用的密码
```

然后把部署出来的地址（结尾不要带斜杠）填到 `_config.yml` 的 `visit_logger_url`。

## 查看记录

打开 `https://visit-logger.<你的子域>.workers.dev/log`。浏览器会弹出登录框，用户名随便填，密码是部署时设置的那个。

页面上可以按时间（1、7、30、90、365 天）和按文章筛选，也可以下载 CSV。时间按洛杉矶时区显示，可以在 `wrangler.toml` 的 `TIME_ZONE` 里改。

## 其他

- **关闭记录：** 把 `_config.yml` 里的 `visit_logger_url` 清空。
- **改保留天数：** 改 `wrangler.toml` 的 `RETENTION_DAYS`，然后重新 `npx wrangler deploy`。
- **改密码：** 再运行一次 `npx wrangler secret put VIEW_PASSWORD`。
- **页面上的说明：** 主页和文章页都不显示说明。IP 地址属于个人信息，欧盟等地要求告知访客；以后想加回说明，可以写在 `_layouts/post.html` 里。
- **位置和网络信息的精度：** 来自 Cloudflare，按 IP 推断，只到城市级别；用 VPN 或公司网络的访客会显示 VPN 或公司出口的位置。
