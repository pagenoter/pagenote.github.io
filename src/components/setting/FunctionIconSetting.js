import React from 'react'
import {Form, Input, InputNumber, Button, Select, message} from 'antd';
import CheckVersionPart from "../../pages/CheckVersionPart";
import './function-setting.scss'
import {useTranslation} from "react-i18next";

const Option = Select.Option;

const defaultFuns = {
  baidu:{
    icon:'<svg t="1603457554872" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19431" width="48" height="48"><path d="M0 0h1024v1024H0z" fill="#FFFFFF" p-id="19432"></path><path d="M412.266496 352.396288c50.030592 0 90.456064-57.403392 90.456064-128.381952 0-70.91712-40.425472-128.304128-90.456064-128.304128-49.969152 0-90.502144 57.387008-90.502144 128.304128 0 70.97856 40.532992 128.381952 90.50112 128.381952M627.729408 360.882176c66.895872 8.64256 109.89568-62.502912 118.443008-116.424704 8.716288-53.829632-34.43712-116.40832-81.770496-127.16032-47.45728-10.841088-106.693632 64.91648-112.086016 114.318336-6.449152 60.38016 8.685568 120.684544 75.413504 129.266688M244.107264 533.393408c90.57792-19.408896 78.262272-127.328256 75.55072-150.936576-4.457472-36.374528-47.36512-99.9168-105.63584-94.908416-73.315328 6.551552-84.022272 112.134144-84.022272 112.134144-9.926656 48.820224 23.728128 153.119744 114.107392 133.710848M892.84096 451.418112c0-25.777152-21.476352-103.4752-101.210112-103.4752-79.885312 0-90.5472 73.315328-90.5472 125.144064 0 49.477632 4.182016 118.532096 103.384064 116.333568 99.233792-2.168832 88.373248-112.057344 88.373248-138.002432M340.296704 721.117184c-2.650112 7.588864-8.578048 26.998784-3.46112 43.902976 10.139648 37.902336 43.16672 39.612416 43.16672 39.612416h47.42656V689.01888H376.61696c-22.82496 6.795264-33.85344 24.49408-36.320256 32.099328" fill="#3388FF" p-id="19433"></path><path d="M701.000704 850.308096H565.492736c-52.496384-13.499392-54.992896-50.683904-54.992896-50.683904V650.2144l54.992896-0.88576v134.291456c3.354624 14.294016 21.200896 16.889856 21.200896 16.889856h55.852032V650.2144h58.45504V850.30912z m-219.33056 0.80896H363.931648c-50.85696-10.093568-71.108608-44.71296-73.68192-50.607104-2.527232-5.986304-16.91136-33.794048-9.283584-81.088512 21.982208-70.90176 84.666368-76.002304 84.666368-76.002304h62.683136v-76.796928l53.354496 0.80896V851.11808z m309.95456-173.247488S688.14848 598.065152 627.73248 511.81568c-81.862656-127.174656-198.191104-75.42272-237.085696-10.750976-38.724608 64.671744-99.095552 105.582592-107.70432 116.409344-8.670208 10.674176-124.952576 73.238528-99.141632 187.55584C209.6128 919.28576 300.26752 917.071872 300.26752 917.071872s66.820096 6.565888 144.362496-10.735616c77.51168-17.133568 144.300032 4.276224 144.300032 4.276224s181.126144 60.471296 230.66624-55.952384c49.52576-116.409344-27.971584-176.790528-27.971584-176.790528z" fill="#3388FF" p-id="19434"></path></svg>',
    name:'百度搜索',
    shortcut:'b',
    clickUrl: 'https://www.baidu.com/s?wd=${keyword}'
  },
  baidu_new:{
    icon:'<svg t="1603457554872" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19431" width="48" height="48"><path d="M0 0h1024v1024H0z" fill="#FFFFFF" p-id="19432"></path><path d="M412.266496 352.396288c50.030592 0 90.456064-57.403392 90.456064-128.381952 0-70.91712-40.425472-128.304128-90.456064-128.304128-49.969152 0-90.502144 57.387008-90.502144 128.304128 0 70.97856 40.532992 128.381952 90.50112 128.381952M627.729408 360.882176c66.895872 8.64256 109.89568-62.502912 118.443008-116.424704 8.716288-53.829632-34.43712-116.40832-81.770496-127.16032-47.45728-10.841088-106.693632 64.91648-112.086016 114.318336-6.449152 60.38016 8.685568 120.684544 75.413504 129.266688M244.107264 533.393408c90.57792-19.408896 78.262272-127.328256 75.55072-150.936576-4.457472-36.374528-47.36512-99.9168-105.63584-94.908416-73.315328 6.551552-84.022272 112.134144-84.022272 112.134144-9.926656 48.820224 23.728128 153.119744 114.107392 133.710848M892.84096 451.418112c0-25.777152-21.476352-103.4752-101.210112-103.4752-79.885312 0-90.5472 73.315328-90.5472 125.144064 0 49.477632 4.182016 118.532096 103.384064 116.333568 99.233792-2.168832 88.373248-112.057344 88.373248-138.002432M340.296704 721.117184c-2.650112 7.588864-8.578048 26.998784-3.46112 43.902976 10.139648 37.902336 43.16672 39.612416 43.16672 39.612416h47.42656V689.01888H376.61696c-22.82496 6.795264-33.85344 24.49408-36.320256 32.099328" fill="#3388FF" p-id="19433"></path><path d="M701.000704 850.308096H565.492736c-52.496384-13.499392-54.992896-50.683904-54.992896-50.683904V650.2144l54.992896-0.88576v134.291456c3.354624 14.294016 21.200896 16.889856 21.200896 16.889856h55.852032V650.2144h58.45504V850.30912z m-219.33056 0.80896H363.931648c-50.85696-10.093568-71.108608-44.71296-73.68192-50.607104-2.527232-5.986304-16.91136-33.794048-9.283584-81.088512 21.982208-70.90176 84.666368-76.002304 84.666368-76.002304h62.683136v-76.796928l53.354496 0.80896V851.11808z m309.95456-173.247488S688.14848 598.065152 627.73248 511.81568c-81.862656-127.174656-198.191104-75.42272-237.085696-10.750976-38.724608 64.671744-99.095552 105.582592-107.70432 116.409344-8.670208 10.674176-124.952576 73.238528-99.141632 187.55584C209.6128 919.28576 300.26752 917.071872 300.26752 917.071872s66.820096 6.565888 144.362496-10.735616c77.51168-17.133568 144.300032 4.276224 144.300032 4.276224s181.126144 60.471296 230.66624-55.952384c49.52576-116.409344-27.971584-176.790528-27.971584-176.790528z" fill="#3388FF" p-id="19434"></path></svg>',
    name:'百度搜索-当前窗口新标签页打开',
    shortcut:'',
    clickUrl: 'https://www.baidu.com/s?wd=${keyword}&new_tab=1'
  },
  fanyi: {
    icon:'<svg t="1603457616548" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21051" width="48" height="48"><path d="M955.733333 1024h-400.497777L291.271111 204.8h664.462222c37.701404 0 68.266667 30.565262 68.266667 68.266667v682.666666c0 37.701404-30.565262 68.266667-68.266667 68.266667z" fill="#D9D9D9" p-id="21052"></path><path d="M68.266667 0h400.497777l263.964445 828.302222H68.266667c-37.701404 0-68.266667-30.565262-68.266667-68.266666V68.266667C0 30.565262 30.565262 0 68.266667 0z" fill="#4F8BF5" p-id="21053"></path><path d="M555.235556 1024l177.493333-195.697778h-239.707022z" fill="#4252B8" p-id="21054"></path><path d="M756.954453 614.286222c32.768-39.207822 56.269938-82.120249 70.514916-128.73728h-203.671325l-10.922666-34.998044h93.5936V387.367822h58.481778v63.183076h194.910435v34.998044h-84.923733c-12.875093 53.812338-42.411804 107.597369-88.610134 161.355094 31.794062 33.66912 72.590222 72.480996 122.38848 116.440177-10.613191 11.377778-21.877191 22.345956-33.778346 32.904534-46.430436-43.945529-85.610951-83.244373-117.550649-117.891983-16.707129 17.03936-35.089067 34.074169-55.150365 51.108978 0 2.17088-4.983467-13.853582-14.941297-48.068835a500.258133 500.258133 0 0 0 40.79616-35.871858c-41.565298-48.3328-66.141298-85.77024-73.741654-112.303218h50.50368c6.398862 20.748516 23.765902 47.768462 52.10112 81.064391z" fill="#617D8B" p-id="21055"></path><path d="M1024 682.666667L546.133333 204.8h409.6c37.701404 0 68.266667 30.565262 68.266667 68.266667v409.6z" fill="#FFFFFF" opacity=".192" p-id="21056"></path><path d="M291.271111 445.048604V387.367822h145.439858V440.502044c-2.494009 36.445298-38.902898 130.025244-145.439858 130.025245-119.088924 0-159.002169-97.962667-159.002169-159.762205 0-61.804089 47.490844-152.293831 159.002169-152.293831 37.651342 0 71.356871 13.202773 101.112036 39.60832L347.7504 343.472356c-12.611129-13.726151-31.439076-20.589227-56.479289-20.589227-45.056 0-90.394169 33.901227-90.394169 91.272533 0 97.848889 135.877973 136.06912 171.677014 30.897494H291.271111z" fill="#FFFFFF" p-id="21057"></path></svg>',
    name:'谷歌翻译',
    shortcut:'t',
    clickUrl: 'https://translate.google.cn/#view=home&op=translate&sl=auto&tl=auto&text=${keyword}'
  },
    record: {
        icon:'<svg t="1603689943505" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1288" width="32" height="32"><path d="M424.64 623.936l-153.6-164.544a57.728 57.728 0 0 1 0-77.568 48.768 48.768 0 0 1 72.384 0L460.8 507.584l219.84-235.456a48.768 48.768 0 0 1 72.384 0 57.728 57.728 0 0 1 0 77.568l-256 274.304A49.728 49.728 0 0 1 460.8 640a49.28 49.28 0 0 1-36.16-16.064z" fill="#4D94FF" p-id="1289"></path><path d="M896 128v712.32l-48.896-32.576a127.744 127.744 0 0 0-161.472 16l-45.632 45.632-38.272-38.272a127.552 127.552 0 0 0-90.496-37.504c-32 0-64.064 11.968-88.896 35.968l-41.28 39.808-41.792-43.456a128 128 0 0 0-163.2-17.664L128 840.32V128h768m64-128H64C28.736 0 0 28.672 0 64v895.936c0 23.616 12.992 45.248 33.792 56.512a64.576 64.576 0 0 0 65.792-3.264l147.52-98.368 86.336 89.6c11.84 12.096 28.032 19.264 44.992 19.52l2.24 0.064a61.44 61.44 0 0 0 43.392-18.048L511.232 921.6l83.52 83.52a63.808 63.808 0 0 0 90.496 0l90.88-90.88 148.352 98.88A64 64 0 0 0 1024 959.872V64a64 64 0 0 0-64-64z" fill="#4D94FF" p-id="1290"></path></svg>',
        name:'创建一个标记',
        shortcut:'',
        clickScript: `(function(){API.methods.createLight();})();`
    },
    bilibili:{
      icon:'<svg t="1605879140584" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2834" width="24" height="24"><path d="M256 0h512c141.38368 0 256 114.61632 256 256v512c0 141.38368-114.61632 256-256 256H256C114.61632 1024 0 909.38368 0 768V256C0 114.61632 114.61632 0 256 0z m53.27872 595.2c-13.11744-9.9328-27.92448-16.896-43.1616-23.01952-31.09888-12.24704-63.67232-16.68096-96.88064-15.83104-7.8336 0-15.65696 0.63488-23.69536 1.05472 0-0.63488-0.63488-1.47456-0.63488-2.52928-2.11968-23.6544-4.6592-47.29856-6.3488-70.52288-1.47456-19.42528-2.10944-38.85056-2.53952-58.2656-0.63488-37.376-0.63488-74.53696-0.63488-111.90272 0-8.86784-0.63488-7.81312-7.40352-4.864-20.9408 8.448-41.6768 16.6912-62.6176 24.70912-0.63488 0.63488-1.6896 2.74432-1.26976 3.7888 6.3488 23.6544 11.008 47.93344 14.1824 72.00768 3.1744 20.89984 5.91872 41.1648 8.87808 61.6448 2.53952 17.95072 4.22912 35.8912 6.3488 54.05696 2.11968 18.36032 4.6592 36.73088 6.76864 55.31648 2.11968 17.73568 4.22912 34.83648 6.3488 52.57216 1.47456 12.66688 2.74432 25.11872 3.80928 37.7856 0.63488 9.9328 1.47456 19.84512 1.6896 29.34784 0 2.10944 0.63488 3.1744 2.75456 3.1744 4.64896 0 8.87808 0.62464 13.32224 0 21.57568-2.11968 43.15136-3.59424 64.3072-6.7584 16.2816-2.53952 32.1536-6.33856 47.81056-11.61216 22.2208-7.39328 41.24672-20.06016 59.65824-34.63168 7.82336-5.90848 14.17216-13.08672 16.91648-22.1696 5.92896-14.99136 3.3792-25.11872-7.60832-33.35168z m133.66272 16.0768c-1.10592-12.1856-2.2016-24.9856-3.74784-37.1712-1.536-16.7936-3.29728-33.5872-4.83328-50.59584-1.536-15.53408-2.2016-30.86336-3.30752-46.40768-1.536-21.41184-3.29728-42.83392-4.84352-64.256l-3.29728-47.45216c-0.44032-5.87776-2.8672-7.34208-9.23648-6.92224a834.6624 834.6624 0 0 1-22.8864 1.46432c-6.6048 0.63488-13.2096 1.47456-19.58912 2.0992 19.80416 100.37248 28.61056 200.94976 38.95296 300.68736 12.10368 1.05472 23.10144 1.67936 34.54976 2.73408 2.2016 0.4096 3.29728 0 3.29728-2.0992l-1.09568-11.55072c-0.88064-13.86496-2.42688-27.29984-3.96288-40.52992z m-64.8192 10.2912c-1.36192-12.4928-2.53952-24.7808-3.91168-37.26336-1.36192-14.15168-2.53952-28.5184-4.3008-42.67008-0.98304-8.74496-2.3552-17.07008-3.52256-25.3952-0.38912-3.13344-2.3552-4.58752-5.4784-4.16768-5.48864 0.6144-11.35616 0.6144-17.02912 1.45408-7.8336 1.04448-15.6672 2.49856-23.87968 3.54304 9.68704 53.82144 19.6096 107.60192 29.7472 161.3312 11.74528-1.66912 22.89664-3.1232 34.2528-4.57728-0.38912-4.16768-0.98304-8.32512-1.37216-12.0832-1.56672-13.73184-3.13344-27.05408-4.5056-40.17152zM498.7904 673.3824c-0.4096-20.85888-1.024-41.08288-1.44384-61.94176-0.4096-25.7024 0-51.8144 0-77.5168 0-5.69344-0.4096-10.9568-0.6144-16.65024 0-2.52928-1.46432-4.62848-4.15744-4.62848A838.16448 838.16448 0 0 0 460.02176 512c-4.1472 0-7.8848 0.63488-12.02176 1.47456 0.4096 1.47456 0.4096 2.52928 0.4096 3.584 1.45408 17.69472 3.11296 35.1744 4.56704 52.44928 1.45408 16.85504 3.10272 34.12992 4.5568 50.98496 1.65888 18.3296 3.11296 36.6592 4.77184 54.9888 0 1.04448 1.65888 2.73408 2.69312 2.73408 10.98752 0.4096 22.58944 0 34.2016 0-0.4096-2.32448-0.4096-3.7888-0.4096-4.84352zM358.4 484.7104c-1.792-20.0704-3.2256-39.07584-4.83328-58.51136-0.3584-2.52928-1.24928-3.79904-3.04128-3.79904-5.7344 0-11.64288 0-17.72544 0.41984 2.32448 21.54496 4.47488 42.25024 6.79936 63.58016 6.62528-0.63488 12.53376-0.84992 18.80064-1.6896z m153.6 10.17856v-54.7328c0-3.88096-1.6384-4.95616-5.1712-4.95616H486.4v62.9248c8.92928 0.43008 17.37728 0.64512 25.6 1.0752v-4.3008z m-179.2 1.37216v-4.1984c-0.95232-10.89536-2.29376-21.38112-3.24608-32.28672-0.57344-6.912-1.3312-13.6192-1.91488-20.75648-0.37888-1.67936 0.38912-4.1984-2.29376-3.76832-6.11328 0.62464-12.032 2.08896-18.14528 2.72384 3.44064 20.75648 6.68672 40.88832 10.12736 61.22496l15.47264-2.93888z m140.8 1.4336v-32.53248c0-8.56064-0.48128-17.55136 0-26.112 0-3.20512-1.19808-3.85024-4.3008-3.85024h-21.2992c1.91488 22.26176 3.584 43.23328 5.49888 64 6.46144-0.43008 12.92288-0.86016 20.10112-1.49504z m283.74016 97.65888c-13.1072-9.9328-27.91424-16.896-43.14112-23.02976-31.08864-12.24704-63.66208-16.6912-96.86016-15.84128-7.82336 0-15.64672 0.63488-23.68512 1.05472 0-0.63488-0.63488-1.47456-0.63488-2.53952-2.10944-23.6544-4.64896-47.3088-6.3488-70.5536-1.47456-19.43552-2.10944-38.87104-2.52928-58.29632-0.63488-37.39648-0.63488-74.57792-0.63488-111.96416 0-8.86784-0.63488-7.81312-7.40352-4.85376-20.93056 8.448-41.65632 16.6912-62.59712 24.70912-0.63488 0.41984-1.6896 2.53952-1.47456 3.584a563.07712 563.07712 0 0 1 14.16192 72.0384c3.1744 20.92032 5.92896 41.19552 8.88832 61.68576 2.53952 17.96096 4.22912 35.91168 6.3488 54.07744 2.10944 18.3808 4.64896 36.7616 6.7584 55.3472 2.11968 17.74592 4.22912 34.85696 6.3488 52.60288 1.47456 12.67712 2.74432 25.1392 3.79904 37.81632 0.63488 9.9328 1.4848 19.85536 1.69984 29.35808 0 2.10944 0.63488 3.1744 2.74432 3.1744 4.64896 0 8.87808 0.62464 13.32224 0 21.57568-2.11968 43.14112-3.59424 64.28672-6.7584a286.6176 286.6176 0 0 0 47.79008-11.6224c22.21056-7.39328 41.24672-20.0704 59.63776-34.64192 7.82336-5.91872 14.17216-13.1072 16.91648-22.19008 6.144-14.78656 3.59424-24.92416-7.39328-33.15712z m133.60128 15.9232c-1.10592-12.1856-2.2016-24.9856-3.74784-37.1712-1.536-16.7936-3.29728-33.5872-4.83328-50.59584-1.536-15.53408-2.2016-30.86336-3.30752-46.40768-1.536-21.41184-3.29728-42.83392-4.84352-64.256l-3.29728-47.45216c-0.44032-5.87776-2.8672-7.34208-9.23648-6.92224-7.71072 0.62464-15.18592 1.04448-22.8864 1.46432-6.6048 0.63488-13.2096 1.47456-19.58912 2.0992 19.80416 100.37248 28.61056 200.94976 38.95296 300.68736 12.10368 1.05472 23.10144 1.67936 34.54976 2.73408 2.2016 0.4096 3.29728 0 3.29728-2.0992l-1.09568-11.55072c-0.88064-13.86496-2.42688-27.29984-3.96288-40.52992z m-64.8192 10.2912c-1.36192-12.4928-2.53952-24.7808-3.91168-37.26336-1.36192-14.15168-2.53952-28.5184-4.3008-42.67008-0.98304-8.74496-2.3552-17.07008-3.52256-25.3952-0.38912-3.13344-2.3552-4.58752-5.4784-4.16768-5.48864 0.6144-11.35616 0.6144-17.02912 1.45408-7.8336 1.04448-15.6672 2.49856-23.87968 3.54304 9.68704 53.82144 19.6096 107.60192 29.7472 161.3312a2574.848 2574.848 0 0 1 34.2528-4.57728c-0.38912-4.16768-0.98304-8.32512-1.37216-12.0832-1.56672-13.73184-3.13344-27.05408-4.5056-40.17152zM959.5904 673.3824c-0.4096-20.85888-1.024-41.08288-1.44384-61.94176-0.4096-25.7024 0-51.8144 0-77.5168 0-5.69344-0.4096-10.9568-0.6144-16.65024 0-2.52928-1.46432-4.62848-4.15744-4.62848A838.18496 838.18496 0 0 0 920.82176 512c-4.1472 0-7.8848 0.63488-12.02176 1.47456 0.4096 1.47456 0.4096 2.52928 0.4096 3.584 1.45408 17.69472 3.11296 35.1744 4.56704 52.44928 1.45408 16.85504 3.10272 34.12992 4.5568 50.98496 1.65888 18.3296 3.11296 36.6592 4.77184 54.9888 0 1.04448 1.65888 2.73408 2.69312 2.73408 10.98752 0.4096 22.58944 0 34.2016 0-0.4096-2.32448-0.4096-3.7888-0.4096-4.84352zM806.4 484.7104c-1.792-20.0704-3.2256-39.07584-4.83328-58.51136-0.3584-2.52928-1.24928-3.79904-3.04128-3.79904-5.7344 0-11.64288 0-17.72544 0.41984 2.32448 21.54496 4.47488 42.25024 6.79936 63.58016 6.62528-0.63488 12.53376-0.84992 18.80064-1.6896z m153.6 10.17856v-54.7328c0-3.88096-1.6384-4.95616-5.1712-4.95616H934.4v62.9248c8.92928 0.43008 17.37728 0.64512 25.6 1.0752v-4.3008z m-179.2 1.37216v-4.1984c-0.95232-10.89536-2.29376-21.38112-3.24608-32.28672-0.57344-6.912-1.3312-13.6192-1.91488-20.75648-0.37888-1.67936 0.38912-4.1984-2.29376-3.76832-6.11328 0.62464-12.032 2.08896-18.14528 2.72384 3.44064 20.75648 6.68672 40.88832 10.12736 61.22496l15.47264-2.93888z m153.6 1.4336v-32.53248c0-8.56064-0.48128-17.55136 0-26.112 0-3.20512-1.19808-3.85024-4.3008-3.85024h-21.2992c1.91488 22.26176 3.584 43.23328 5.49888 64 6.46144-0.43008 12.92288-0.86016 20.10112-1.49504z" fill="#F08198" p-id="2835"></path><path d="M193.49504 668.16c-3.06176-21.79072-6.11328-42.98752-9.17504-64 11.81696 2.52928 61.55264 21.4016 64 24.32-18.13504 13.02528-36.07552 26.25536-54.82496 39.68zM633.81504 668.16A12622.848 12622.848 0 0 0 624.64 604.16c11.81696 2.52928 61.55264 21.4016 64 24.32-18.14528 13.02528-36.07552 26.25536-54.82496 39.68z" fill="#F08198" p-id="2836"></path></svg>',
      name:'哔哩哔哩搜索',
      clickUrl: 'https://search.bilibili.com/all?keyword=${keyword}&from_source=nav_search_new'
    },
    toutiao:{
      icon:'<svg t="1605879200393" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3797" width="24" height="24"><path d="M206.507 42.287h609.849c91.022 0 164.598 73.577 164.598 164.599v609.849c0 91.022-73.576 164.598-164.598 164.598h-609.85c-91.022 0-164.598-73.576-164.598-164.598V206.696c0-90.832 73.766-164.409 164.599-164.409z m0 0" fill="#FFFFFF" p-id="3798"></path><path d="M816.356 984.936h-609.85c-93.107 0-168.2-75.662-168.2-168.201V206.696c0-93.108 75.093-168.201 168.2-168.201h609.85c93.108 0 168.201 75.093 168.201 168.201v609.85c0.19 92.728-75.093 168.39-168.201 168.39zM206.506 45.89c-88.936 0-160.805 72.06-160.805 160.806v609.85c0 88.935 72.059 161.374 161.375 161.374h609.848c88.937 0 160.806-72.06 161.375-161.375V206.696c0-88.936-72.059-160.806-161.375-161.375l-610.417 0.57z m0 0" fill="#DBDCDC" p-id="3799"></path><path d="M38.305 241.967v574.578c0 4.74 0 10.05 0.57 14.791l945.872-53.665V206.696c0-4.74 0-10.05-0.57-14.79L38.306 241.966z m0 0" fill="#F85959" p-id="3800"></path><path d="M884.243 527.929L742.4 535.893v-22.566l-68.456 3.603v22.756L531.91 547.46v44.752l142.033-7.964v98.797l68.456-3.603v-98.797l141.843-7.965z" fill="#FFFFFF" p-id="3801"></path><path d="M624.071 367.123l186.596-10.43v10.999l-104.107 51.01-80.972-29.961-27.307 41.529 47.787 17.825-81.92 40.58-32.237 1.518v44.752l48.925-2.655 125.724-62.198 128.19 47.407 49.493-2.655v-44.752l-32.616 2.275-84.575-31.099 112.45-55.182v-78.317l-68.266 3.603-157.772 8.912-54.614-25.79-69.973 110.555 57.837 21.049zM532.48 692.148l68.456-3.792 45.701-88.368-68.456 3.793z m314.975-104.107l-68.267 3.603 49.873 83.058 68.266-3.603z m-477.488 3.035l54.234 106.192 75.663-3.603-54.045-106.192z m-70.921-164.599l-55.182-69.404-75.094 4.361 55.183 69.784z m0 87.42l-55.182-69.974-75.094 4.172 55.183 69.404z" fill="#FFFFFF" p-id="3802"></path><path d="M490.382 526.98l-84.006 4.741V334.507l-68.456 3.792v197.025l-199.68 11.568v44.752l138.809-7.964-61.63 80.972-75.093 4.74v44.753l126.673-7.395 97.28-127.81 126.103-7.207z" fill="#FFFFFF" p-id="3803"></path></svg>',
      name:'头条搜索',
      clickUrl:'https://www.toutiao.com/search/?keyword=${keyword}'
    },
    mailto:{
      icon:'<svg t="1603711839289" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3195" width="32" height="32"><path d="M960.9 405.7l-448 323.4-448-323.4 448-323.4z" fill="#5B79FB" p-id="3196"></path><path d="M187.3 139.1h651.2v795.4H187.3z" fill="#E5ECFF" p-id="3197"></path><path d="M335 222h355.7v73.9H335z" fill="#FF7E71" p-id="3198"></path><path d="M258.3 358h509.3v37H258.3zM258.3 420.7h509.3v37H258.3zM258.3 483.4h509.3v37H258.3zM258.3 546.1h509.3v37H258.3z" fill="#FFFFFF" p-id="3199"></path><path d="M64.9 934.5h896V405.7l-448 323.4-448-323.4z" fill="#5B79FB" p-id="3200"></path><path d="M64.9 934.5h896L594.6 670.1H431.2z" fill="#83A4FF" p-id="3201"></path></svg>',
      name:'发送信息到邮箱',
      clickScript: `(function () {
          var targetInfo = API.data.targetInfo || {};
          var subject = encodeURIComponent("[PAGENOTE摘录]"+targetInfo.text);
          var body = encodeURIComponent(targetInfo.pre+targetInfo.text+targetInfo.suffix+"----------来自"+API.data.href);
          var mailTo = "mailto:xxx@gmail.com?cc=logikecn@gmail.com&bcc=&subject="+subject+"&body="+body;
          var a = document.createElement('a');
          a.href=mailTo;
          a.click();
      })()`
    },
    dbClickDemo:{
      name:'双击demo',
      icon:'<svg t="1605927220907" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2748" width="24" height="24"><path d="M478 176c91.127 0 165 74.283 165 165.915 0 7.78-6.271 14.085-14.007 14.085s-14.007-6.306-14.007-14.085c0-76.075-61.33-137.746-136.986-137.746-75.655 0-136.986 61.671-136.986 137.746 0 7.78-6.271 14.085-14.007 14.085S313 349.694 313 341.915C313 250.283 386.873 176 478 176z m-0.5-68C606.459 108 711 212.743 711 341.95c0 7.76-6.278 14.05-14.022 14.05-7.744 0-14.022-6.29-14.022-14.05 0-113.688-91.986-205.852-205.456-205.852-113.47 0-205.456 92.164-205.456 205.853 0 7.759-6.278 14.049-14.022 14.049-7.744 0-14.022-6.29-14.022-14.05C244 212.744 348.541 108 477.5 108z" fill="#7E41DF" p-id="2749"></path><path d="M396 719a192.5 193 0 1 0 385 0 192.5 193 0 1 0-385 0Z" fill="#F4EDFF" p-id="2750"></path><path d="M538.15 274.873c32.414 4.83 43.706 25.732 44.975 60.844l0.125 5.568 0.04 16.577 0.063 2.81 4.331 111.183c7.77-1.773 16.494-2.35 26.126-1.403 31.449 3.092 46.18 22.777 49.466 57.72 43.119-2.522 64.156 23.264 67.226 70.888l0.986 15.881c1.97 33.294 2.512 54.806 2.512 95.4 0 54.755-13.176 103.505-35.151 145.61-7.719 14.789-16.009 27.715-24.335 38.717-5.093 6.73-9.154 11.406-11.655 13.967-5.509 5.642-14.644 5.84-20.403 0.445-5.4-5.059-5.915-13.239-1.42-18.89l3.288-3.67c2.09-2.407 4.446-5.305 7.004-8.686 7.41-9.79 14.855-21.4 21.823-34.75 19.987-38.296 31.988-82.699 31.988-132.742l-0.07-22c-0.234-31.989-1.104-52.336-3.37-87.5l-0.371-4.77c-2.76-29.959-12.577-41.474-37.326-39.638l-0.002 84.22c0 7.923-6.202 14.346-13.853 14.346-7.2 0-13.118-5.69-13.79-12.965l-0.063-1.381v-95.888c0-32.337-6.398-43.911-25.103-45.75-9.072-0.892-16.477 0.11-22.36 2.28L592.99 608c0.305 7.835-5.914 14.43-13.89 14.73-7.509 0.282-13.898-5.113-14.878-12.28l-0.12-1.364-9.64-247.441c-0.068-2.205-0.097-4.12-0.104-6.975l-0.008-12.47-0.05-3.219c-0.532-24.582-5.165-33.752-20.485-36.035-22.175-3.303-34.184 9.314-35.666 33.52l-0.126 3.121c-0.423 15.502 0.29 64.418 1.828 135.125l1.844 79.167 1.595 62.552a13.93 13.93 0 0 1-0.878 5.272l0.553 7.845c0.556 7.864-5.466 14.681-13.45 15.228-7.513 0.515-14.087-4.709-15.297-11.88l-0.163-1.367-18.105-256.59c-0.62-23.228-7.322-34.033-25.69-34.385-18.674-0.358-27.688 12.748-28.254 36.105l-0.029 2.37 7.887 331.362c0.188 7.88-6.146 14.417-14.147 14.606-7.53 0.17-13.852-5.346-14.726-12.565l-0.1-1.372-3.088-129.857c-4.393-0.396-9.35-0.677-13.45-0.677-14.294 0-24.932 11.663-28.027 34.914l-0.75 6.205-0.324 2.876a665.2 665.2 0 0 0-1.745 18.38 767.928 767.928 0 0 0-2.457 49.986c-0.792 49.434 5.95 72.38 28.487 105.55 2.982 4.39 6.409 8.994 10.247 13.785 7.535 9.407 16.53 19.38 26.67 29.71 11.643 11.858 24.156 23.549 36.673 34.54l5.1 4.436 10.441 8.812c0.424 0.348 0.769 0.629 1.031 0.84 6.057 4.894 7.075 13.865 2.274 20.038-4.802 6.173-13.605 7.21-19.662 2.317l-3.777-3.114-5.857-4.944a757.665 757.665 0 0 1-7.82-6.776c-13.005-11.418-26.012-23.57-38.189-35.974-10.764-10.963-20.38-21.626-28.566-31.845-4.285-5.348-8.154-10.546-11.577-15.585-25.89-38.103-34.349-66.898-33.462-122.256a796.792 796.792 0 0 1 2.55-51.886l0.712-8.185c0.243-2.618 0.49-5.125 0.737-7.513l1.178-10.303C312.243 576.671 333.705 552 364.352 552c3.976 0 8.416 0.188 12.768 0.519L373 379.362c0-39.107 18.592-68.1 57.822-67.348 17.689 0.34 30.48 6.017 39.17 15.663 4.877-35.399 29.608-58.547 68.158-52.804z" fill="#1C0E50" p-id="2751"></path></svg>',
      dbClickScript:`(function(){API.methods.notification('hi,双击我了');})();`
    },
    hoverDemo:{
      name:'鼠标经过demo',
      icon:'<svg t="1605927293996" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5053" width="24" height="24"><path d="M988.339028 711.163786L515.769231 466.303c-17.023777-9.215879-27.967633-2.30397-24.44768 14.975803l100.478682 473.593784c3.455955 17.279773 16.127788 19.519744 27.519638 5.37593a1527.147956 1527.147956 0 0 1 118.718442-129.342303l101.37467 131.198278a34.239551 34.239551 0 0 0 43.647427 7.295905l33.663558-20.671729a27.327641 27.327641 0 0 0 13.375824-17.663768 24.639677 24.639677 0 0 0-5.119932-20.735728l-100.862677-130.878282c53.119303-17.919765 107.518589-32.959567 162.877863-44.863411 19.199748-4.223945 20.991724-14.975803 3.967948-23.807688l-2.623966 0.383995z" fill="#666666" p-id="5054"></path><path d="M490.873557 1023.99168H205.053309A203.261332 203.261332 0 0 1 0 822.650323V201.346477A203.645327 203.645327 0 0 1 205.053309 0.00512h613.879943A203.645327 203.645327 0 0 1 1023.98656 201.346477v361.787252a42.68744 42.68744 0 0 1-85.438878 0V201.346477a118.270448 118.270448 0 0 0-119.67843-115.902478h-613.751944a118.270448 118.270448 0 0 0-119.678429 115.838479v621.431844a118.270448 118.270448 0 0 0 119.678429 115.838479H490.873557a42.68744 42.68744 0 1 1 0 85.438879z" fill="#666666" p-id="5055"></path></svg>',
      mouseoverScript:`(function(){API.methods.notification('hi,你经过我了');})();`
    }
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} 必填',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const getFieldsSchema = function (){
  return {
    name:'',shortcut:'',clickScript:'',clickUrl:'',icon:'',dbClickScript:'',mouseoverScript:''
  }
}

