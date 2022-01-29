import React, {useEffect, useRef, useState} from "react";
import * as echarts from "echarts";
// @ts-ignore
import china from '../assets/china.json'

const Chart2 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        echarts.registerMap('CN', china)
        myChart.setOption({
            geo: {
                map: "CN",//上面引入的数据名
                mapType: 'map',
                show: true,
                roam: false,//关闭拖拽
                // regions: [{
                //     name: '广东省',
                //     itemStyle: {
                //         areaColor: 'purple',
                //         color: 'red',
                //         shadowColor: 'rgba(0, 0, 0, 0.5)',
                //         shadowBlur: 10
                //     },
                // }],
                itemStyle: {
                    areaColor: "#99CBF9", //地图区域的颜色(没有数据时会按照这个颜色显示)
                    borderColor: "#fff",  //地图区域的边框
                    borderWidth: 0.6,
                },
                layoutCenter: ['64%', '50%'],
                layoutSize: 320,
                emphasis: {  //高亮的显示设置
                    show: false,
                    focus: 'self',
                    label: {
                        show: false,
                        position: 'bottom',
                        distance: 12,
                        rotate: 90,
                        color: "black",
                        fontSize: 16,
                        backgroundColor: '#fff',
                        padding: [3, 10, 10, 3],
                        lineHeight: 26,
                        borderRadius: 12,
                        formatter: ({name}) => name,
                    },
                    itemStyle: {
                        areaColor: '#0a35a8'
                        // areaColor: "#9DE3FF",
                    },
                },
                // select: { //选中显示设置
                //     label: {
                //         show:false,
                //         color: "green",
                //     },
                //     itemStyle: {
                //         areaColor: "#9DE3FF",
                //     },
                // },
            },

            series: [
                // {
                //     name: 'Access From',
                //     type: 'pie',
                //     radius: ['45%', '60%'],
                //     labelLine: {
                //         length: 30
                //     },
                //     label: {
                //         formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                //         backgroundColor: '#F6F8FC',
                //         borderColor: '#8C8D8E',
                //         borderWidth: 1,
                //         borderRadius: 4,
                //         rich: {
                //             a: {
                //                 color: '#6E7079',
                //                 lineHeight: 22,
                //                 align: 'center'
                //             },
                //             hr: {
                //                 borderColor: '#8C8D8E',
                //                 width: '100%',
                //                 borderWidth: 1,
                //                 height: 0
                //             },
                //             b: {
                //                 color: '#4C5058',
                //                 fontSize: 14,
                //                 fontWeight: 'bold',
                //                 lineHeight: 33
                //             },
                //             per: {
                //                 color: '#fff',
                //                 backgroundColor: '#4C5058',
                //                 padding: [3, 4],
                //                 borderRadius: 4
                //             }
                //         }
                //     },
                //     data: [
                //         { value: 1048, name: 'Baidu' },
                //         { value: 335, name: 'Direct' },
                //         { value: 310, name: 'Email' },
                //         { value: 251, name: 'Google' },
                //         { value: 234, name: 'Union Ads' },
                //         { value: 147, name: 'Bing' },
                //         { value: 135, name: 'Video Ads' },
                //         { value: 102, name: 'Others' }
                //     ]
                // },
                {
                    name:'china',
                    type: "effectScatter", //类型：散点
                    effectType:'ripple',
                    showEffectOn:'render',
                    rippleEffect:{
                        color:'#fc626d',
                        scale:10,
                        brushType: "stroke", // 空心
                    },
                    label: {
                        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}:}{c}  {per|%}  ',
                        show:false,
                        // offset:[30,40],
                        // formatter:'{b}',
                        backgroundColor: '#F6F8FC',
                        borderColor: '#8C8D8E',
                        borderWidth: 1,
                        position:"left",
                        borderRadius: 4,
                        rich: {
                            a: {
                                color: '#6E7079',
                                lineHeight: 22,
                                align: 'center'
                            },
                            hr: {
                                borderColor: '#8C8D8E',
                                width: '100%',
                                borderWidth: 1,
                                height: 0
                            },
                            b: {
                                color: '#4C5058',
                                fontSize: 14,
                                fontWeight: 'bold',
                                lineHeight: 33
                            },
                            per: {
                                color: '#fff',
                                backgroundColor: '#4C5058',
                                padding: [3, 4],
                                borderRadius: 4
                            }
                        }
                    },
                    coordinateSystem: "geo", //使用地理坐标系
                    itemStyle: {
                        color: {
                            type: "radial", // 径向渐变，前三个参数分别是圆心 x, y 和半径
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [
                                {
                                    offset: 0.5,
                                    color: "#fc626d", // 50% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "rgb(0 0 0 / 0%)", // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        },
                        borderColor: "#fff", //边框白色
                        borderWidth: 1,      //边框宽度
                    },
                    symbolSize:10,    //散点大小
                    data: [
                        {name: "青海省", value: [96.5035076, 35.703459]},
                        {name: "北京市", value: [116.5035076, 39.703459]},
                        {name: "湖南省", value: [108.5035076, 23.703459]},
                        {name: "安徽省", value: [117.5035076, 30.703459]},
                    ],
                    zlevel: 1,
                }
            ]
        })
    }, [])
    return (
        <>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart2}