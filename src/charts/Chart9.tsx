import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

const px = (n) => n / 1600 * (window as any).pageWidth

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
            x:2,
            x2:18,
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

const Chart9 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        let optionIndex = 0;
        let option = options[optionIndex];
        setInterval(function () {
            optionIndex = (optionIndex + 1) % options.length;
            myChart.setOption(options[optionIndex]);
        }, 1000);
    }, [])
    return (
        <>
            <h2>注册用户活跃度情况</h2>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart9}