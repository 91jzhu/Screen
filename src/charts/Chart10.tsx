import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

const px = (n) => n / 1600 * (window as any).pageWidth


const Chart10 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                left: '16%',
                itemWidth: 8,
                itemHeight: 4,
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
                        color: 'grey'
                    },
                    nameLocation: 'end',
                    nameGap: 24,
                    axisLabel: {
                        color: 'black',
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
                        color: 'grey'
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
                        8020,8200,8136,8234,8182,8156,8153
                    ]
                },
                {
                    name: '运输中车辆',
                    type: 'bar',
                    data: [
                        7933,8092,8049,8200,8099,8101,8123
                    ]
                },
                {
                    name: '使用率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [95, 93, 96, 93, 94, 95, 93]
                }
            ]
        })
    }, [])
    return (
        <>
            <h2>上 周 车 辆 使 用 情 况</h2>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart10}