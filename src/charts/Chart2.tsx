import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
// @ts-ignore
import china from '../assets/china.json'

console.log(china);
const px = (n) => n / 1600 * (window as any).pageWidth

const Chart2 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        echarts.registerMap('CN', china)
        myChart.setOption({
            series: [{
                map: 'CN',
                type:'map'
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