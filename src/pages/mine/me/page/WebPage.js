import React,{Component} from "react";
import {Empty, Switch, Tooltip} from 'antd';
import CommonHeader from '../CommonHeader/index';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import Page from './Page';
import { gotoTarget } from "@/pages/mine/me/utils";
import CleanIcon from '@/assets/icon/clean.svg';
import './webpage.scss'

function getLink(url){
  return url.replace(/http[s]+:\/\/(www\.)?/,'').substr(0,10);
}

export default class WebPage extends Component{
  constructor(props) {
    super(props);
  }
  onChange=(e)=>{
    console.log(e.target)
  }


  render() {
    const {keys,removeSelectPages,muilPage,toggleMultSelect} = this.props;
    return(
      <section className='notes'>
        <CommonHeader>

        </CommonHeader>
        <div className="notes-header">
          <Tooltip title='多选模式：一次可以选择多个PAGE浏览、操作；专注模式：一次只可选中一个PAGE浏览'>
            <Switch
              onChange={toggleMultSelect}
              checked={muilPage}
              checkedChildren="多选模式"
              unCheckedChildren="专注模式"
              // checkedChildren={<CheckOutlined />}
              // unCheckedChildren={<CloseOutlined />}
              // defaultChecked
            />
          </Tooltip>
          {
            muilPage &&
            <div className='selected-pages'>
              {
                keys.map((key)=>(
                  <span key={key} className='selected-item'>
                    <span onClick={()=>{gotoTarget(key)}}>{getLink(key)}</span>
                 </span>
                ))
              }
              <span className='selected-item clean' onClick={removeSelectPages}>
                <CleanIcon></CleanIcon>
                清空选中
              </span>
            </div>
          }
        </div>
        {keys.map((url)=>(
          <Page key={url} pageKey={url} />
        ))}
        {
          keys.length ===0 &&
          <Empty
            description={
            <span>
              请在左侧选择 PAGE
            </span>
          }></Empty>
        }
      </section>
    )
  }
}
