import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {randomNum} from "../lib/randomNum";

const px = (n) => n / 1600 * (window as any).pageWidth

const Chart8 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        setInterval(()=>{
            myChart.setOption({
                grid: {
                    top: '12%',
                    left: '2%',
                    right: '2%',
                    bottom: '2%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: ['第一周', '第二周', '第三周', '第四周'],
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: true,
                            interval: 0,
                            color: '#d4d6e2'
                        }
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '(%)        ',
                        nameRotate: 180,
                        nameTextStyle: {
                            color:'#d4d6e2',
                            verticalAlign: 'top'
                        },
                        nameLocation: 'end',
                        nameGap: -3,
                        max: 6,
                        splitLine: {
                            show: false
                        },
                        splitArea: {
                            show: false
                        },
                        axisLine: {
                            show: true
                        },
                        axisLabel: {
                            color: '#d4d6e2'
                        },
                        interval: 2
                    }
                ],
                series: [
                    {
                        type: 'line',
                        stack: 'Total',
                        label: {
                            show: true,
                            color:'white',
                            position: 'top'
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgba(247, 168, 73,0.3)',
                                lineStyle: {
                                    color: '#feb887'
                                }
                            }
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [randomNum(1,5),randomNum(1,5), randomNum(1,5), randomNum(1,5)]
                    }
                ]
            })
        },1000)
    }, [])
    return (
        <>
            <h2>本月新增车辆情况</h2>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart8}