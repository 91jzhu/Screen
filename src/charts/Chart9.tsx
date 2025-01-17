import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {ChartOption} from "../components/ChartOption";

function makeOption(type,symbol=undefined) {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            containLabel: true,
            x:4,
            x2:20,
            y:2,
            y2:2
        },
        yAxis: {
            data: ['货主', '承运商', '司机'],
            inverse: true,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                margin: 10,
                fontSize: 14,
                color: '#d4d6e2',
            },
            axisPointer: {
                label: {
                    show: true,
                    margin: 10
                }
            }
        },
        xAxis: {
            splitLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            axisLine: { show: false }
        },
        animationDurationUpdate: 500,
        series: [
            {
                type: type,
                label: labelSetting,
                symbolRepeat: true,
                symbolSize: ['80%', '60%'],
                barCategoryGap: '40%',
                universalTransition: {
                    enabled: true,
                    delay: function (idx, total) {
                        return (idx / total) * 1000;
                    }
                },
                itemStyle: {
                    barBorderRadius: [0, 24, 24, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 1, 0, [{
                            offset: 0,
                            color: '#78ccfe'
                        },
                            {
                                offset: 1,
                                color: '#fffefe'
                            }]
                    )
                },
                data: ['78','81.5','88']
            },
        ]
    };
}
const labelSetting = {
    show: true,
    position: 'right',
    offset: [10, 0],
    fontSize: 16
};
const options = [
    makeOption('pictorialBar'),
    makeOption('bar'),
    makeOption('pictorialBar', 'diamond')
];
let flash, myChart
let optionIndex = 0;
const Chart9 = () => {
    const divRef = useRef(null)
    const setOption = () => {
        optionIndex = (optionIndex + 1) % options.length;
        myChart.setOption(options[optionIndex])
    }
    useEffect(() => {
        myChart = echarts.init(divRef.current)
        flash = ChartOption(setOption)
        flash.Leave()
    }, [])
    return (
        <>
            <h2>注册用户活跃度情况</h2>
            <div className='chart' ref={divRef} onMouseEnter={()=>flash.Enter()} onMouseLeave={()=>flash.Leave()}/>
        </>
    )
}
export {Chart9}