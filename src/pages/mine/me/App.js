import React, {Component} from 'react'
import { Select,Spin } from 'antd';
import WebPage from "./page/WebPage";
import Groups from './Groups/Groups';
import {fetchGroups} from "@/utils/api";
import {gotoTarget} from "@/pages/mine/me/utils";
import './me.scss'

const { Option } = Select;
const groupTypes = [
    {
        value: 2,
        label: '按标签分组'
    },
    {
        value: 0,
        label: '按域名分组'
    },
    {
        value: 1,
        label: '按日期分组'
    },
];
const predefineSize = window.innerWidth - 160 - 2;

export default class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVersion: '',
            theme: {
                bgColor: '#c5c5c5',
            },
            barSize: 400,


            groupType: 1,
            searchString: '',

            fetching: false,
            groups: [
                // {
                //     label: '默认分组',
                //     pages: [
                //         {
                //             categories: [],
                //             description: "描述内容",
                //             icon: "",
                //             lastModified: 0,
                //             note: "笔记",
                //             // snapshots: [],
                //             steps: [],
                //             title: 'title内容',
                //             url: 'https://baidu.com',
                //             version: 2
                //         }
                //     ]
                // }
            ],
            muilPage: window.localStorage.getItem('muilPage')==='1',
            selectedPageKeysArray: [],
            selectedPagesInfo:{

            },
            // 锚点信息
            targetInfos:{

            }
        };
    }

    componentDidMount() {
        this.fetchGroupList();
        this.initSelected();
    }

    initSelected=()=>{
        let selectedArray = [];
        try{
            const selectedKeys = localStorage.getItem('selectedKeys');
            selectedArray = selectedKeys.split(',').filter((value)=>{
                return !!value
            })
        }catch (e){

        }
        this.setState({
            selectedPageKeysArray: selectedArray||[]
        })
    }

    fetchGroupList=()=>{
        this.setState({
            fetching: true,
        })
        fetchGroups(this.state.groupType,(result={})=>{
            const groups = result.groups || [];
            this.setState({
                groups: groups,
                fetching: false,
            },()=>{
                this.computeTarget()
            })
        })
    }

    computeTarget=()=>{
        const pageItems = document.querySelectorAll('.page-item[data-page]');
        const {targetInfos} = this.state;
        pageItems.forEach((pageItem)=>{
            const offsetTop = pageItem.offsetTop || -1000
            targetInfos[pageItem.dataset['page']] = offsetTop;
        })
        this.setState({
            targetInfos: targetInfos
        })
    }

    toggleMultSelect=()=>{
        const isMult = !this.state.muilPage;
        this.setState({
            muilPage: isMult,
        },()=>{
            window.localStorage.setItem('muilPage',isMult?'1':'0');
        })
    }

    selectPage=(pageKey,e)=>{
        let {selectedPageKeysArray,muilPage} = this.state;
        if(muilPage){
            const index = selectedPageKeysArray.indexOf(pageKey);
            if(index>=0){
                selectedPageKeysArray.splice(index,1);
            }else{
                selectedPageKeysArray.push(pageKey);
            }
        }else{
            selectedPageKeysArray = [pageKey]
        }

        this.setState({
            selectedPageKeysArray
        },()=>{
            gotoTarget(pageKey,[0,1])
        });
        localStorage.setItem('selectedKeys',selectedPageKeysArray.join(','));
        // const info = whats.compute(e.target);
        // console.log(info);
    }

    removeSelectPages=()=>{
        this.setState({
            selectedPageKeysArray:[]
        })
        localStorage.setItem('selectedKeys','');
    }

    changeGroupType=(type)=>{
        this.setState({
            groupType: type
        },()=>{
            this.fetchGroupList();
        })
    }

    render() {
        const {theme = {}, barSize,groups,fetching,selectedPageKeysArray,groupType,targetInfos,muilPage} = this.state;
        const bgColor = theme.bgColor;
        return (
          <div className={`pages-and-detail`}
               style={{border: `1px solid ${bgColor}`, backgroundColor: bgColor}}>
              <section className='pages' style={{width: barSize, background: bgColor}}>
                  <Select defaultValue={groupType} style={{ width: 120 }} bordered={false} onChange={this.changeGroupType}>
                      {
                          groupTypes.map((item)=>(
                            <Option value={item.value}>{item.label}</Option>
                          ))
                      }
                  </Select>
                  <Spin spinning={fetching}>
                      <Groups groups={groups}
                              selectPage={this.selectPage}
                              selectedPageKeysArray={selectedPageKeysArray}
                              size={barSize}
                      >
                      </Groups>
                  </Spin>
              </section>
              <aside className='split-line' onMouseDown={this.dragSize} style={{color: '#fff'}}>
                  <div className='left' onClick={() => this.setSize(350)}>left&lt;</div>
                  <div className='right' onClick={() => this.setSize(predefineSize - 4)}>&gt;right</div>

                  <div className='selected-targets'>
                      {
                          selectedPageKeysArray.map((key,index)=> {
                              const height = document.querySelector(".groups").scrollHeight;
                              const elementTop = targetInfos[key] || -1000;
                              return (
                                <aside onClick={()=>{gotoTarget(key)}} key={key} style={{top: ((elementTop)/height)*window.innerHeight+'px'}}>
                                    <div className='target-info'>
                                        {key}
                                    </div>
                                </aside>
                              )
                          })
                      }
                  </div>
              </aside>

              <WebPage
                muilPage={muilPage}
                keys={selectedPageKeysArray}
                toggleMultSelect={this.toggleMultSelect}
                removeSelectPages={this.removeSelectPages}>

              </WebPage>
          </div>
        )
    }
}
