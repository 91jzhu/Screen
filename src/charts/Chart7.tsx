import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

const px = (n) => n / 1600 * (window as any).pageWidth


const Chart7 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        myChart.setOption({
            xAxis: {
                max: '3300',
                show: false
            },
            yAxis: {
                type: 'category',
                data: ['17.5m', '9.6m', '4.2m', '17.5(150)m', '9.6(75)m', '14.5m', '6.8m', '7.6m', '13.5m'],
                inverse: true,
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
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
                    data: [2680, 2382, 1301, 942, 624, 407, 312, 201, 137],
                    label: {
                        show: true,
                        position: 'right',
                        valueAnimation: true
                    },
                    barWidth:12,
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
    }, [])
    return (
        <>
            <h2>各 车 型 占 比 排 行 榜</h2>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart7}