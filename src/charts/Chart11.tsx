import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

const px = (n) => n / 1600 * (window as any).pageWidth

const Chart11 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        myChart.setOption({
            tooltip: {
                show: true,
            },
            color: ['#2584f4', '#0ee7ea', '#fa967d'],
            series: [
                {
                    type: 'pie',
                    startAngle: -25,

                    radius: [35, 65],
                    center: ['50%', '50%'],
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: '#0f0a44'
                    },
                    data: [
                        {value: 85.5, name: '司机'},
                        {value: 5.9, name: '承运商'},
                        {value: 8.6, name: '货主'}
                    ]
                },
            ]
        })
    }, [])
    return (
        <>
            <h2>注册用户人数占比情况</h2>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart11}