export default function FunctionIconSetting({groupIndex,itemIndex,onSave,initFunItem,deleteIcon }) {
  const { t } = useTranslation();
  const funItem = {...getFieldsSchema(),...initFunItem}
  const [form] = Form.useForm();
  const save = function (values) {
    const fun = {
      name: values.name,
      shortcut: values.shortcut,
      clickScript: values.clickScript,
      clickUrl: values.clickUrl,
      icon: values.icon,
      dbClickScript: values.dbClickScript,
      mouseoverScript: values.mouseoverScript,
    };

    if(!values.clickScript && !values.clickUrl && !values.mouseoverScript && !values.dbClickScript){
      message.error(t('a script or a link is required'));
      return;
    }
    onSave(fun,groupIndex,itemIndex)
  };

  const setTheme = function (type) {
     const values = defaultFuns[type];
     const settingValue = {...getFieldsSchema(),...values}
     if(!values){
       return;
     }
     form.setFieldsValue(settingValue)
  };

  const show = groupIndex>-1 && itemIndex>-1;
  return(
    <div className='function-setting-form'>
      {
        show &&
        <div>
          <Form {...layout} form={form} initialValues={funItem} name="basic-setting" onFinish={save} validateMessages={validateMessages}>
            <Form.Item label={t("use default Plan")}>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder={t('select a pre-defined action button')}
                optionFilterProp="children"
                onChange={setTheme}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {
                  Object.keys(defaultFuns).map((key)=>(
                    <Option key={key} value={key}>{defaultFuns[key].name}</Option>
                  ))
                }

              </Select>
            </Form.Item>

            <Form.Item name={'name'} label={t('button name or description')} rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={'icon'} label={<a target='_blank' href="https://www.iconfont.cn/">{t('icon')}</a>}
                       rules={[{ required: true, message:t("svg file is supported") }]}>
              <Input />
            </Form.Item>
            <Form.Item name={'shortcut'} label={t('shortcut')} rules={[{ pattern:/^[a-z0-9A-Z]{0,1}$/, message:t('only one key is supported') }]}>
              <Input placeholder={t('optional')} />
            </Form.Item>
            <Form.Item name={'clickUrl'} label={t('jump link')} rules={[]}>
              <Input placeholder={t('${keyword} in your link means the selected text')} />
            </Form.Item>
            <CheckVersionPart version='0.12.4'>
              <Form.Item name={'clickScript'} label={<a target='_blank' href="/page?id=study_setting">{t('click script')}{t('For more info')}</a>} rules={[]}>
                <Input.TextArea placeholder={t('script_tip')} />
              </Form.Item>
            </CheckVersionPart>
            {/*<CheckVersionPart version='0.12.4'>*/}
            {/*  <Form.Item name={'dbClickScript'} label="双击执行函数">*/}
            {/*    <Input placeholder='双击执行函数' />*/}
            {/*  </Form.Item>*/}
            {/*</CheckVersionPart>*/}
            {/*<CheckVersionPart version='0.12.4'>*/}
            {/*  <Form.Item name={'mouseoverScript'} label="鼠标经过函数">*/}
            {/*    <Input placeholder='鼠标经过执行函数' />*/}
            {/*  </Form.Item>*/}
            {/*</CheckVersionPart>*/}

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <div>
                <Button type="primary" htmlType="submit">
                  {t('submit')}
                </Button>
                <Button onClick={deleteIcon}>
                  {t('delete')}
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      }
    </div>
  )
}
