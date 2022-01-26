import React from 'react';
import './home.scss';
import {Header} from "../components/Header";
import {Chart1} from "../charts/Chart1";
import {Chart6} from "../charts/Chart6";
import {Chart7} from "../charts/Chart7";
import {Chart8} from "../charts/Chart8";
import {Chart10} from "../charts/Chart10";
import {Chart3} from "../charts/Chart3";
import {Chart4} from "../charts/Chart4";
import {Chart5} from "../charts/Chart5";
import {Chart11} from "../charts/Chart11";
import {Chart9} from "../charts/Chart9";
import {Chart2} from "../charts/Chart2";

export const Home = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <main>
                <section className='section1'><Chart1/></section>
                <section className='section2'><Chart2/></section>
                <section className='section3'><Chart3/></section>
                <section className='section4'><Chart4/></section>
                <section className='section5'><Chart5/></section>
                <section className='section6'><Chart6/></section>
                <section className='section7'><Chart7/></section>
                <section className='section8'><Chart8/></section>
                <section className='section9'><Chart9/></section>
                <section className='section10'><Chart10/></section>
                <section className='section11'><Chart11/></section>
            </main>
        </div>
    );
}
