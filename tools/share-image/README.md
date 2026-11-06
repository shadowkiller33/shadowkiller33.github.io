# 分享图

给每篇博客生成一张 1200×627 的分享图，图上只有文章标题。在 LinkedIn、X 等平台分享文章链接时，卡片会显示这张图。

## 用法

在仓库根目录运行：

    pip install pillow
    python tools/share-image/make.py

- 图片会保存到 `assets/img/share/<slug>.png`。`<slug>` 是文章文件名去掉日期的部分，例如 `2026-11-04-shape-not-return.md` 对应 `shape-not-return.png`。
- 已经有图的文章会跳过。改了标题、想重新生成时，加上 `--force`。
- 生成之后，把图片和文章一起 commit 并 push。`_includes/head.html` 会自动用上这张图；没有图的文章仍然用头像。

## 其他

- 标题里有冒号时，冒号前面是大标题，后面是小一号的副标题。
- 卡片上的标题（og:title）只用文章标题，不带名字。
- LinkedIn 会缓存分享过的链接。换图之后，用 [Post Inspector](https://www.linkedin.com/post-inspector/) 刷新一下。
- 字体是网站用的 Newsreader，使用 SIL Open Font License，见 `Newsreader-LICENSE.txt`。
