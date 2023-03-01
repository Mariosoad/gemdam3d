import React, { Suspense, useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import Model from "./Model"
import Overlay from "./Overlay"

import ModalGemdam from "./DataModal/ModalGemdam"
import ModalInfo from "./DataModal/ModalInfo"

import Slider from "./DataModal/Slider"

export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)

  const [showComponent, setShowComponent] = useState(false);

  return (
    <>

      <Slider />

      {/* <Canvas shadows eventSource={document.getElementById("root")} eventPrefix="client">
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} setShowComponent={setShowComponent} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>

      {showComponent == "VR_Headset" &&
        <ModalGemdam setShowComponent={setShowComponent} />
      }

      {showComponent == "Headphones" &&
        <ModalInfo setShowComponent={setShowComponent} />
      }

      {showComponent == false &&
        <Overlay ref={overlay} caption={caption} scroll={scroll} />
      } */}
    </>
  )
}
