import React, {useEffect, useRef} from 'react';
import './home.scss';
import {Header} from "../components/Header";
import * as echarts from 'echarts'
import {Chart1} from "../charts/Chart1";
import {Chart6} from "../charts/Chart6";
import {Chart7} from "../charts/Chart7";
import {Chart8} from "../charts/Chart8";

export const Home = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <main>
                <section className='section1'>
                    <Chart1/>
                </section>
                <section className='section2'></section>
                <section className='section3'></section>
                <section className='section4'></section>
                <section className='section5'></section>
                <section className='section6'>
                    <Chart6/>
                </section>
                <section className='section7'>
                    <Chart7/>
                </section>
                <section className='section8'>
                    <Chart8/>
                </section>
                <section className='section9'></section>
                <section className='section10'></section>
                <section className='section11'></section>
            </main>
        </div>
    );
}
