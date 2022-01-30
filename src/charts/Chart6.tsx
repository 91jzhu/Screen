import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {randomNum} from "../lib/randomNum";
import {ChartOption} from "../components/ChartOption";

let flash, myChart
const Chart6 = () => {
    const divRef = useRef(null)

    const setOption = () => {
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: '5%',
                left: '2%',
                right: '2%',
                bottom: '2%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['第一周', '第二周', '第三周', '第四周'],
                    axisTick: {
                        show: false,
                        alignWithLabel: true
                    },
                    axisLabel: {
                        color: '#d4d6e2'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: true
                    },
                    axisLabel: {
                        color: '#d4d6e2'
                    }
                }
            ],
            series: [
                {
                    type: 'bar',
                    barWidth: '60%',
                    data: [randomNum(3000, 25000), randomNum(3000, 25000), randomNum(3000, 25000), randomNum(3000, 25000)],
                    itemStyle: {
                        barBorderRadius: [4, 4, 0, 0],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: '#3f5cfd'
                            },
                                {
                                    offset: 1,
                                    color: '#19adfd'
                                }]
                        )
                    }
                },
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
            <h2>本月货主下单情况</h2>
            <div className='chart' ref={divRef} onMouseEnter={()=>flash.Enter()} onMouseLeave={()=>flash.Leave()}/>
        </>
    )
}
export {Chart6}