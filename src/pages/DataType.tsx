import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TypingEffect from "react-typing-effect";
import { IoRocketOutline } from "react-icons/io5";
import { FaRegLightbulb, FaRegThumbsUp } from "react-icons/fa6";
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
      animate={inView ? "visible" : "hidden"}
      variants={subtleAnimation}
    >
      {children}
    </motion.div>
  );
}

export default function DataType() {
  const { t } = useTranslation();

  const typingTexts = t("model.typing", { returnObjects: true }) as string[];

  return (
    <div
      id="model"
      className="h-auto flex background-blue justify-center items-center text-white pt-24 pb-16 lg:py-0 md:h-auto lg:h-screen">
      <AnimatedDiv className="w-full h-[70vh] md:h-[80vh] flex flex-wrap justify-center background-data">
        <div className="w-full text-center text-4xl lg:text-7xl helvetica font-bold mb-12 md:mb-24 lg:mb-32">
          <span className="maven-pro">{t("model.titleStatic")}</span>
          <span className="text-4xl lg:text-7xl text-light-blue ml-2">
            <TypingEffect
              text={typingTexts}
              speed={100}
              eraseDelay={2900}
              typingDelay={500}
              eraseSpeed={100}
            />
          </span>
        </div>
        <div className="w-3/4 md:block text-start lg:ml-24 text-xl md:text-5xl helvetica font-semibold">
          <div className="maven-pro font-semibold text-start">
            {t("model.subtitle")}
          </div>
          <p className="text-start font-light text-3xl mt-8">
            {t("model.description")}
            <br />
            <div className="flex flex-col text-light-blue text-2xl text-left underline gap-2 mt-4">
              <div className="flex items-center gap-1">
                <IoRocketOutline />
                <span>{t("model.speed.fast")}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaRegThumbsUp />
                <span>{t("model.speed.smart")}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaRegLightbulb />
                <span>{t("model.speed.easy")}</span>
              </div>
            </div>
          </p>
        </div>
      </AnimatedDiv>
    </div>
  );
}
