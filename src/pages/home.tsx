import React from 'react';
import './home.scss';
import {Header} from "../components/Header";

export const Home = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <main>
            <section className='section1'></section>
            <section className='section2'></section>
            <section className='section3'></section>
        </main>
    </div>
  );
}
