'use client';
import React from "react";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import AboutMe from '@/components/AboutMe';
import SocialNetwork from '../components/SocialNetwork';
import Projects from "@/components/Projetcs";


export default function Home() {
  return (
    <>

      <Navbar />
      <div className="
      pt-28 flex min-h-screen
      flex-col bg-[#ededee]
      ">
        {/* bg-gradient-to-r from-[#1B1B1B] to-[#000000] */}
        <div className="container mx-auto py-4 max-w-[90%] bg-[#FFFFFF]">
          <Welcome />
          {/* falta colocar um avatar melhor e mais parecido comigo */}
          {/* adicionar o currículo para download */}
        </div>
        <div>
          <SocialNetwork />
        </div>
        <br />
        <br />
        <br />
        <div className="container mx-auto py-4 w-[70%] bg-[#000000]">
          {/* falta uma foto melhor minha */}
          <AboutMe />
        </div>
        <br />
        <div>
          <Projects />
        </div>
      </div>
    </>
  )
};
