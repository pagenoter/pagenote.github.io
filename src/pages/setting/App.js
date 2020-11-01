import React, {Component} from 'react'
import { CompactPicker, SliderPicker  } from 'react-color'
import Bridge from "../../utils/extensionBridge";
import {convertColor, computePosition} from "../../utils/document";
import AddIcon from '../../assets/icon/add.svg'
import { Modal } from 'antd';
import FunctionIconSetting from "../../components/setting/FunctionIconSetting";
import './setting.scss';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

let bridge = null;
String.prototype.replaceCharAt = function(n,c){
  return this.substr(0, n)+ c + this.substr(n+1,this.length-1-n);
}
const predefineTheme = [
  {
    id:'theme-simple',
    label:'最简单',
    desc:'',
    colors:['#ffc106'],
  },
  {
    id:'theme-default',
    label:'默认色',
    desc:'默认有多色，有深浅，半透明色',
    colors:['#72D0FF','#ffbea9','#c8a6ff','#6fe2d5','#FFDE5D','#FBB5D6'],
  },
  {
    id:'theme-1',
    label:'七彩风',
    desc:'赤橙黄绿蓝靛紫，适用于显著地为标记做分类',
    colors:['#03a9f4','#f44336','#ff5722','#ffc107','#4caf50','#673ab7','#9c27b0'],
  },{
    id:'theme-2',
    label:'山水风',
    desc:'一套青色风，适用于重要程度区分',
    colors:['#00bcd4','#e0f7fa','#80deea','#26c6da','#00acc1','#00838f','#006064'],
  }];



export default class SettingRender extends Component{

  constructor(props) {
    super(props);
    this.colorPart = React.createRef();
    this.state={
      colors:[],
      themeId:'',
      userActivity:[],
      matchType: "smart",
      maxRecord: 30,
      openInTab: false,
      shortCuts: "PAGENOTE",
      enableBookmark: true,
      enableCollectImage: false,
      actionGroup: [],

      colorPickerPro: false,
      colorIndex: -1,
      modalPosition: {
        left:0,
        top:0,
      },

      settingIndex:{
        groupIndex:-1,
        itemIndex: -1,
      }
    }
  }

  componentDidMount() {
    // this.modal = Modal.info({
    //   content: '正在连接PAGENOTE。如果长时间连接失败，请确保已安装最新版PAGENOTE',
    // });
    bridge = new Bridge(document.getElementById('messenger'),'page','extension');
    this.getSetting();
    this.addClickListener();
  }

  addClickListener=()=>{
    document.addEventListener('click',(e)=>{
      if(this.colorPart.current && !this.colorPart.current.contains(e.target)){
        this.setState({
          colorIndex: -1
        })
      }
    })
  };

  getSetting=()=>{
    bridge.sendMessage('get_setting',{},({data,type})=>{
      const setting = data.data || {};
      // this.modal.destroy();
      this.setState({
        colors: setting.colors || [],
        themeId: setting.themeId || '',
        userActivity: setting.userActivity || [],
        matchType: setting.matchType,
        maxRecord: setting.maxRecord,
        enableBookmark: setting.enableBookmark || false,
        enableCollectImage: setting.enableCollectImage || false,
        openInTab: setting.openInTab,
        shortCuts: setting.shortCuts || [],
        actionGroup: setting.actionGroup || [],
        // colorIndex: -1,
      })
    })
  };

  setIndex=(index,e)=>{
    this.setState({
      colorIndex: index,
      modalPosition: {
        left: e.pageX,
        top: e.pageY,
      }
    })
  };

