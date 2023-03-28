import * as THREE from "three"
import { Text, Html } from "@react-three/drei";

import React, { useEffect, useRef, useState } from "react"
import { useGLTF, useFBX, useAnimations, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const color = new THREE.Color()

export default function Model({ scroll, ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/model.glb")
  const { actions } = useAnimations(animations, group)

  const modelito = props.setShowComponent;
  console.log(modelito)

  const [hovered, set] = useState()
  const extras = { receiveShadow: true, castShadow: true, "material-envMapIntensity": 0.2 }
  useEffect(() => void (actions["CameraAction.005"].play().paused = true), [])
  useEffect(() => {
    // if (hovered) group.current.getObjectByName(hovered).material.color.set("white")
    document.body.style.cursor = hovered ? "pointer" : "auto"

  }, [hovered])
  useFrame((state) => {
    actions["CameraAction.005"].time = THREE.MathUtils.lerp(actions["CameraAction.005"].time, actions["CameraAction.005"].getClip().duration * scroll.current, 0.05)
    group.current.children[0].children.forEach((child, index) => {
      //child.material.color.lerp(color.set(hovered === child.name ? "#1F9186" : "#202020"), hovered ? 0.1 : 0.15)
      child.material.color.lerp(color.set(hovered === child.name ? "#1F9186" : "#202020"), hovered ? 0.1 : 0.15)
      const et = state.clock.elapsedTime
      child.position.y = Math.sin((et + index * 2000) / 2) * 1
      child.rotation.x = Math.sin((et + index * 2000) / 3) / 20
      child.rotation.y = Math.cos((et + index * 2000) / 2) / 20
      child.rotation.z = Math.sin((et + index * 2000) / 3) / 20
    })
  })

  const handleClick = (e) => {
    modelito(e.object.name);
    console.log(modelito)

    e.stopPropagation();
  };

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group
          onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
          onPointerOut={(e) => (e.stopPropagation(), set(null))}
          position={[0.06, 4.04, 0.35]}
          scale={[0.25, 0.25, 0.25]}
        >
          <mesh onClick={(e) => handleClick(e)} name="Headphones" geometry={nodes.Headphones.geometry} material={materials.M_Headphone} {...extras} />
          <mesh onClick={(e) => handleClick(e)} name="Notebook" geometry={nodes.Notebook.geometry} material={materials.M_Notebook} {...extras} />
          <mesh name="Rocket003" geometry={nodes.Rocket003.geometry} material={materials.M_Rocket} {...extras} />
          <mesh onClick={(e) => handleClick(e)} name="Roundcube001" geometry={nodes.Roundcube001.geometry} material={materials.M_Roundcube} {...extras} />
          <mesh onClick={(e) => handleClick(e)} name="Table" geometry={nodes.Table.geometry} material={materials.M_Table} {...extras} />
          <mesh name="VR_Headset" geometry={nodes.VR_Headset.geometry} material={materials.M_Headset} {...extras} />
          <mesh name="Zeppelin" geometry={nodes.Zeppelin.geometry} material={materials.M_Zeppelin} />

        </group>
        <group name="Camera" position={[-1.78, 2.04, 23.58]} rotation={[1.62, 0.01, 0.11]}>
          <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} rotation={[-Math.PI / 2, 0, 0]}>
            <directionalLight
              castShadow
              position={[10, 20, 15]}
              shadow-camera-right={8}
              shadow-camera-top={8}
              shadow-camera-left={-8}
              shadow-camera-bottom={-8}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              intensity={2}
              shadow-bias={-0.0001}
            />
          </PerspectiveCamera>
        </group>
      </group>

      {/* <group>
        <Html occlude >
          <div className="container-info">
            <h1>Nosotros</h1>
            <br></br><br></br>
            Somos una compañía dinámica y experta en la creación de experiencias digitales que busca transformar la comunicación estratégica dentro de las empresas
            y en relación con sus clientes, para dar un salto de calidad en el ámbito cognitivo. Para esto desarrollamos propuestas capaces de mejorar los resultados
            comerciales de cada marca y su relevancia, mediante un mejor posicionamiento en el mercado y un crecimiento de valor a lo largo de su ciclo de vida.
            <ul>
              <li>Valoramos la diversidad en un entorno abierto e inclusivo donde fomentamos la confianza y el trato respetuoso hacia cada individuo.</li><br></br>
              <li>Ayudamos a nuestros clientes a establecerse como grandes empresas de valor y relevancia, capaces de crear relaciones fructíferas a largo plazo.</li><br></br>
              <li>Acompañamos cada proyecto desde su inicio, partiendo de etapas de asesoramiento y desarrollo, hasta su lanzamiento, estando presentes a cada momento para brindar respuestas eficaces.</li>
            </ul>
          </div>
        </Html>
      </group> */}
    </>

  )
}
useGLTF.preload("/model.glb")

