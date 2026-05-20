import { useEffect, useRef } from "react";
import gsap from "gsap";

function TextReveal({ children }) {
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={textRef}>
        {children}
      </div>
    </div>
  );
}

export default TextReveal;