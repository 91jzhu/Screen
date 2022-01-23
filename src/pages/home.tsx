import React from 'react';
import './home.scss';
import {Header} from "../components/Header";

export const Home = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <main>
            <section className='section1'>
                <div className='div1'></div>
                <div className='div2'></div>
            </section>
            <section className='section2'>
                <div className='div1'></div>
                <div className='div2'></div>
            </section>
            <section className='section3'>
                <div className='div1'></div>
                <div className='div2'></div>
            </section>
        </main>
    </div>
  );
}
