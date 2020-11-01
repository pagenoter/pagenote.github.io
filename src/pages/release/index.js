import React, {Component} from 'react'
import InstallBar from "../../components/InstallBar";
import './release.scss';
import CommonPage from "../CommonPage";

export default class Release extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='release'>
                <section className="row">
                    <InstallBar className='install-btns' />
                    <strong className='slogan'>PAGENNOTE 小而美的笔记工具</strong>
                </section>
                <section className='row version-tip'>
                    了解最新动态、获取VIP抢先版本，请加入QQ群：769094377。或<a target='_blank' href="https://www.wjx.top/m/89079908.aspx">填写你的邮箱地址</a>，订阅最新活动。<a href="https://pagenote.logike.cn/hello">还未安装？前往试用</a>
                </section>
                <div className='row version latest' id='version12'>
                    <div className="left col-3">
                        <div className="version-number">
                            0.12.+
                            <div>插件市场</div>
                        </div>
                    </div>
                    <div className="right col-9">
                        <div className="brief">
                            <h3>0.12.0 自定义扩展功能</h3>
                            <p>
                                预设了搜索、翻译、复制、邮件等各类功能，你还可以自定义脚本实现「一切功能」。
                                <a href="/page?id=0.12.0">查看使用教程</a>
                            </p>
                            <div>
                                <img src="/release/0.12.0.png" alt="自定义插件"/>
                            </div>
                            <p>
                                从 0.12.0 版本开始，将不再官网提供离线版本，如果你有需要可以通过订阅获取。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row version" id='version11'>
                    <div className="left col-3">
                        <div className="version-number">
                            0.11.+
                            <div>个性化</div>
                        </div>
                    </div>
                    <div className="right col-9">
                        <div>
                            <div className='brief'>
                                <h3>0.11.4</h3>
                                <ul>
                                    <li>【bugfix】修复Chrome浏览器下部分网页创建标记失败。</li>
                                </ul>
                            </div>
                            <div className='brief'>
                                <h3>0.11.3</h3>
                                <ul>
                                    <li>【UI】移除了不重要的icon,如侧边栏「移动icon」</li>
                                    <li>【搜索API】支持多种搜索选项：谷歌、百度、知乎、翻译</li>
                                    <li>【拖拽边界】拖拽增加边界，避免拖出天际。</li>
                                    <li>
                                        【拍照】支持全网页拍照截图。（Firefox仅支持当前窗口视图拍照）
                                    </li>
                                    <li>【bugfix】修复首次打开页面时不能自动点亮节点</li>
                                </ul>
                            </div>
                            <div className='brief'>
                                <h3>0.11.2</h3>
                                <ul>
                                    <li>【UI】美化了pagenoter的设置页面</li>
                                    <li>【数据中心】启用了历史的插件数据管理页，不通过 https://pagenote.logike.cn/me 也可以查看和管理数据</li>
                                </ul>
                            </div>
                            <div className='brief'>
                                <h3>0.11.1</h3>
                                <ul>
                                    <li>【智能书签】支持开启关闭、自动根据标签创建一级目录。可自由设置启动/关闭</li>
                                    <li>【pagenoter】可在管理页面导入、导出数据</li>
                                    <li>【标记】可拖拽移动标记节点；UI风格弱化。</li>
                                    <li>【Edge】上架Edge应用市场</li>
                                </ul>
                            </div>
                            <div className="brief">
                                <h3>0.11.0</h3>
                                <ul>
                                    <li>
                                        <div>
                                            <b>个性化设置</b>
                                        </div>
                                        从此刻起，你可以有更多个性化的选择。前往<a href="/setting">设置</a>页面，定制个人专属 PAGENOTE。
                                        目前支持：色盘颜色、快捷键、最大标记数、新开tab设置。支持全局禁用 PAGENOTE。
                                        <img src="/release/page_setting.png" alt=""/>
                                    </li>
                                    <li>
                                        <div>
                                            <b>UI 交互升级</b>
                                        </div>
                                        重新设计了标记的样式和交互，让标记不打扰，同时更方便。
                                    </li>
                                    <li>
                                        <div>
                                            <b>拍照更方便</b>
                                        </div>
                                        在网页内即可直接创建、查看、删除快照、拥有所有功能，不必前往管理页面。
                                    </li>
                                    <li>
                                        <div>
                                            <b>关联上下文</b>
                                        </div>
                                        记录关键词前后上下文，让你能更好的回顾标记时的内容。划词时把重点放在关键词上！
                                    </li>
                                    <li>
                                        <div>
                                            <b>禁用编辑区</b>
                                        </div>
                                        针对可编辑区域禁用了 PAGENOTE 高亮，避免影响编辑内容。
                                    </li>

                                    <li>
                                        <div>
                                            <b>不兼容调整</b>
                                        </div>
                                        本次更新，将不再兼容低于 0.8.0 版本数据，建议你打开自动更新，或订阅PAGENOTE更新，以保证随时获取最新版本。
                                    </li>
                                    <li>
                                        <div>
                                            其他
                                        </div>
                                        管理页面和插件通信API升级，同时支持历史版本，增加自动重连、手动连接机制
                                        <br/>
                                    </li>
                                    <li>
                                        移除了一些动效，修复了一些bug、提升了使用性能。
                                    </li>
                                    <li>
                                        增加日语支持
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="row version" id='version10'>
                    <div className="left col-3">
                        <div className="version-number">
                            0.10.+
                            <div>为更优雅</div></div>
                    </div>
                    <div className="right col-9">
                        <div>
                            <div className="brief">
                                <ul>
                                    <li>
                                        增加一键复制功能、操作提示功能。趣味动画
                                        <div>
                                            <img src="/release/light-show.gif" alt=""/>
                                        </div>
                                    </li>
                                    <li>
                                        根据标记创建、删除自动关联管理书签至文件夹[pagenote]中
                                        <div>
                                            <img src="/release/bookmark_auto.png" alt=""/>
                                        </div>
                                    </li>
                                    <li>
                                        不高亮关键字也可以在网页里留笔记。点击右上角插件图标，弹窗中填写笔记即可。
                                        {/*<div>*/}
                                        {/*    <img src="/release/popup.png" alt=""/>*/}
                                        {/*</div>*/}
                                    </li>
                                    <li>
                                        侧边栏操作icon简化，支持自定义分组标签。
                                        {/*<div>*/}
                                        {/*    <img src="/release/category.png" alt=""/>*/}
                                        {/*</div>*/}
                                    </li>
                                    <li>更精准的滚动标记定位</li>

                                    <li>对用户无感知的代码重构，性能优化</li>
                                    <li>去除标识时的购物车动画</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row version" id='version9'>
                    <div className="left col-3">
                        <div className="version-number">0.9.+ <div>书签管理</div></div>
                    </div>
                    <div className="right col-9">
                        <div>
                            <div className="brief">
                                <div>
                                    <div>你可以在<a href="https://pagenote.logike.cn/me">https://pagenote.logike.cn/me</a>更加<b>高效地管理</b>你的PAGE，为它们添加标签，分组、搜索。</div>
                                </div>
                                <div>
                                    <div><b>不必非得勾选关键字才能留下批注</b>：右击鼠标，点击「添加标注」即可为网页创建标记。</div>
                                </div>
                                <div>
                                    最简单的记录，没有勾选、没有笔记，只需要一个快照：点击插件icon->「拍照-网页快照」让你以<b>最快捷的方式记录网页</b>。
                                </div>
                                <a href="https://pagenote.logike.cn/me?from=release-img">
                                    <img src='/0.9.png' alt=""/>
                                </a>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="row version" id='version86'>
                    <div className="left col-3">
                        <div className="version-number">0.8.6 <div>隐私协议</div></div>
                    </div>
                    <div className="right col-9">
                        <div>
                            <p>
                                我们有必要让你了解到 PAGENOTE 正在做的事情，以及使用了你哪些数据。
                                <br/>
                                请注意：<b>PAGENOTE 不会收集你的个人隐私数据，例如，你正在访问的URL。每一个敏感操作都会提示并得到你的授权。</b>
                                <br/>
                                你大可不必担心个人数据泄露。
                            </p>
                            <div className="brief">
                                你可以在 <a href="https://pagenote.logike.cn/privacy?form=release">隐私协议页面</a> 查看更多详情。
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row version" id='version8'>
                    <div className="left col-3">
                        <div className="version-number">0.8.0 <div>开启分享</div></div>
                    </div>
                    <div className="right col-9">
                        <div>
                            <div>
                                通过pagenote你可以将任意网页分享给你的好友，并携带你的标记和高亮内容。
                            </div>
                            <ul className="functions">
                                <li>
                                    <div className="function-title">
                                        通过GitHub分享
                                    </div>
                                    <div className="function-desc">
                                        <ul>
                                            <li>
                                                多种方式调起分享功能：1、鼠标右击->【<b>分享至pagenote</b>】；2、展开侧边栏点击分享图标；3、浏览器上方右击pagenote图标->【<b>分享至pagenote</b>】
                                            </li>
                                            <li>使用分享功能前，你需要先注册一个 <a href="https://github.com">GitHub账号</a>，并授权pagenote登录。</li>
                                            <li>可选择分享整个网页（如果网页内有敏感信息，如账户金额，请谨慎，注意保护个人隐私）、或只分享标记内容。</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="function-title">
                                        快捷指令
                                    </div>
                                    <div className="function-desc">
                                        <ul>
                                            <li>
                                                【快速创建标记】： 选中一段文本后，按【M】键（mark）创建标记。
                                            </li>
                                            <li>
                                                【快速创建标记并编辑】： 选中一段文本后，按【E】键(edit)创建标记并打开笔记编辑器
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="function-title">
                                        高亮关键词马赛克处理
                                    </div>
                                    <div className="function-desc">
                                        <ul>
                                            <li>
                                                除了对选中文本高亮背景外，支持对勾选内马赛克处理，可以通过此方式遮挡敏感信息。
                                            </li>
                                            <li>
                                                使用方式：原有的色盘中加入了马赛克图标，点击该色盘，可处理为马赛克
                                            </li>
                                        </ul>

                                    </div>
                                </li>
                                <li>
                                    <div className="function-title">
                                        一些交互优化
                                    </div>
                                    <div className="function-desc">
                                        <ul>
                                            <li>
                                                已登录的用户，标记小圆点中会有用户的头条
                                            </li>
                                            <li>
                                                一些性能优化，移动端适配。
                                            </li>
                                        </ul>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="row version">
                    <div className="left col-3">
                        <div className="version-number">pagenote 0.7.+ <div>化繁为简</div></div>
                    </div>
                    <div className="right col-9">
                        <section className="brief">
                            <div>
                                在0.6、0.7版本中，加入了更加丰富的功能。对用户感知比较明显有：
                                <ul>
                                    <li>加入了<b>大纲侧边栏</b>，提供了大纲收缩、折叠模式。</li>
                                    <li>可以<b>拖拽</b>侧边栏到任意位置</li>
                                    <li><b>自动点亮模式</b></li>
                                    <li>根据不同模式有不同的记录<b>动画效果</b></li>
                                    <li>支持<b>备份、还原</b>(原始文件)标记页面</li>
                                    <li>支持导出<b>Markdown</b>格式文件</li>
                                </ul>
                            </div>
                            <p>
                                我们收集到一些用户的反馈。早期的用户反馈很喜欢之前的版本，因为它简单、纯粹、不打扰，所以在众多的产品中选择了pagenote。
                                这也是pagenote一直追寻的初心：简单，小而美。
                                <br />
                                    所以，我们在追求功能完备的基础上，仍然追求操作简单。0.8.0 版本也由此诞生。
                            </p>
                        </section>
                        <section>
                            <h3>
                                0.7.2 化繁为简
                            </h3>

                            <ul className="functions">
                                <li>
                                    <div className="function-title">
                                        侧边栏收起功能
                                    </div>
                                    <div className="function-desc">
                                        将整个侧边栏收缩成一条窄线，这可以最小程度减少pagenote对页面的干扰，你可以更多的关注页面本身。
                                        这更像一本书，翻阅的时候打开它，不需要的时候关闭它。
                                    </div>

                                </li>
                                <li>
                                    <div className="function-title">
                                        默认不写入标注内容
                                    </div>
                                    <div className="function-desc">
                                        避免大量的无用信息展示，如果你需要留下一段笔记内容，在「点亮」状态下，将鼠标放到对应的圆点上，点击右侧的「笔记」icon，即可开始书写你的笔记内容。
                                        并取消了可以粘贴图片的功能。
                                    </div>
                                </li>
                                <li>
                                    <div className="function-title">
                                        浅高亮
                                    </div>
                                    <div className="function-desc">
                                        当标记未「点亮」（激活）时，将对关键词进行下划线高亮。当点击关键字或激活高亮内容时，将对关键字全背景色的覆盖高亮。
                                    </div>
                                </li>
                                <li>
                                    <div className="function-title">
                                        自动区分文本色
                                    </div>
                                    <div className="function-desc">
                                        根据不同的背景高亮色，自动设置前景色为白色或黑色，保证阅读无障碍。
                                    </div>
                                </li>
                                <li>
                                    <div className="function-title">
                                        移动端设备兼容
                                    </div>
                                    <div className="function-desc">
                                        移动端侧边栏不可拖拽，默认靠右边。设置页面更加清晰、操作方便。
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
                <section className="row version">
                    <div className="left col-3">
                        <div className="version-number">
                            了解更多
                        </div>
                    </div>
                    <div className="right col-9">
                        了解更多内容，可以关注我们在<a
                        href="https://chrome.google.com/webstore/detail/dohbgjmflacneejmpdieincbbokoflgm">Firefox</a> 、
                        <a href="https://chrome.google.com/webstore/detail/dohbgjmflacneejmpdieincbbokoflgm">Chrome商城</a>最近动态，或<a href="https://www.wjx.cn/jq/69876579.aspx">参与问卷</a>。觉得好用，请不要吝啬为pagenote评分呀！
                        也可以加入我们用户群 QQ：769094377。
                    </div>
                </section>

            </div>
        )
    }
}
CommonPage(Release);

