import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const subtleAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
}

function AnimatedDiv({ children, className }: AnimatedDivProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -25% 0px", once: false });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={subtleAnimation}
    >
      {children}
    </motion.div>
  );
}

export default function OurProducts() {
  return (
    <AnimatedDiv className="lg:mt-12 h-auto bg-[#0c0a25] text-white">
      <div className="flex justify-center py-8 md:pt-12 bg-[#1e6985] lg:bg-[#0c0a25]">
        <h1 className="text-3xl md:text-5xl font-bold font-maven-pro">
          Our<span className="lg:text-[#117ea6] text-[#0c0a25]">Products</span>
        </h1>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap w-full lg:h-[80vh] mt-4 lg:mt-12 lg:px-4 gap-4 font-semibold font-maven-pro">
        {products.map((product, index) => (
          <div
            key={index}
            className={`w-full lg:w-1/4 p-8 flex flex-col justify-center items-center md:transition-transform md:hover:scale-105 md:hover:z-10 md:relative ${product.bgColor}`}
          >
            <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
            <p className="text-center md:text-2xl">{product.description}</p>
          </div>
        ))}
      </div>
    </AnimatedDiv>
  );
}

const products = [
  {
    title: "Reactive Monitoring",
    description: "Track and analyze digital content from diverse sources",
    bgColor: "bg-[#0c0a25]",
  },
  {
    title: "Active Monitoring",
    description: "Monitor key profiles on Twitter and TikTok in real-time with instant alerts",
    bgColor: "bg-[#1e6985] ",
  },
  {
    title: "Clipping AI On & Off",
    description: "Capture and process data from online and offline media sources worldwide",
    bgColor: "bg-[#0c0a25]",
  },
  {
    title: "AllInsights & Strategies",
    description: "Leverage massive data sets to generate actionable insights and communication strategies",
    bgColor: "bg-[#1e6985] ",
  },
];
