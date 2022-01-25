import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
// @ts-ignore
import china from '../assets/china-full.json'


console.log(china);
const px = (n) => n / 1600 * (window as any).pageWidth

const Chart2 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        echarts.registerMap('CN', china)
        myChart.setOption({
            series: [{
                type: 'map',
                mapType: 'CN', // 自定义扩展图表类型
                data: [
                    {name: '甘肃省', value: 1},
                ],
                label: {show: false, color: 'white'},
                itemStyle: {
                    areaColor: '#010D3D',
                    borderColor: '#01A7F7',
                    emphasis: {
                        label: {color: 'white'},
                        areaColor: '#5470C6',
                    },
                }
            }]
        })
    }, [])
    return (
        <>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart2}