import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const products = t("products.list", { returnObjects: true }) as {
    title: string;
    description: string;
    bgColor: string;
  }[];

  return (
    <div id="products">
      <AnimatedDiv className="lg:mt-12 h-auto bg-[#0c0a25] text-white">
        <div className="flex justify-center py-8 md:pt-12 bg-[#1e6985] lg:bg-[#0c0a25]">
          <h1 className="text-3xl md:text-5xl font-bold font-maven-pro">
            {t("products.titlePart1")}
            <span className="lg:text-[#117ea6] text-[#0c0a25]">
              {t("products.titlePart2")}
            </span>
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
    </div>
  );
}
