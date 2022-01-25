import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

const px = (n) => n / 1600 * (window as any).pageWidth


const gaugeData = [
    {
        value: 25.5,
        detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '0%']
        }
    },
];

const Chart4 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
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
                        distance: 0,
                        length: 10
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        distance: 50
                    },
                    data: gaugeData,
                    detail: {
                        width: 25,
                        height: 14,
                        fontSize: 12,
                        color: 'auto',
                        borderColor: 'auto',
                        borderRadius: 20,
                        borderWidth: 1,
                        formatter: '{value}%'
                    }
                }
            ]
        })
    }, [])
    return (
        <>
            <h2>承运商罚款情况</h2>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart4}