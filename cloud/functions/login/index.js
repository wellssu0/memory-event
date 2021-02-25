
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  console.log(event)
  console.log(context)

  const wxContext = cloud.getWXContext()

  const findUser = async () => {
    const res = await db.collection('user').where({
      _openid: wxContext.OPENID
    }).get()
    if(res.errMsg === 'collection.get:ok' && res.data.length > 0){
      return res.data[0];
    }else{
      return '';
    }
  }

  let userInfo = await findUser();

  if(!userInfo){
    let addSuccess = await db.collection('user').add({
      data: {
        _openid: wxContext.OPENID,
        create_date: new Date(),
        username: '',
        avatar: ''
      },
      success(res) { //成功打印消息
        return true
      },
      fail(res) { //存入数据库失败
        return false
      }
    })
    if(addSuccess){
      userInfo = await findUser();
    }
  }
  userInfo = userInfo ? userInfo : {}
  console.log('u',userInfo)
  return {
    ...userInfo
  }
}

