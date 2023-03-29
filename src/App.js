import React, { Suspense, useState, useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Html } from "@react-three/drei"
import Model from "./Model"
import Overlay from "./Overlay"

import ModalGemdam from "./DataModal/ModalGemdam"
import ModalNosotros from "./DataModal/ModalNosotros"
import ModalWeb from "./DataModal/ModalWeb"
import ModalAr from "./DataModal/ModalAr"
import ModalVR from "./DataModal/ModalVr"

import ModalInfo from "./DataModal/ModalInfo"
import Slider from "./DataModal/Slider"

// import 'rsuite/dist/rsuite.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)

  const [showComponent, setShowComponent] = useState(false);
  const [open, setOpen] = useState(false);

  console.log(open)

  return (
    <>
      {showComponent == "Headphones" &&
        <ModalNosotros setShowComponent={setShowComponent} setOpen={setOpen} />
      }

      {showComponent == "Roundcube001" &&
        <ModalAr setShowComponent={setShowComponent}  setOpen={setOpen} />
      }

      {showComponent == "Table" &&
        <ModalVR setShowComponent={setShowComponent} setOpen={setOpen} />
      }

      {showComponent == "Notebook" &&
        <ModalWeb setShowComponent={setShowComponent}  setOpen={setOpen} />
      }

      <Canvas shadows eventSource={document.getElementById("root")} eventPrefix="client">
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} setShowComponent={setShowComponent} setOpen={setOpen} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>

      {showComponent == false &&
        <Overlay ref={overlay} caption={caption} scroll={scroll} />
      }

    </>
  )
}
