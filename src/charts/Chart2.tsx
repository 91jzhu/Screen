import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
// @ts-ignore
import china from '../assets/china.json'

const Chart2 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        let myChart = echarts.init(divRef.current);
        echarts.registerMap('CN', china)
        myChart.setOption({
            visualMap: {
                type: "piecewise",//分段标签
                min: 0,//最小值
                max: 50,//最大值，不设置为无限大
                right: 30,//距离右侧位置
                bottom: 30,//距离底部位置
                orient: "vertical",//组件竖直放置
                align: "left",//色块在左
                textGap: 14,//文字主体之间的距离
                itemSymbol: "circle",//右下角映射组件使用圆点形状
                show: true,
                seriesIndex: 0,//指定取哪个系列的数据(series.data)，若不设置则会影响图上标点颜色设置。

                //一以下是分段式视觉映射组件的每一段的范围
                //gt：大于、gte：大于等于、lt：小于、lte：小于等于。
            },
            geo: {
                map: "CN",//上面引入的数据名
                show: true,
                roam: false,//关闭拖拽
                label: {  //地图显示的地点名
                    show: false,
                    color: "#fff",
                    fontSize: 16,
                },
                itemStyle: {
                    areaColor: "#99CBF9", //地图区域的颜色(没有数据时会按照这个颜色显示)
                    borderColor: "#fff",  //地图区域的边框
                    borderWidth: 0.6,
                },
                emphasis: {  //高亮的显示设置
                    label: {
                        color: "#fff",
                    },
                    itemStyle: {
                        areaColor: "#9DE3FF",
                    },
                },
                select: { //选中显示设置
                    label: {
                        color: "#fff",
                    },
                    itemStyle: {
                        areaColor: "#9DE3FF",
                    },
                },
            },
            series: [
                //配置数据的显示
                {
                    type: "map",  //类型map
                    geoIndex: 0, //指定geo属性后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。
                    data: [{name: "杭州市", value: 6},
                        {name: "湖州市", value: 0},
                        {name: "嘉兴市", value: 0},],
                },

            ]
        })
    }, [])
    return (
        <>
            <div className='chart' ref={divRef}/>
        </>
    )
}
export {Chart2}