  setShortKey=(e)=>{
    const key = (e.key||'').toUpperCase();
    console.log(key)
    if(!/[A-Z0-9\[\];',.`]/.test(key)){
      alert('仅支持字母、数字和部分标点符号');
      return;
    }
    let {shortCuts,colorIndex} = this.state;
    shortCuts = shortCuts.replaceCharAt(colorIndex,key).substr(0,this.state.colors.length);
    this.setState({
      shortCuts: shortCuts,
    },()=>{
      this.saveSetting();
    })
  };

  setColor = (color, index) => {
    const currentColors = this.state.colors;
    const hasIndex = currentColors.indexOf(color);
    if(hasIndex>-1 && hasIndex!==index){
      return;
    }
    currentColors[index] = color.hex;
    this.setState({
      colors: currentColors
    },()=>{
      this.saveSetting()
    });
  };

  setColors =(colors)=> {
    this.setState({
      colors: [...colors]
    },()=>{
      this.saveSetting();
    })
  };

  toggleTabShow =(e)=>{
    const value = e.target.checked;
    this.setState({
      openInTab: value,
    },()=>{
      setTimeout(()=>{
        this.saveSetting();
      },100)
    })
  };

  toggleBookmark =(e,key='enableCollectImage')=>{
    const value = e.target.checked;
    this.setState({
      [key]: value,
    },()=>{
      setTimeout(()=>{
        this.saveSetting();
      },100)
    })
  };

  changeLimit =(e)=>{
    const value = e.target.value;
    this.setState({
      maxRecord: value,
    },()=>{
      this.saveSetting();
    })
  };

  saveSetting= ()=>{
    const {colors,maxRecord,openInTab,shortCuts,enableBookmark,enableCollectImage,actionGroup} = this.state;
    const settings = {
      colors: colors || [],
      maxRecord: maxRecord,
      enableBookmark: enableBookmark,
      enableCollectImage: enableCollectImage,
      openInTab: openInTab,
      shortCuts: shortCuts || [],
      actionGroup: actionGroup,
    };
    bridge.sendMessage('save_setting',{
      ...settings,
    });
    setTimeout(()=>{
      this.getSetting();
    },3000)
  };

  setIconFun =(groupIndex,itemIndex)=>{
    this.setState({
      settingIndex:{
        groupIndex,
        itemIndex,
      }
    })
  };

  deleteFun =(groupIndex,itemIndex)=>{
    const actionGroup = this.state.actionGroup;
    const group = actionGroup[groupIndex];
    if(group.length<=1){
      actionGroup.splice(groupIndex,1);
    }else{
      group.splice(itemIndex,1);
    }
    this.setState({
      settingIndex:{
        groupIndex:-1,
        itemIndex:-1,
      },
      actionGroup:actionGroup
    },()=>{
      this.saveSetting();
    })
  };

  saveFun =(funItem,groupIndex,itemIndex)=>{
    const actionGroup = this.state.actionGroup;
    actionGroup[groupIndex][itemIndex] = funItem;
    this.setState({
      actionGroup: actionGroup
    },()=>{
      this.saveSetting();
    })
  };

  addItem=(type='item',index)=>{
    const actionGroup = this.state.actionGroup;
    switch (type) {
      case 'item':
        if(actionGroup[index].length>4){
          alert('最多设置4个子按钮');
          return;
        }
        actionGroup[index].push({
          name: '定义一个名称吧：'+new Date().toLocaleTimeString(),
          shortcut: '',
          clickScript: '',
          clickUrl: '',
          icon: '',
        });
        break;
      case 'group':
        if(actionGroup.length>5){
          alert('最多设置5组');
          return;
        }
        actionGroup.push([{
          name: '定义一个名称吧：'+new Date().toLocaleTimeString(),
          shortcut: '',
          clickScript: '',
          clickUrl: '',
          icon: '',
        }]);
        break;
    }
    this.setState({
      actionGroup: actionGroup
    })
  };

  resetFuns =()=>{

  };


  render() {
    const {colors=[],shortCuts=[],colorIndex,modalPosition,openInTab,maxRecord,enableBookmark,colorPickerPro,enableCollectImage,actionGroup,settingIndex} = this.state;
    let funItem = {};
    try{
      funItem = actionGroup[settingIndex.groupIndex][settingIndex.itemIndex]
    }catch (e) {

    }

    return (
      <div className='setting-page'>
        <div className='pagenote-bar'>
          <div className='pagenote setting-part'>
            <div className='tip'>
              点击下方你想要个性化的模块进行设置。
            </div>
            <div className='function-container'>
              <div className='function-area'>
                <div className='function-colors' ref={this.colorPart}>
                  {
                    colors.map((color,index)=>{
                      const {x:offsetX,y:offsetY} = computePosition(index-1,35);
                      return(
                        <div
                          key={color+index}
                          onClick={(e)=>{this.setIndex(index,e)}}
                          className={`color-item ${index===colorIndex?'active':''}`}  style={{
                          top: (offsetY / -1) + 'px',
                          left: (offsetX / -1) + 'px',
                          background: color,
                          color: convertColor(color).textColor
                        }}>{shortCuts[index]}</div>
                      )
                    })
                  }
                  <div
                    className={`color-modal ${colorIndex>=0?'show':''}`}
                    style={{left: modalPosition.left,top: modalPosition.top}}
                  >
                    <div>
                      <div className='setting-title'>
                        色块修改
                      </div>
                      <div className='setting-item'>
                        <div className='setting-label'>选取高亮背景色：</div>
                        {
                          colorPickerPro ?
                            <SliderPicker onChangeComplete={(color)=>{this.setColor(color,colorIndex)}} color={colors[colorIndex]}/>
                            : <CompactPicker onChangeComplete={(color)=>{this.setColor(color,colorIndex)}}
                                             colors={[...predefineTheme[0].colors,...predefineTheme[1].colors,...predefineTheme[2].colors]}
                                             color={colors[colorIndex]} />
                        }

                      </div>
                      {/*<div className='setting-item'>*/}
                      {/*    <span className='setting-label'>字体色：</span>*/}
                      {/*    <span className='color-show' style={{background: convertColor(colors[colorIndex]).textColor}}></span>*/}
                      {/*    <span className='tip'>根据背景色自动计算</span>*/}
                      {/*</div>*/}
                      <div className='setting-item'>
                                    <span className='setting-label'>
                                        快捷键：
                                    </span>
                        <input readOnly onKeyUp={this.setShortKey} value={shortCuts[colorIndex]}/>
                      </div>
                    </div>

                    <div className='predefine-theme'>
                      <div className='setting-title'>一键设置</div>
                      <div>
                        {
                          predefineTheme.map((item)=>(
                            <div key={item.label}>
                              <button onClick={()=>this.setColors(item.colors)}>{item.label}</button>
                              {
                                item.colors.map((color)=>(
                                  <span key={color} className='set-color-item' style={{background:color}}></span>
                                ))
                              }
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className='function-custom'>
                  {/*<div className='action-group'>*/}
                  {/*    <CopyIcon className='function-item'/>*/}
                  {/*</div>*/}
                  {
                    actionGroup.map((group,index)=>(
                      <div key={index} className='action-group'>
                        {group.map((action,i)=>{
                          const image = /^<svg/.test(action.icon) ?  `data:image/svg+xml;base64,${window.btoa(action.icon)}` : action.icon;
                          return(
                            <div onClick={()=>{this.setIconFun(index,i)}} key={action.name+action.icon+i}
                                 className={`function-item ${(settingIndex.groupIndex===index && settingIndex.itemIndex===i)?'active':''}`}
                                 style={{ backgroundImage: `url(${image})`}}>
                              <svg onClick={()=>this.deleteFun(index,i)} t="1603522183404" className="delete" viewBox="0 0 1024 1024"
                                   version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3421"
                                   width="12" height="12">
                                <path
                                  d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                                  fill="#CCCCCC" p-id="3422"></path>
                                <path
                                  d="M484.844 511.908L318.91 345.974c-8.331-8.331-8.331-21.839 0-30.17 8.331-8.331 21.839-8.331 30.17 0l165.934 165.934L680.95 315.804c8.33-8.331 21.838-8.331 30.17 0 8.33 8.331 8.33 21.839 0 30.17L545.184 511.908 711.12 677.843c8.33 8.33 8.33 21.838 0 30.17-8.332 8.33-21.84 8.33-30.17 0L515.014 542.078 349.08 708.013c-8.331 8.33-21.839 8.33-30.17 0-8.331-8.332-8.331-21.84 0-30.17l165.934-165.935z"
                                  fill="#FFFFFF" p-id="3423"></path>
                              </svg>
                            </div>
                          )
                        })}
                        <div className='function-item'>
                          <AddIcon onClick={()=>this.addItem('item',index)}/>
                        </div>
                      </div>
                    ))
                  }
                  <div className='action-group'>
                    <AddIcon className='function-item' onClick={()=>{this.addItem('group')}} />
                    {/*<ResetIcon onClick={this.resetFuns} className='function-item'  />*/}
                  </div>
                </div>
              </div>
              <FunctionIconSetting key={settingIndex.groupIndex+'-'+settingIndex.itemIndex} onSave={this.saveFun} funItem={funItem} groupIndex={settingIndex.groupIndex} itemIndex={settingIndex.itemIndex} />
            </div>
          </div>
          <div className='limit setting-part'>
            <label>
              单页面最大标记数 <b>{maxRecord}</b>
              <input type="range" value={maxRecord} max={50} min={0} onChange={this.changeLimit}/>
              <div className='tip'>
                {
                  maxRecord == 0 &&
                  <div>
                    当设置为0，等同于<b>关闭 PAGENOTE</b> ：不可进行标记、已有标记的页面也将无法使用 PAGENOTE 功能。
                    <br/>
                    你可以设置为0来关闭 PAGENOTE
                    <br/>
                  </div>
                }
              </div>
            </label>
          </div>
          <div className='tab setting-part'>
            <label>
              <input type="checkbox" checked={openInTab} onChange={this.toggleTabShow}/>
              新开页面打开 <a href="/me">PAGENOTE/ME</a>
            </label>
          </div>

          <div className='bookmark setting-part'>
            <label>
              <input id='enable-bookmarks' type="checkbox" checked={enableBookmark} onChange={(e)=>this.toggleBookmark(e,'enableBookmark')}/>
              启用智能书签
              <span className='tip'><a href="/auto_bookmark">了解什么是「智能书签」</a></span>
            </label>
            <div className='tip'>
              {
                enableBookmark? '开启后请不要（也无法）手动操作 pagenote 书签文件夹（pagenote将根据标记自动重置）':''
              }
            </div>
          </div>
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="site-collapse-custom-collapse"
          >
            <Panel header="高级设置" key="1" className="site-collapse-custom-panel">
              开发中：支持webdav协议。
            </Panel>
          </Collapse>

          {/*<div className='images setting-part'>*/}
          {/*    <label>*/}
          {/*        <input type="checkbox" checked={enableCollectImage} onChange={(e)=>this.toggleBookmark(e,'enableCollectImage')}/>*/}
          {/*        开启图片抓取*/}
          {/*        <span className='tip'>*/}
          {/*            创建标记后，自动抓取网页内的图片并保存*/}
          {/*        </span>*/}
          {/*    </label>*/}
          {/*</div>*/}

          <div className='setting-part'>
            <div className="tip">
              配置修改后，已打开的标签页刷新后生效。
              {/*以上配置还不够？了解更多<a href="/pricing">付费定制化服务</a>*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}