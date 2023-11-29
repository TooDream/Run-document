# git常用指令

## 1、第一次初始化

- git init
  git add .
  git commit -m ‘first commit’
  git remote add origin git@github.com:帐号名/仓库名.git
  git pull origin master
  git push origin master # -f 强推
- git clone git@github.com:git帐号名/仓库名.git

## 2、初始化仓库

git init

## 3、加到缓存区

- git add .：添加所有项目至缓存区
- git add 目录名：添加指定目录到缓存区
- git add 文件名：添加指定文件到缓存区

## 4、提交至本地仓库

git commit -m “注释信息”

## 5、推送本地仓库信息至远程仓库

- git push origin master：将本地分支的更新内容，全部推送至远程仓库 master 分支
- git push origin dev：将本地 dev 分支推送到远程，再由一个人统一加到 master 分支上

## 6、拉取远程仓库最新文件

- git pull：拉取远程仓库所有分支合并到本地
- git pull origin master：拉取远程master分支，合并到当前本地master分支
- git fetch：仅做拉取操作，不做合并，合并需要自己再找其他方法

注意：一般都用 git pull

### 拓展阅读

## Git 命令个别专用名词译名

Workspace：工作区

Index / Stage：暂存区

Repository：仓库区（或本地仓库）

Remote：远程仓库