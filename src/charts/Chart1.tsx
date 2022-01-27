import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

const px = (n) => n / 1600 * (window as any).pageWidth
const Chart1 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        console.log(divRef.current);
        let myChart = echarts.init(divRef.current);
        myChart.setOption({
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '2%',
                left: 'center',
                textStyle:{
                    color: '#d4d6e2'
                }
            },
            grid: {
                top:0,
                left: 0,
                right: 0,
                bottom: 0,
                containLabel: true
            },
            textStyle: {
                fontSize: 14
            },
            color:['#2584f4','#0ee7ea','#fa967d'],
            series: [
                {
                    type: 'pie',
                    center: ['50%', '60%'],
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [
                        {value: 493080, name: '运单总量'},
                        {value: 164360, name: '订单总量'},
                        {value: 19653, name: '车辆总数'},
                    ]
                }
            ]
        })
    }, [])
    return (
        <>
            <h2>数据总览</h2>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart1}