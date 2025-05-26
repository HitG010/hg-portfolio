import Section from '../components/Section';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Projects from '../components/Projects';


const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <Section />
      <TechStack />
      <Experience />
      <Projects/>
      
    </div>
  );
};

export default Home;
