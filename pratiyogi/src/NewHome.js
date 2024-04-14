
import React from 'react';
import HeadLine from './components/pages/homePage/headLine';
import Batches from './components/pages/homePage/batches';
import Exams from './components/pages/homePage/exams';
import Results from './components/pages/homePage/results';
import TopTeachers from './components/pages/homePage/topTeachers';
import Institutes from './components/pages/homePage/institutes';
import TopStudents from './components/pages/homePage/topStudents';
import VideoAdd from './components/pages/homePage/videoAdd';
import Whatwe from './components/pages/homePage/whatweprovide';
// import './css/home.css' 
function NewHome() {
  return (
    <main className='main'>
      <HeadLine />
      <Batches/>
      <Exams/>
      <Results/>
      <TopTeachers/>
      <Institutes/>
      <TopStudents/>
      <VideoAdd/>
      <Whatwe/>
    </main>
  );
}

export default NewHome;
