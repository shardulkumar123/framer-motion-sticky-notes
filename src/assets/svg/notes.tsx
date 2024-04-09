import * as React from "react";
import { motion } from "framer-motion";
const NoteSvg = (props: any) => {
  const svgVariants = {
    hidden: {
      opacity: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: [1, 1.1, 1.1, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  return (
    <div>
      <motion.svg
        variants={svgVariants}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        initial="hidden"
        animate="visible"
        xmlns="http://www.w3.org/2000/svg"
        width={45}
        height={45}
        viewBox="0 0 512 512"
        {...props}
      >
        <path d="M383.5 6.6c-1.1.3-46.1 10.9-100 23.5l-98 22.8-59 .3c-57.9.3-59.1.3-63.6 2.4-9.9 4.6-17.9 14.8-20 25.5l-1.1 5.5-6.1 1.3c-12.3 2.5-21.2 9.2-26.4 19.9-5.2 10.6-5 11.9 15 96.7l17.6 75 .3 34.5c.5 42.1 0 40.2 13.4 54l9.2 9.5 12.1 52c6.7 28.6 13.1 54.2 14.4 56.9 4.6 10.3 16.1 18.3 27.5 19.3 6.2.6 20.4-2.5 101.2-21.9l38.5-9.2 90-.6 90-.5 5-2.5c2.8-1.3 7.3-4.8 10.2-7.7 6.7-6.8 9.1-13.2 9.9-26.3.7-9.8.8-10.1 3.3-10.6 8.4-1.9 17.8-4.7 21.2-6.5 5.5-2.8 11.3-9 14.6-15.7 5.3-10.8 5.3-10.6-18-109.7l-20.7-88V148c0-32.2-.4-61.3-.9-64.8-1.8-11.8-7.9-20.7-18.1-26.1-3.7-2-8.2-3.5-11.5-3.8l-5.4-.6-2.7-11.6c-4.2-18.4-9.2-25.9-20.8-31.6-5.6-2.7-16.1-4.2-21.1-2.9zm56.8 61.7c3.3 1.9 5.6 4.4 7.7 8l3 5.2-.3 183.2-.2 183.1-3 4.3c-1.9 2.7-5 5.4-8.4 7.1l-5.3 2.8H173v-56.7c0-51.3-.2-56.8-1.7-58.5-1.5-1.7-4.7-1.8-58.9-1.8H55l-.5-2.3c-.3-1.2-.4-60.5-.3-131.7l.3-129.5 2.2-4c2.7-5.1 5.7-7.9 11.3-10.4 4.5-2.1 5-2.1 186-1.8l181.5.2 4.8 2.8zM161 406.5c0 27.2-.1 49.5-.3 49.5-.1 0-22.5-22.3-49.7-49.5L61.5 357H161v49.5z" />
        <path d="M243.6 111.4c-9.6 3.6-16.5 12.7-17.3 22.9-1 11.7 3.7 20.6 13.8 26.2 4.7 2.6 6.4 3 12.9 3 8.7-.1 13.3-2 19.1-8.2 5.9-6.1 7.4-9.8 7.4-18.3 0-8-1.7-12.5-6.8-18.6-5.8-6.9-20.1-10.3-29.1-7z" />
      </motion.svg>
    </div>
  );
};
export default NoteSvg;
