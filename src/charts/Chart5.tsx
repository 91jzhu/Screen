import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {randomNum} from "../lib/randomNum";
import {random} from "../lib/random";
import {ChartOption} from "../components/ChartOption";
let flash, myChart,value
const Chart5 = () => {
    const divRef = useRef(null)
    const setOption = () => {
        value=randomNum(20, 95)
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
                    startAngle: 90,
                    endAngle: -270,
                    radius:'95%',
                    clockwise:false,
                    data:[
                        {
                            value,
                            name:random(value),
                            title: {
                                color:'white',
                                offsetCenter: ['0%', '-30%']
                            },
                            detail: {
                                valueAnimation: true,
                                offsetCenter: ['0%', '30%']
                            }
                        },
                    ],
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
                            width: 4
                        }
                    },
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                    },
                    detail: {
                        width: 40,
                        height: 14,
                        fontSize: 16,
                        color: '#d4d6e2',
                        borderColor: 'auto',
                        borderRadius: 20,
                        borderWidth: 1,
                        formatter: '{value}%'
                    }
                }
            ]
        })
    }
    useEffect(() => {
        myChart = echarts.init(divRef.current)
        flash = ChartOption(setOption)
        flash.Leave()
    }, [])
    return (
        <>
            <h2>及时取件情况</h2>
            <div className='chart' ref={divRef} onMouseEnter={()=>flash.Enter()} onMouseLeave={()=>flash.Leave()}/>
        </>
    )
}
export {Chart5}