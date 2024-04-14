import Nav from '../common/nav';
import React, {useState} from 'react';
import HeadLine from '../homePage/headLine';
import Exams from '../homePage/exams';
import Results from '../homePage/results';
import TopTeachers from '../homePage/topTeachers';
import Institutes from '../homePage/institutes';
import TopStudents from '../homePage/topStudents';
import VideoAdd from '../homePage/videoAdd';
import Whatwe from '../homePage/whatweprovide';
import Footer from '../common/footer';
import Header from '../common/head';
import '../../css/home.css'
import '../../css/nav.css' 
import Batches from '../homePage/batches';

function HomePage() {
  return (
    <main>
      <Nav/>
      <Header/>
      <HeadLine />
      <Batches/>
      <Exams/>
      <Results/>
      <TopTeachers/>
      <Institutes/>
      <TopStudents/>
      <VideoAdd/>
      <Whatwe/>
      <Footer/>
    </main>
  );
}

export default HomePage;
