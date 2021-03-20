#  git 相关用法与命令

> 这篇介绍文档花费了我很长时间总结出来的，结合了大家平时会遇到各种与git相关的问题，帮助大家学习。

> git 相关基础概念知识此处不做过多介绍，需要了解的自行上网查阅。

### 克隆

使用产品代码第一步就需要把代码下载下来，在你的本地代码仓库里执行命令行：

```
git clone <repository>
```

<html>
<div style="background:#4893e1;padding:10px;fonst-size:20px;color:#ffffff;font-weight:600;">
详 解
</div>
<div style="background:#f3f3f3;padding:10px;color:#333333;">
<ul>
<li>第一次使用git下载一个资源库时会要求填入用户名和密码，在此处即公司统一发放的git账号。</li>
<li>等待下载完成，此时git会自动checkout到master分支，master作为一个项目的默认分支（主分支），一般不会频繁操作和提交，只有更新大版本时，将其他分支合并，然后可发布release版本或者测试版。</li>
<li>如图所示：</li>
<img src="http://119.96.220.140:9099/upload/2020/09/clone-b9158112.webp" ori-src="https://upload-images.jianshu.io/upload_images/11462107-d96768bc6eb2c5b9?imageMogr2/auto-orient/strip|imageView2/2/w/682/format/webp">
</ul>
</div>
</html>

### 分支管理（多人协作）

在多人合作的项目开发时，通过分支开发和提交代码是它比svn更有优势的一点。只有一两个开发人员时可以对分支管理不那么看重，所有代码在master上提交操作，这样就跟svn很类似。

**在正常的项目开发时，应该至少有一个主分支（master）和一个开发分支（develop）。**

