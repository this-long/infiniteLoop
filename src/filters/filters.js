import Vue from 'vue'
import moment from 'moment'
moment.locale('zh-cn')
//距离现在时常过滤器
Vue.filter('FromNow', (dateStr) => {
    return moment(dateStr).fromNow();
})

//文章类型判断过滤器
Vue.filter('getTitleType', (type) => {
    return type.top ? '置顶' : type.good ? '精华' : type.tab === 'ask' ? '问答' : type.tab === 'share' ? '分享' : type.tab === 'job' ? '招聘' : '客户端测试'
})
//判断文章来自
Vue.filter('fromWhere', (type) => {
    return type.tab === 'ask' ? '问答' : type.tab === 'share' ? '分享' : type.tab === 'job' ? '招聘' : '客户端测试'
})