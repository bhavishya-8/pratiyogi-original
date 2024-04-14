// import '../../css/about.css'
import Bhavishya from '../../assets/img/Bhavishya.jpg'
import Prashant from '../../assets/img/Prashant.jpg'
function AboutBody() {
  return (<>
    <div className='about-heading'>
      Our Vision
    </div>
    <div className="about-details">
      Welcome to Pratiyogi, where we are dedicated to revolutionizing
      the way students prepare for government examinations. Our vision is to
      create a dynamic online platform that serves as a comprehensive hub for
      students, providing them with the tools, resources, and support they need
      to excel in their academic journey. At Pratiyogi, we understand
      the challenges and pressures students face when preparing for government
      exams. That's why we've built a community-driven platform that fosters
      connectivity, collaboration, and empowerment. Through our platform,
      students can seamlessly connect with experienced mentors, access a wealth
      of study materials, and stay updated on upcoming batches and offers from
      various institutes. Our mission is to empower students to take control of
      their learning journey, build confidence, and achieve their academic
      goals. Whether you're just starting your preparation or aiming for the top
      ranks, Pratiyogi is here to support you every step of the way.
      Join us and embark on a journey towards success together.
    </div>

    <div class="center-white">
    <div class="column">
            <img src={Prashant} alt="Image 2"/>
            <p className='person-name'>Prashant</p>
            <p>CEO & Co-Founder</p>
        </div>
        <div class="column">
            <img src={Bhavishya} alt="Image 1"/>
            <p className='person-name'>Bhavishya</p>
            <p>CTO & Co-Founder</p>
        </div>
    </div>
    </>
  );
}

export default AboutBody;
