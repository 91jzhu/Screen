import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {randomNum} from "../lib/randomNum";

const px = (n) => n / 1600 * (window as any).pageWidth

const random = (value) => {
    let result = value
    if (result > 80) return 'Perfect'
    if (result > 60) return 'Not Bad'
    return 'Oops'
}

const Chart3 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        setInterval(() => {
            let value = randomNum(20, 95)
            myChart.setOption({
                grid: {
                    x: 0,
                    x2: 0,
                    y: 0,
                    y2: 0,
                    containLabel: true
                },
                series: [
                    {
                        type: 'gauge',
                        clockwise:false,
                        data: [{
                            value,
                            name: random(value),
                            title: {
                                offsetCenter: ['0%', '-24%']
                            },
                            detail: {
                                valueAnimation: true,
                                offsetCenter: ['0%', '32%']
                            }
                        }],
                        startAngle: 90,
                        endAngle: -270,
                        radius: '85%',
                        pointer: {
                            show: false
                        },
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
                        },
                        progress: {
                            show: true,
                            overlap: false,
                            roundCap: true,
                            clip: false,
                            itemStyle: {
                                borderWidth: 1,
                                borderColor: '#464646'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                width: 8
                            }
                        },
                        axisLabel: {
                            show: false
                        },
                        splitLine: {
                            show: false,
                            distance: 0,
                            length: 10
                        },
                        axisTick: {
                            show: false
                        },
                        title: {
                            color: '#d4d6e2',
                            fontSize: 24
                        },
                        detail: {
                            width: 54,
                            height: 24,
                            fontSize: 18,
                            color: '#d4d6e2',
                            borderColor: 'auto',
                            borderRadius: 20,
                            borderWidth: 1,
                            formatter: '{value}%'
                        }
                    }
                ]
            })
        }, 1000)
    }, [])
    return (
        <>
            <h2>运单按时送达情况</h2>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart3}