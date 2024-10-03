"use client"
import type { NextPage } from 'next';
import Navbar from '@/components/Navbar'; 
import Button from '@/components/Button'; 

const Home: NextPage = () => {
  return (<>
      <Navbar />
      <main className="h-screen bg-custom-800 flex flex-col items-center justify-center">
        <article>
          <section id="home">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-custom-100">
                Hi, I'm Lance Dalanon!
              </h1> 
              <p className="text-xl text-custom-300 mt-4 max-w-2xl">
                A dedicated and passionate full-stack software engineer committed to delivering innovative technical solutions tailored to meet your business needs.
              </p>
              <Button className="mt-6" onClick={() => alert("Button clicked!")}>
                Get Started
              </Button>
            </div>
          </section>
        </article>
      </main>
  </>);
};

export default Home;
