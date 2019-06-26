import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }
  render() {
    const bookList = [{ bookId: 1, sex: 0 }, { bookId: 2, sex: 1 }, { bookId: 3, sex: 0 }, { bookId: 4, sex: 1 }]
    return (
      <View className='novelBookFourMutiLine' style='background-color:red'>
        {
          bookList.map((bookInfoItem) => {
            console.log(JSON.stringify(bookInfoItem))
            const sexText = bookInfoItem.sex == 0 ? '女' : '男'
            return (
              <View className='bookItem'>
                <Text>{bookInfoItem.bookId}</Text>
                <Text>{sexText}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}
