import React, {useEffect, useRef} from "react";
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
                    show:false,
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
                {
                    type: "map",
                },
                {
                    type: "scatter", //类型：散点
                    coordinateSystem: "geo", //使用地理坐标系
                    label:{
                        show:true,
                        position:'top',
                        formatter:'{b}',
                    },
                    itemStyle: {
                        color: {
                            type: "radial", // 径向渐变，前三个参数分别是圆心 x, y 和半径
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [
                                {
                                    offset: 0.5,
                                    color: "#fff", // 50% 处的颜色
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
                        { name: "青海省", value: [96.5035076, 35.703459] },
                        { name: "北京市", value: [116.5035076, 39.703459] },
                        { name: "湖南省", value: [108.5035076, 23.703459] },
                        { name: "安徽省", value: [117.5035076, 30.703459] },
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