远程分支可以通过命令查看：
```
git branch -a
```
![QQ截图20200925111644.png](http://119.96.220.140:9099/upload/2020/09/QQ截图20200925111644-3c9782f1.png)

**当远程缺少开发分支（develop）时，需要手动创建本地开发分支（develop）并推送远程。此操作最好让项目管理员完成，之后其他项目成员重新clone代码即可。**

在远程资源库上已经存在develop分支时，直接签出到开发分支上：

##### 签出到开发分支：
```
git checkout develop
```
另外，除了协同开发分支，我们还可以创建基于develop的的本地分支用于日常的开发使用。可同时使用多个分支做多种不同的事情，分支之间可以互不影响（这也是git代码管理与其他工具最为优势的地方之一），开发完成合并到develop之后即可删除掉它。
##### 通过一句命令完成从develop来创建和签出分支：

```
git checkout -b my-feature develop
```
##### 完成开发任务后，合并到develop，删除功能分支（feature）：
```
 // 合并到develop之前必须签出到此分支
git checkout develop
 // 快进式合并my-feature分支的代码
git merge --no-ff my-feature
 // 删除feature分支
git branch -d my-feature
```
<html>
<div style="background:#4893e1;padding:10px;fonst-size:20px;color:#ffffff;font-weight:600;">
详 解
</div>
<div style="background:#f3f3f3;padding:10px;color:#333333;">
<ul>
<li>如果还没有远程的开发分支（develop），请查看"分支管理（版本控制）"创建远程分支。</li>
<li>想要查看当前的本地分支，可以通过命令查看：git branch。</li>
<li>在签出到分支之后，提交指向（HEAD）就改变了，此后的提交与推送都会按照HEAD指向来提交和拉取代码，如图所示：</li>

<img src="http://119.96.220.140:9099/upload/2020/09/branch-a99aa8cb.webp" ori-src="https://upload-images.jianshu.io/upload_images/11462107-f3c087b4d836e7c6.png?imageMogr2/auto-orient/strip|imageView2/2/w/362/format/webp">

<li>--no-ff参数的意思：默认情况下，Git执行"快进式合并"（fast-farward merge），会直接将Master分支指向Develop分支。</li>
<li>HEAD 指向的分支（branch） 不能删除。</li>
<li>如果你删除了未合并的分支，就再也找不到你分支上的comint了。</li>
<li>所以不要删除远程分支develop，如果你想尝试删除develop分支，由于它很可能未合并到master上，可能会报错（git也在帮你考虑安全问题）。</li>
</ul>
</div>
</html>

### 拉取、暂存、提交、推送

开发者在开发过程中的代码管理。vsCode中自带git管理工具，可以使用图形化操作替代绝大部分git命令行。推荐使用此方式以减少记忆git命令。
![git.png](http://119.96.220.140:9099/upload/2020/09/git-f5375cff.png)


##### 拉取
实际开发过程中，要不断进行代码更新，保持与远程资源库同步的状态。签出到你所拉取的分支下，从资源库分支拉取最新代码同时合并本地代码：

```
git pull
```
##### 暂存和提交
在完成开发后，将代码存起来，可使用暂存、提交：

```
// "add ." 表示暂存所有更改的文件
git add .  

git commit -m 备注信息  // -m" 后接提交的备注信息，这是必要的!
```
##### 推送
将提交记录推到远程资源库，并与远程分支合并：

```
git push origin
```
<html>
<div style="background:#4893e1;padding:10px;fonst-size:20px;color:#ffffff;font-weight:600;">
详 解
</div>
<div style="background:#f3f3f3;padding:10px;color:#333333;">
<ul>
<li>拉取是根据分支来获取远程对应的最新分支，会自动与本地分支代码合并</li>
<li>git与其他代码管理不同的是设置了一个暂存区，将未提交的代码暂存于此，关于工作区和暂存区的详细说明可见这个<a href="https://www.liaoxuefeng.com/wiki/896043488029600/897271968352576">文章</a>。</li>
<li>在提交代码之前，最好先拉取最新的分支代码，以避免冲突。</li>
<li>代码冲突有几种解决办法，我认为最为方便的一种是 存储。此方式也可以在vscode上git工具操作，更为简单方便。
<pre>
git stash         // 存储命令，也可以加备注
git pull          // 拉取最新分支代码
// 若有暂存内容，则先还原暂存 git stash pop stash@{0}
git stash pop    // 弹出最新存储，它会自动合并代码，若有冲突会提示手动解决冲突
</pre>
</li>


</ul>
</div>
</html>

### 分支管理（版本控制）

**首先项目管理人员新建develop分支并推送到远程库上**。这与上面的创建分支操作一样：
```
git checkout -b develop master
```
##### 将开发分支推送到远程：
```
 git push origin develop:develop
```
项目成员clone代码之后即可签出develop分支。若不能通过git branch -a 查看到远程develop分支，需要重新clone项目代码。

在项目开发到一定阶段的时候，需要发布一个正式版本或者预览版本时，就需要把分支的代码合并到主分支上，并且发布tag标签确定版本号。
##### 将develop合并到master：
```
git checkout master

git merge --no-ff develop
```
##### 将合并后的主分支（master）推送到远程：
```
git push origin
```
##### 对合并生成的新节点，做一个标签：
```
git tag -a v1.0.0 -m 第一个版本
```
##### 将合并后的主分支（master）推送到远程：
```
git push origin v1.0.0
```
至此，已经完成了一次基本的版本管理，发布了项目release版 v1.0.0。

<html>
<div style="background:#4893e1;padding:10px;fonst-size:20px;color:#ffffff;font-weight:600;">
详 解
</div>
<div style="background:#f3f3f3;padding:10px;color:#333333;">
<ul>
<li>推送远程分支时，使用的命令像这样：<i>git push <远程主机名>  <本地分支名> <远程分支名></i>，为了方便 本地分支名尽量可以与远程分支名保持一致，例如 develop。</li>
<li>合并到主分支之前，必须先签出到主分支（master）。</li>
<li>在生成tag的命令，-a后接版本号，-m后接版本描述。</li>
<li>通过这种版本管理，形成的效果如下：</li>

<img src="http://www.ruanyifeng.com/blogimg/asset/201207/bg2012070504.png">

</ul>
</div>
</html>

附录：签出并拉取指定版本号代码、补打tag

---

> 参考文章： [腾讯云-开发者手册-Git 教程](https://cloud.tencent.com/developer/doc/1096)、[HEAD、master 与 branch](https://www.jianshu.com/p/4219b6f62ce3)、[Git分支管理-阮一峰](http://www.ruanyifeng.com/blog/2012/07/git.html)、[Git如何把本地代码推送到远程仓库](https://blog.csdn.net/JackLiu16/article/details/79751900)