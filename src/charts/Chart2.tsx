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
                itemStyle: {
                    normal: {
                        areaColor: '#0833a6',
                        borderWidth: 1, //设置外层边框
                        borderColor: '#0f70f8',
                    },
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
                    },
                },
            },

            series: [
                {
                    name: 'China',
                    type: "effectScatter", //类型：散点
                    effectType: 'ripple',
                    showEffectOn: 'render',
                    rippleEffect: {
                        color: 'cyan',
                        scale: 10,
                        brushType: "stroke", // 空心
                    },
                    emphasis: {
                        label: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{per|[} {c} {per|]} {unit|经纬}  ',
                            show: true,
                            backgroundColor: '#F6F8FC',
                            borderColor: '#8C8D8E',
                            borderWidth: 1,
                            position: "left",
                            borderRadius: 4,
                            rich: {
                                a: {
                                    fontSize: 18,
                                    color: '#6E7079',
                                    lineHeight: 32,
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
                                    lineHeight: 28,
                                },
                                per: {
                                    borderRadius: 4
                                },
                                unit: {
                                    color: '#fff',
                                    backgroundColor: '#4C5058',
                                    padding: [3, 4],
                                    borderRadius: 6
                                }
                            }
                        },
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
                    symbolSize: 10,    //散点大小
                    data: [
                        {name: "上海市", value: [121.5035076, 31.703459]},
                        {name: "北京市", value: [116.5035076, 39.703459]},
                        {name: "浙江省", value: [119.5035076, 27.703459]},
                        {name: "湖北省", value: [112.5035076, 31.703459]},
                        {name: "湖南省", value: [111.5035076, 27.703459]},
                        {name: "四川省", value: [103.5035076, 30.703459]},
                    ],
                    zlevel: 1,
                }
            ]
        })
    }, [])
    return (
        <>
            <div className='text'>
                <h3>上周最热门 7 条线路</h3>
                <ol className='list'>
                    <li><span>始发地</span><span>目的地</span><span>成交单数</span></li>
                    <li><span>昌平</span><span>北京</span><span>1980</span></li>
                    <li><span>上海</span><span>宝山</span><span>1679</span></li>
                    <li><span>石桥</span><span>杭州</span><span>1065</span></li>
                    <li><span>北京杨镇</span><span>北京顺义</span><span>982</span></li>
                    <li><span>武汉</span><span>武昌</span><span>760</span></li>
                    <li><span>长沙</span><span>成都</span><span>753</span></li>
                    <li><span>深圳</span><span>虎门</span><span>750</span></li>
                </ol>
            </div>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart2}