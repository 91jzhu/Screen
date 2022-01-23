import React, {useEffect, useRef} from 'react';
import './home.scss';
import {Header} from "../components/Header";
import * as echarts from 'echarts'

export const Home = () => {
    const divRef = useRef(null)
    useEffect(() => {
        console.log(divRef.current);
        let myChart = echarts.init(divRef.current);
        myChart.setOption({
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center',
                },
                textStyle:{
                    fontSize:16
                },
                series: [
                    {
                        type: 'pie',
                        center:['50%','60%'],
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
        <div className='wrapper'>
            <Header/>
            <main>
                <section className='section1'>
                    <h2>数据总览</h2>
                    <div className='chart' ref={divRef}>

                    </div>
                </section>
                <section className='section2'></section>
                <section className='section3'></section>
                <section className='section4'></section>
                <section className='section5'></section>
                <section className='section6'></section>
                <section className='section7'></section>
                <section className='section8'></section>
                <section className='section9'></section>
                <section className='section10'></section>
                <section className='section11'></section>
            </main>
        </div>
    );
}
