import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {randomNum} from "../lib/randomNum";

const px = (n) => n / 1600 * (window as any).pageWidth

const Chart7 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        setInterval(() => {
            myChart.setOption({
                xAxis: {
                    max: '3300',
                    show: false,
                },
                yAxis: {
                    type: 'category',
                    data: ['17.5m', '9.6m', '4.2m', '17.5(150)m', '9.6(75)m', '14.5m', '6.8m', '7.6m', '13.5m'],
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#d4d6e2'
                    }
                },
                grid: {
                    top: '3%',
                    left: '1%',
                    right: '1%',
                    bottom: '0',
                    containLabel: true
                },
                series: [
                    {
                        type: 'bar',
                        data: [randomNum(100, 2800), randomNum(100, 2800), randomNum(100, 2800), randomNum(100, 2800), randomNum(100, 2800), randomNum(100, 2800), randomNum(100, 2800), randomNum(100, 2800), randomNum(100, 2800)],
                        label: {
                            show: true,
                            color: 'white',
                            position: 'right',
                            fontSize: 10,
                            valueAnimation: true
                        },
                        barWidth: 12,
                        itemStyle: {
                            barBorderRadius: [0, 24, 24, 0],
                            color: new echarts.graphic.LinearGradient(
                                0, 1, 1, 0, [{
                                    offset: 0,
                                    color: '#fcca77'
                                },
                                    {
                                        offset: 1,
                                        color: '#fd5d71'
                                    }]
                            )
                        }
                    }
                ],
                legend: {
                    show: true
                },
            })
        }, 1000)
    }, [])
    return (
        <>
            <h2>各车型占比排行榜</h2>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart7}