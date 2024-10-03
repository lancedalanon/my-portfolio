"use client"
import type { NextPage } from 'next';
import Navbar from '@/components/Navbar'; 
import Button from '@/components/Button'; 
import Image from 'next/image'

const Home: NextPage = () => {
  return (<>
      <Navbar />
      <main>
        <article>
          <section id="home" className="h-screen bg-custom-800 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-bold text-custom-100">
              Hi, I'm Lance Dalanon!
            </h1> 
            <p className="text-xl text-custom-300 mt-4 max-w-2xl">
              A dedicated and passionate full-stack software engineer committed 
              to delivering innovative technical solutions tailored to meet your business needs.
            </p>
            <Button className="mt-6" onClick={() => alert("Button clicked!")}>
              Learn More
            </Button>
          </section>
          <section id="about" className="h-screen bg-custom-800 flex flex-col items-center justify-center text-center px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h2 className="text-5xl font-bold text-custom-100 mb-4">
                  About Me
                </h2>
                <p className="text-xl text-custom-300 mb-4">
                  I am a dedicated Full Stack Software Engineer with experience in developing and 
                  enhancing web applications using technologies such as JavaScript, Python, Laravel, 
                  Vue.js, React.js, Next.js, and the TALL stack (Tailwind CSS, Alpine.js, Livewire). 
                  I prioritize code quality and security by implementing best practices, including rigorous 
                  code reviews and adhering to OWASP standards. My collaborative approach in Agile environments 
                  fosters effective communication with cross-functional teams to achieve project goals. 
                  With a solid foundation in both front-end and back-end development, I am eager to tackle 
                  complex challenges and drive innovative solutions. I am ready to contribute my skills and 
                  enthusiasm to a dynamic team focused on delivering exceptional user experiences.
                </p>
                <p className="text-xl text-custom-300">
                  Beyond my technical skills, I am genuinely passionate about using technology to solve real-world problems. 
                  I thrive on learning new tools and methodologies that enhance my capabilities, and I believe in the 
                  importance of continuous improvement. Whether it's mentoring junior developers or exploring new frameworks, 
                  I am committed to growing not just as a developer but also as a collaborator and leader in the tech community. 
                  I am excited to be part of projects that not only challenge me but also have a meaningful impact on users’ lives.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image src={`/images/lance_dalanon.JPG`} alt={`Lance Dalanon`} width="480" height="480" className="rounded-xl shadow-lg"/>
              </div>
            </div>
          </section>
        </article>
      </main>
  </>);
};

export default Home;
