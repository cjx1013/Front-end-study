//导入express
const express = require('express')
//创建路由对象
const router = express()
//导入用户信息处理函数模块
const userinfo_handler = require('../router_handler/userinfo')
//导入验证数据的中间件
const expressJoi = require('@escook/express-joi')
//导入需要的验证规则对象
const {update_userinfo_schema, update_password_schema, update_avatar_schema} = require('../schema/user')

//获取用户的基本信息
router.get('/userinfo', userinfo_handler.getUserinfo)
//更新用户的基本信息
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updatetUserinfo)
//重置密码
router.post('/updatePwd', expressJoi(update_password_schema), userinfo_handler.updatePassword)
//更换头像
router.post('/update/avatar', expressJoi(update_avatar_schema), userinfo_handler.updateAvatar)


//向外共享路由对象
module.exports = router