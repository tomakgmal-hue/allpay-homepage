'use client';
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section className="container-pro pt-24 pb-28 text-center">
      <motion.h1
        initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}
        className="text-5xl md:text-6xl font-extrabold leading-tight">
        결제로 세상을 연결하다
      </motion.h1>
      <motion.p
        initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7, delay:0.05}}
        className="mt-4 text-lg md:text-xl text-white/90">
        Global Payment & Virtual Account Solutions
      </motion.p>
      <motion.div
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.15, duration:0.5}}
        className="mt-8 flex items-center justify-center gap-4">
        <a href="#services" className="btn-primary">서비스 살펴보기</a>
        <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/15">
          문의하기
        </a>
      </motion.div>
    </section>
  );
}
