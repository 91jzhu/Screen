import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {randomNum} from "../lib/randomNum";

const px = (n) => n / 1600 * (window as any).pageWidth


const Chart10 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        setInterval(()=>{
            myChart.setOption({
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    left: '16%',
                    itemWidth: 8,
                    itemHeight: 4,
                    textStyle: {
                        color: '#d4d6e2'
                    },
                    data: ['车辆总数', '运输中车辆', '使用率'],
                },
                grid: {
                    x: 4,
                    x2: 6,
                    y: 28,
                    y2: 0,
                    containLabel: true
                },
                xAxis: [
                    {
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                        axisPointer: {
                            type: 'shadow'
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            color: '#d4d6e2',
                            interval: 0,
                        }
                    }
                ],
                yAxis: [
                    {
                        min: 7850,
                        max: 8300,
                        interval: 150,
                        name: '(千辆)        ',
                        nameTextStyle: {
                            verticalAlign: 'top',
                            color: '#d4d6e2'
                        },
                        nameLocation: 'end',
                        nameGap: 24,
                        axisLabel: {
                            color: '#d4d6e2',
                            formatter: (value) => {
                                return value * 1.0 / 1000
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(84, 112, 198,0.35)'
                            }
                        },
                        splitLine: {
                            show: false
                        }
                    },
                    {
                        min: 90,
                        max: 100,
                        interval: 2,
                        name: '          (%)',
                        nameTextStyle: {
                            verticalAlign: 'top',
                            color: '#d4d6e2',
                        },
                        axisLabel: {
                            color: '#d4d6e2'
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(84, 112, 198,0.35)'
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        nameGap: 24,
                        nameLocation: 'end',
                    }
                ],
                series: [
                    {
                        name: '车辆总数',
                        type: 'bar',
                        data: [
                            randomNum(7850,8200),
                            randomNum(7850,8200),
                            randomNum(7850,8200),
                            randomNum(7850,8200),
                            randomNum(7850,8200),
                            randomNum(7850,8200),
                            randomNum(7850,8200)
                        ]
                    },
                    {
                        name: '运输中车辆',
                        type: 'bar',
                        data: [
                            randomNum(7900,8290),
                            randomNum(7900,8290),
                            randomNum(7900,8290),
                            randomNum(7900,8290),
                            randomNum(7900,8290),
                            randomNum(7900,8290),
                            randomNum(7900,8290)
                        ]
                    },
                    {
                        name: '使用率',
                        type: 'line',
                        lineStyle:{
                            color:'#20f6f7'
                        },
                        itemStyle:{
                            color:'#0dc1fb',
                            borderColor:'white',
                            borderType:'dotted'
                        },
                        yAxisIndex: 1,
                        data: [
                            randomNum(92,99),
                            randomNum(92,99),
                            randomNum(92,99),
                            randomNum(92,99),
                            randomNum(92,99),
                            randomNum(92,99),
                            randomNum(92,99),
                        ]
                    }
                ]
            })
        },1000)
    }, [])
    return (
        <>
            <h2>上周车辆使用情况</h2>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart10}