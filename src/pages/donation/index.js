import React, {Component} from 'react'
import CommonPage from "../CommonPage";
import './donation.scss'

const users = [
  {
    name:'**涛',
    amount: 10,
    type: 1,
    time:'2020-03-26'
  },
  {
    name:'**杰',
    amount: 6.6,
    type: 1,
    time:'2020-11-05'
  },
  {
    name:'Liu*un',
    amount: 5,
    type: 2,
    time:'2020-10-13'
  },
  {
    name:'a*e',
    amount: 10,
    type: 2,
    time:'2020-10-21'
  },
  {
    name:'-',
    amount: 15,
    type: 2,
    time:'2020-11-2'
  },
  {
    name:'顾*',
    amount: 15,
    type: 2,
    time:'2020-11-12'
  },
  {
    name:'我是**侠',
    amount: 10,
    type: 2,
    time:'2020-11-30'
  },
];

const payType={
  1:'支付宝',
  2:'微信',
}

export default class CreatePage extends Component{

  render() {
    return (
      <div className='donation'>
        <p>
          <p>
            <span className='light-me green'>打赏是让我们知道「PAGENOTE 的努力有了一些价值，帮助我们发展得更好」，任意金额都是鼓励。</span>
            如果觉得给你带来了一点帮助，支持一下吧。金额随意。
          </p>
          <p>
            <img src="/dashang.jpg" alt="支持pagenote"/>
          </p>
          <p>
            如果未来 PAGENOTE 提供部分付费高级功能、版本，打赏用户将得到最大程度的优惠。
            <br/>
            当然，PAGENOTE 承诺 <span className='light-me'>「你现在能使用的功能，在未来也将继续可以使用，不会因为没有付费而针对你停止服务」</span>
          </p>
          <p>
            PAGENOTE 需要你的支持和鼓励，但同时希望营造一个良好的用户、产品关系--PAGENOTE 能够很好的发展，PAGENOTE 值的用户自发地为之付费。
          </p>
        </p>
        <div className='donation-users'>
            <h4>感谢以下用户的打赏支持：</h4>
            <div>
              <table>
                <thead>
                  <th>
                    用户
                  </th>
                  <th>支付方式</th>
                  <th>金额</th>
                  <th></th>
                </thead>
                <tbody>
                  {users.map((user)=>(
                    <tr key={user.name}>
                      <td>{user.name}</td>
                      <td>{payType[user.type]}</td>
                      <td>{user.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    )
  }
}

CommonPage(CreatePage);
