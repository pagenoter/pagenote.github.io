import React, {Component,Fragment} from 'react';
import debounce from 'lodash/debounce'
import './PageDetail.scss';
import BigPicture from "bigpicture";
import DropLabel from "../DropLabel";
import DateIcon from "../../assets/icon/date.svg";
import Tag from "../../assets/icon/tag.svg";
import DeleteIcon from "../../assets/draw/delete.svg";
// import NoteIcon from "../../assets/icon/note.svg";
import CameraIcon from "../../assets/icon/camera.svg";
// import LightHeader from '../../lib/light-header';
// import loadscript from "../../utils/loadscript";
import Editor from "../editor/Editor";
import DropLabels from "../droplabel/DropLabel";

// TODO 支持设置字号
export default class PageDetail extends Component{
    constructor(props) {
        super(props);
        const selectedPage = this.props.selectedPage||{};
        this.state={
            alikePages:[],
            pageCategorySet: new Set(selectedPage.categories||[selectedPage.category||'default'])
        }
    }

    componentDidMount() {
        this.computeAlikePage();
    }

    saveEditorPage =(data)=>{
        const blocks = data.blocks || [];
        const steps = [];
        let tempStep = {};
        let tempTip = '';
        blocks.forEach((block)=>{
            if(block.type==='lightheader'){
                tempStep = block.data.light;
                tempStep.tip = ''; // 清空批注
                steps.push(tempStep);
            } else {
                tempStep.tip = tempStep.tip + block.data.text + '</br>'; // 否则为批注
            }
        });
        const page = this.props.selectedPage;
        page.steps = steps;
        this.savePage(page);
    };

    renderBlocks=()=>{
        const {steps,images} = this.props.selectedPage;
        const stepBlocks = [];
        steps.forEach((step)=>{
            const pre = typeof step.pre === 'string' ? step.pre : '';
            const suff = typeof step.suffix === 'string' ? step.suffix : '';
            const middle = document.createElement('light');
            middle.style = `border-bottom: 1px solid ${step.bg||''}`;
            middle.innerText = step.text;
            const text = `${pre}<light style="border-bottom: 1px solid ${step.bg||''}">${middle.outerHTML}</light>${suff}`;
            stepBlocks.push({
                "type" : "lightheader",
                "data" : {
                    "text" : text,
                    "level" : 4,
                    "color": step.bg,
                    "light": step,
                },
                "readonly": true,
              }
            );
            if(step.tip){
                stepBlocks.push({
                    "type" : "paragraph",
                    "data" : {
                        "text" : step.tip
                    }
                },)
            }
        });
        // images.forEach((snapshot)=>{
        //     stepBlocks.push({
        //         "type" : "image",
        //         "data" : {
        //             // "file" : {
        //             //     "url" : snapshot,
        //             // },
        //             "url" : snapshot,
        //             // "caption" : "",
        //             "withBorder" : true,
        //             "stretched" : false,
        //             "withBackground" : true
        //         }
        //     })
        // });

        return stepBlocks;
    };

    computeAlikePage=()=>{
        const {data,selectedPage} = this.props;
        const tempAlike = [];
        Object.keys(data).forEach((key)=>{
            const pageItem = data[key];
            const isLike = (pageItem.keys.length && pageItem.keys[0]===selectedPage.keys[0]) || (pageItem.icon && pageItem.icon === selectedPage.icon);
            if(isLike){
                if(pageItem.url!==selectedPage.url){
                    tempAlike.push(pageItem);
                }
            }
        });
        this.setState({
            alikePages: tempAlike
        })
    };

    bigPicture(e,snapshot,gallery,index){
        BigPicture({
            el: e.target,
            // imgSrc: snapshot,
            gallery: gallery,
            position:index,
            animationEnd: function() {
            },
        });
    }

    deleteLight=(index)=>{
        const newPage = this.props.selectedPage;
        newPage.steps.splice(index,1);
        this.savePage(newPage);
    };

    deletePage=()=>{
        this.savePage(null);
    };

    deleteSnapshot =(index)=>{
        const page = this.props.selectedPage;
        page.snapshots.splice(index,1);
        this.savePage(page);
    };

    savePage = debounce((plainData)=>{
        if(plainData===undefined){
            plainData = this.props.selectedPage;
        }
        const page = this.props.selectedPage;
        this.props.onSavePage({
            url: page.url,
            keys: page.keys,
            plainData:plainData,
        });
    },50);

    modifyNote = (e)=>{
        const value = e.target.value;
        const page = this.props.selectedPage;
        page.note = value||'';
        this.savePage(page);
    };

    pushPage = (page)=>{
        this.props.onSelectPage(page);
    };

    setCategories = (category,method='add')=>{
        if(!category){
            return;
        }
        const { selectedPage } = this.props;
        const categoriesSet = this.state.pageCategorySet;
        if(method==='add'){
            categoriesSet.add(category);
        } else if(method==='delete') {
            categoriesSet.delete(category);
        }
        this.setState({
            pageCategorySet: categoriesSet
        });
        selectedPage.categories = Array.from(categoriesSet);
        this.savePage(selectedPage);
    };



