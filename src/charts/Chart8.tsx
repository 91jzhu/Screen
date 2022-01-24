import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

const px = (n) => n / 1600 * (window as any).pageWidth


const Chart8 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        myChart.setOption({
            grid: {
                top: '10%',
                left: '3%',
                right: '7%',
                bottom: '2%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['','第一周', '第二周', '第三周', '第四周'],
                    axisTick:{
                        show:false
                    },
                    splitLine:{
                        show:false,
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    name:'(%)        ',
                    nameRotate:180,
                    nameTextStyle:{
                        verticalAlign:'top'
                    },
                    nameLocation:'end',
                    nameGap:-3,
                    max:6,
                    splitLine:{
                        show:false
                    },
                    splitArea:{
                        show:false
                    },
                    axisLine:{
                        show:true
                    },
                    axisLabel:{

                    },
                    interval:2
                }
            ],
            series: [
                {
                    type: 'line',
                    stack: 'Total',
                    label: {
                        show: true,
                        position: 'top'
                    },
                    itemStyle:{
                        normal:{
                            color:'rgba(247, 168, 73,0.3)',
                            lineStyle:{
                                color:'#787cf1'
                            }
                        }
                    },
                    areaStyle: {},
                    emphasis: {
                        focus: 'series'
                    },
                    data: [0,2.0, 3.5, 5.0, 3.7]
                }
            ]
        })
    }, [])
    return (
        <>
            <h2>本 月 新 增 车 辆 情 况</h2>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart8}