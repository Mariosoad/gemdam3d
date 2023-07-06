import React, { Suspense, useState, useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { ToastContainer } from 'react-toastify';
import Model from "./Model"
import Overlay from "./Overlay"
import { motion, useMotionValue, useSpring } from "framer-motion";

//import ModalGemdam from "./DataModal/ModalGemdam"
import ModalNosotros from "./DataModal/ModalNosotros"
import ModalWeb from "./DataModal/ModalWeb"
import ModalAr from "./DataModal/ModalAr"
import ModalVR from "./DataModal/ModalVr"

//import ModalInfo from "./DataModal/ModalInfo"
//import Slider from "./DataModal/Slider"

// import 'rsuite/dist/rsuite.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)

  const [showComponent, setShowComponent] = useState(false);
  const [open, setOpen] = useState(false);

  //console.log(open)

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 55, stiffness: 1300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {showComponent == "Headphones" &&
        <ModalNosotros setShowComponent={setShowComponent} setOpen={setOpen} />
      }

      {showComponent == "Roundcube001" &&
        <ModalAr setShowComponent={setShowComponent} setOpen={setOpen} />
      }

      {showComponent == "Table" &&
        <ModalVR setShowComponent={setShowComponent} setOpen={setOpen} />
      }

      {showComponent == "Notebook" &&
        <ModalWeb setShowComponent={setShowComponent} setOpen={setOpen} />
      }

      <Canvas shadows eventSource={document.getElementById("root")} eventPrefix="client">
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} setShowComponent={setShowComponent} setOpen={setOpen} />
          <Environment files="./empty_warehouse_01_1k.hdr" />
        </Suspense>
      </Canvas>

      {showComponent == false &&
        <Overlay ref={overlay} caption={caption} scroll={scroll} />
      }
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Same as */}
      <ToastContainer />
  
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    </>
  )
}
