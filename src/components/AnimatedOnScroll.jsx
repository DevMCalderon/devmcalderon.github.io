import { motion } from "framer-motion";
import { useInView } from "../hooks/useInViewAnimation";
import { animations } from "../utils/animations";

export default function AnimatedOnScroll({
  children,
  variant = "fadeUp",
  threshold = 0.3,
  className = "",
  delay = 0,
}) {
  const [ref, isInView] = useInView(threshold);
  const selectedVariant = animations[variant] || animations.fadeUp;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...selectedVariant.visible.transition,
            delay,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