    render() {
        const { selectedPage,categories } = this.props;
        const { alikePages,pageCategorySet } = this.state;
        const snapshots = selectedPage ? (selectedPage.snapshots||[]) : [];
        const images = selectedPage ? (selectedPage.images || []) : [];
        const steps = selectedPage.steps || [];
        const blocks = this.renderBlocks();
        return <Fragment>
            {
                selectedPage &&
                <div className="page-detail">
                    <div className="side-bar">
                        <DeleteIcon className='icon delete-page-icon' width={16} height={16} onClick={this.deletePage} />
                    </div>
                    <div>
                        <div className='page-header'>
                            <div className='page-header-meta'>
                                <div className='page-link'>
                                    <div>{selectedPage.title||selectedPage.url}</div>
                                    <a target='_blank' href={selectedPage.url} className='link'>{selectedPage.title!==selectedPage.url?selectedPage.url:''}</a>
                                </div>
                                <div className='meta-info'>
                                    <div className='date'>
                                         <DateIcon />
                                         <span>{new Date(selectedPage.lastModified).toLocaleDateString()}</span>
                                    </div>
                                    <div className='category'>
                                        <Tag/>
                                        <DropLabels
                                          onSet={this.setCategories}
                                          categories={categories}
                                          currentCategories={pageCategorySet}
                                        />
                                    </div>
                                </div>
                            </div>
                            {
                                images.length>0 &&
                                <div className='page-img'>
                                    <img src={images[0]} onClick={(e)=>{this.bigPicture(e,images[0],images.map((s)=>{return {src:s}}))}}/>
                                </div>
                            }

                        </div>


                        <div className="main-content">
                            <div className="left-content">
                                <div className='lights'>
                                    {
                                        steps.length===0 &&
                                        <div className='empty-lights'>
                                            没有此页面上留下笔记。<a href={selectedPage.url} target='_blank'>去添加</a>
                                        </div>
                                    }
                                    {
                                        steps.map((step,index)=>(
                                          <div className='light' key={step[6]+index}>
                                              <p style={{borderColor: step[5]}} className='refer'>
                                                  <svg onClick={()=>this.deleteLight(index)} t="1593394105976" className="icon delete-icon" viewBox="0 0 1024 1024" version="1.1"
                                                       xmlns="http://www.w3.org/2000/svg" p-id="2228" width="16" height="16">
                                                      <path
                                                        d="M810.666667 170.666667 661.333333 170.666667 618.666667 128 405.333333 128 362.666667 170.666667 213.333333 170.666667 213.333333 256 810.666667 256M256 810.666667C256 857.6 294.4 896 341.333333 896L682.666667 896C729.6 896 768 857.6 768 810.666667L768 298.666667 256 298.666667 256 810.666667Z"
                                                        p-id="2229" fill="#707070"></path>
                                                  </svg>
                                                  {/*<span>{step[11]}</span>*/}
                                                  <span className='light-keyword' style={{borderColor: step[5]}}>{step[3]}</span>
                                                  {/*<span>{step[12]}</span>*/}
                                              </p>
                                              <div className='note'>
                                                  <div className='editor-text-target'>
                                                  </div>
                                                  <div className='editor-bar-target'>

                                                  </div>
                                              </div>
                                          </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="right-content">
                                <Editor tools={['marker','paragraph','lightheader']} key={selectedPage.url} data={{blocks:blocks}} onSave={this.saveEditorPage} />
                            </div>
                        </div>

                        <div className='summary' >
                            <textarea  placeholder='为该网页添加一段总结、笔记、评价...'
                                       defaultValue={selectedPage.note}
                                       onChange={this.modifyNote}>
                                {/*{selectedPage.note}*/}
                            </textarea>
                        </div>
                        <div className="snapshots">
                            {
                                snapshots.map((item,index)=>(
                                  <div key={index} className='snapshot'>
                                      <img className='snapshot-img'
                                           src={item}
                                           onClick={(e)=>{this.bigPicture(e,snapshots[index],snapshots.map((s)=>{return {src:s}}),index)}} alt="网页快照"/>
                                      <div className='snapshot-tips'>
                                          <svg onClick={()=>this.deleteSnapshot(index)} t="1593394105976" className="icon delete-icon" viewBox="0 0 1024 1024" version="1.1"
                                               xmlns="http://www.w3.org/2000/svg" p-id="2228" width="16" height="16">
                                              <path
                                                d="M810.666667 170.666667 661.333333 170.666667 618.666667 128 405.333333 128 362.666667 170.666667 213.333333 170.666667 213.333333 256 810.666667 256M256 810.666667C256 857.6 294.4 896 341.333333 896L682.666667 896C729.6 896 768 857.6 768 810.666667L768 298.666667 256 298.666667 256 810.666667Z"
                                                p-id="2229" fill="#707070"></path>
                                          </svg>
                                      </div>
                                  </div>
                                ))
                            }
                            {
                                snapshots.length===0 &&
                                  <div className='snapshots-tip'>
                                      <CameraIcon />暂无快照。<a href={selectedPage.url} target='_blank'>去拍照</a>
                                  </div>
                            }
                        </div>
                    </div>
                </div>
            }
            {/*增加视图大纲 TODO*/}
            <div className='alike-module'>
                <h4>相似网页</h4>
                <div>
                    {
                        alikePages.map((page,index)=>(
                          <div onClick={()=>{this.pushPage(page)}} className='alike-item' key={page.url+index}>
                              <div>{page.title}</div>
                              <div className='alike-item-link'>{page.url}</div>
                          </div>
                        ))
                    }
                </div>
            </div>

        </Fragment>;
    }
}
