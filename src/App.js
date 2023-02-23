import React, { Suspense, useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import Model from "./Model"
import Overlay from "./Overlay"
import ModalInfo from "./ModalInfo"

export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)

  const [showComponent, setShowComponent] = useState(false);

  console.log(showComponent)

  return (
    <>
      <Canvas shadows eventSource={document.getElementById("root")} eventPrefix="client">
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} setShowComponent={setShowComponent} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      
      {showComponent == "Headphones" ?
        <ModalInfo /> :
        <Overlay ref={overlay} caption={caption} scroll={scroll} />
      }
    </>
  )
}
