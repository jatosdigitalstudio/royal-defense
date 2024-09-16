import { motion, useScroll, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
};

export default function ScrollToTopButton() {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.5) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
        <motion.button
            className="fixed bottom-0 right-0 p-10"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}>
            <div className="bg-[#3F3BF2] rounded-full p-4">
                <FaArrowUp color="white" />
            </div>
        </motion.button>
    );
}