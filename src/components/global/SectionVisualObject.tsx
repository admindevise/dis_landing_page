import React, { useEffect, useRef } from "react";
import type { BufferGeometry, Vector3 } from "three";

type SectionVisualObjectProps = {
  variant: "ledger" | "network";
};

export default function SectionVisualObject({ variant }: SectionVisualObjectProps) {
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let disposed = false;
    let frame = 0;
    let cleanup: (() => void) | undefined;

    const mountScene = async () => {
      const stage = stageRef.current;
      if (!stage) return;

      const T = await import("three");
      if (disposed) return;

      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0, 8);

      const renderer = new T.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0, 0);
      renderer.domElement.style.display = "block";
      stage.prepend(renderer.domElement);

      const group = new T.Group();
      scene.add(group);
      scene.add(new T.AmbientLight(0xffffff, 0.8));

      const light = new T.PointLight(0x42c9ff, 38, 18);
      light.position.set(3, 3, 5);
      scene.add(light);

      const material = new T.MeshPhysicalMaterial({
        color: variant === "ledger" ? 0x02b2b2 : 0x1fa2ff,
        transparent: true,
        opacity: 0.2,
        roughness: 0.14,
        metalness: 0.16,
        clearcoat: 1,
        side: T.DoubleSide
      });
      const edgeMaterial = new T.LineBasicMaterial({ color: 0x4fd8d8, transparent: true, opacity: 0.82 });
      const coreMaterial = new T.MeshBasicMaterial({ color: 0x42c9ff, transparent: true, opacity: 0.18 });

      const addWireframe = (geometry: BufferGeometry, scale = 1) => {
        const mesh = new T.Mesh(geometry, material);
        mesh.scale.setScalar(scale);
        mesh.add(new T.LineSegments(new T.EdgesGeometry(geometry), edgeMaterial));
        group.add(mesh);
        return mesh;
      };

      if (variant === "ledger") {
        addWireframe(new T.BoxGeometry(2.7, 2.7, 2.7));
        const core = new T.Mesh(new T.IcosahedronGeometry(0.95, 1), coreMaterial);
        core.add(new T.LineSegments(new T.EdgesGeometry(core.geometry), edgeMaterial));
        group.add(core);

        for (let index = 0; index < 4; index++) {
          const bar = new T.Mesh(new T.BoxGeometry(0.16, 0.8 + index * 0.3, 0.16), new T.MeshBasicMaterial({ color: index % 2 ? 0x4fd8d8 : 0x42c9ff }));
          bar.position.set(-1.4 + index * 0.9, -1.9, 0);
          group.add(bar);
        }
      } else {
        const core = addWireframe(new T.IcosahedronGeometry(1.2, 1));
        core.material = material;
        const points: Vector3[] = [];
        for (let index = 0; index < 28; index++) {
          const point = new T.Vector3().randomDirection().multiplyScalar(2.1 + (index % 3) * 0.35);
          points.push(point);
        }
        group.add(new T.Points(new T.BufferGeometry().setFromPoints(points), new T.PointsMaterial({ color: 0x4fd8d8, size: 0.08 })));
        points.forEach((point, index) => {
          const end = points[(index + 5) % points.length];
          group.add(new T.Line(new T.BufferGeometry().setFromPoints([point, end]), edgeMaterial));
        });
      }

      const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const resize = () => {
        const width = stage.clientWidth;
        const height = stage.clientHeight;
        if (!width || !height) return;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(stage);
      resize();

      const handlePointerMove = (event: PointerEvent) => {
        const bounds = stage.getBoundingClientRect();
        pointer.targetX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        pointer.targetY = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
      };
      const resetPointer = () => {
        pointer.targetX = 0;
        pointer.targetY = 0;
      };
      stage.addEventListener("pointermove", handlePointerMove);
      stage.addEventListener("pointerleave", resetPointer);

      const animate = (time: number) => {
        const seconds = time * 0.001;
        pointer.x += (pointer.targetX - pointer.x) * 0.05;
        pointer.y += (pointer.targetY - pointer.y) * 0.05;
        const speed = reducedMotion ? 0 : 1;
        group.rotation.y = seconds * 0.22 * speed + pointer.x * 0.3;
        group.rotation.x = pointer.y * 0.2;
        group.position.y = Math.sin(seconds * 0.7) * 0.08 * speed;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);

      cleanup = () => {
        cancelAnimationFrame(frame);
        resizeObserver.disconnect();
        stage.removeEventListener("pointermove", handlePointerMove);
        stage.removeEventListener("pointerleave", resetPointer);
        renderer.dispose();
        stage.removeChild(renderer.domElement);
        scene.traverse((object) => {
          if (object instanceof T.Mesh || object instanceof T.Line || object instanceof T.LineSegments || object instanceof T.Points) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) object.material.forEach((item) => item.dispose());
            else object.material.dispose();
          }
        });
      };
    };

    mountScene();
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [variant]);

  return (
    <div ref={stageRef} className="dis-section-visual__stage" aria-hidden="true">
      <div className="dis-section-visual__readout">
        <span>LIVE MODEL</span>
        <strong>{variant === "ledger" ? "04.28" : "99.98%"}</strong>
      </div>
    </div>
  );
}
