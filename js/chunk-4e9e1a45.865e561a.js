(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e9e1a45"],{7313:function(t,e,i){"use strict";i("c5c1")},"7d00":function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"long-api"},[i("HomeNav",[t._v("/ API")]),i("div",{staticClass:"api-content"},[t._m(0),i("div",{staticClass:"api-main"},t._l(t.apiContent,(function(e){return i("div",{key:e.id,staticClass:"api"},[i("h3",[t._v(t._s(e.title))]),t._l(e.titleChe,(function(e){return i("div",{key:e.id,staticClass:"api-che"},[i("h4",[t._v(t._s(e.title))]),i("p",[t._v(t._s(e.chetitle))]),i("ul",t._l(e.cheAll,(function(e){return i("li",{key:e.id},[t._v(t._s(e.all))])})),0),i("p",[t._v(t._s(e.eg))])])}))],2)})),0)])],1)},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"api-top"},[i("p",[t._v(" 本站API均取自CNode( "),i("a",{attrs:{href:"https://cnodejs.org/"}},[t._v("https://cnodejs.org/")]),t._v(") ")]),i("p",[t._v(" 以下 api 路径均以 ("),i("a",{attrs:{href:"https://cnodejs.org/api/v1"}},[t._v("https://cnodejs.org/api/v1")]),t._v(") 为前缀 ")])])}],s=i("87c4"),a={components:{HomeNav:s["a"]},data:function(){return{apiContent:[{id:1,title:"主题",titleChe:[{id:"1-1",title:"get /topics 主题首页",chetitle:"接收 get 参数",cheAll:[{id:"1-1-1",all:"page Number 页数"},{id:"1-1-2",all:"tab String 主题分类。目前有 ask share job good"},{id:"1-1-3",all:"limit Number 每一页的主题数量"},{id:"1-1-4",all:"mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。"}],eg:"示例：/api/v1/topics"},{id:"1-2",title:"post /topics 新建主题",chetitle:"接收 post 参数",cheAll:[{id:"1-2-1",all:"accesstoken String 用户的 accessToken"},{id:"1-2-2",all:"title String 标题"},{id:"1-2-3",all:"tab String 目前有 ask share job dev。开发新客户端的同学，请务必将你们的测试帖发在 dev 专区，以免污染日常的版面，否则会进行封号一周处理。"},{id:"1-2-4",all:"content String 主体内容"}],eg:""},{id:"1-3",title:"post /topics/update 编辑主题",chetitle:"接收 post 参数",cheAll:[{id:"1-3-1",all:"accesstoken String 用户的 accessToken"},{id:"1-3-2",all:"topic_id String 主题id"},{id:"1-3-3",all:"title String 标题"},{id:"1-3-4",all:"tab String 目前有 ask share job"},{id:"1-3-5",all:"content String 主体内容"}],eg:""}]},{id:2,title:"主题收藏",titleChe:[{id:"2-1",title:"post /topic_collect/collect 收藏主题",chetitle:"接收 post 参数",cheAll:[{id:"2-1-1",all:"accesstoken String 用户的 accessToken"},{id:"2-1-2",all:"topic_id String 主题的id"}],eg:""},{id:"2-2",title:"post /topic_collect/de_collect 取消主题",chetitle:"接收 post 参数",cheAll:[{id:"2-2-1",all:"accesstoken String 用户的 accessToken"},{id:"2-2-2",all:"topic_id String 主题的id"}],eg:""},{id:"2-3",title:"get /topic_collect/:loginname 用户所收藏的主题",chetitle:"",cheAll:[],eg:"示例：/api/v1/topic_collect/alsotang"}]},{id:3,title:"评论",titleChe:[{id:"3-1",title:"post /topic/:topic_id/replies 新建评论",chetitle:"接收 post 参数",cheAll:[{id:"3-1-1",all:"accesstoken String 用户的 accessToken"},{id:"3-1-2",all:"content String 评论的主体"},{id:"3-1-3",all:"reply_id String 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。"}],eg:""},{id:"3-2",title:"post /reply/:reply_id/ups 为评论点赞",chetitle:"接收 post 参数",cheAll:[{id:"3-2-1",all:"accesstoken String"}],eg:"接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 action 字段中，up or down。"}]},{id:4,title:"用户",titleChe:[{id:"4-1",title:"get /user/:loginname 用户详情",chetitle:"",cheAll:[],eg:"示例：/api/v1/user/alsotang"},{id:"4-2",title:"post /accesstoken 验证 accessToken 的正确性",chetitle:"接收 post 参数",cheAll:[{id:"4-2-1",all:"accesstoken String 用户的 accessToken"}],eg:"如果成功匹配上用户，返回成功信息。否则 403。"}]},{id:5,title:"消息通知",titleChe:[{id:"5-1",title:"get /message/count 获取未读消息数",chetitle:"接收 get 参数",cheAll:[{id:"5-1-1",all:"accesstoken String"}],eg:""},{id:"5-2",title:"get /messages 获取已读和未读消息",chetitle:"接收 get 参数",cheAll:[{id:"5-2-1",all:"accesstoken String"},{id:"5-2-2",all:"mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。"}],eg:"如果成功匹配上用户，返回成功信息。否则 403。"},{id:"5-3",title:"post /message/mark_all 标记全部已读",chetitle:"接收 post 参数",cheAll:[{id:"5-3-1",all:"accesstoken String"}],eg:""},{id:"5-4",title:"post /message/mark_one/:msg_id 标记单个消息为已读",chetitle:"接收 post 参数",cheAll:[{id:"5-4-1",all:"accesstoken String"}],eg:"请求示例：/message/mark_one/58ec7d39da8344a81eee0c14"}]}]}}},n=a,o=(i("7313"),i("2877")),d=Object(o["a"])(n,l,c,!1,null,null,null);e["default"]=d.exports},"87c4":function(t,e,i){"use strict";var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav"},[i("router-link",{attrs:{to:"/"}},[t._v("主页 ")]),t._t("default")],2)},c=[],s={},a=s,n=(i("a9bd"),i("2877")),o=Object(n["a"])(a,l,c,!1,null,null,null);e["a"]=o.exports},"8a40":function(t,e,i){},a9bd:function(t,e,i){"use strict";i("8a40")},c5c1:function(t,e,i){}}]);
//# sourceMappingURL=chunk-4e9e1a45.865e561a.js.map