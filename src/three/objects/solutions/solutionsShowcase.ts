import type { SceneFactory } from "../../types";
import { clamp, follow } from "../../utils";
import { aiModel } from "./ai";
import { businessModel } from "./business";
import { marketplaceModel } from "./marketplace";
import { valuoModel } from "./valuo";

/** Soluciones · morphs between the four product models. State: `active` (tab index). */
export const solutionsShowcase: SceneFactory = ({ T, camera }) => {
  camera.fov = 35;
  camera.position.set(0, 1.8, 8.6);
  camera.lookAt(0, 0, 0);
  camera.updateProjectionMatrix();

  const root = new T.Group();
  const models = [businessModel(T), marketplaceModel(T), valuoModel(T), aiModel(T)];
  const progress = models.map((_, index): number => (index === 0 ? 1 : 0));
  models.forEach((model) => root.add(model.group));

  return {
    object: root,
    update(input) {
      const active = input.state.active ?? 0;
      const speed = input.reduced ? 0 : 1;

      models.forEach((model, index) => {
        progress[index] = follow(progress[index], index === active ? 1 : 0, 5, input);
        const value = progress[index];
        model.group.visible = value > 0.01;
        if (!model.group.visible) return;
        const ease = 1 - Math.pow(1 - value, 3);
        model.group.scale.setScalar(ease);
        model.group.position.y = (1 - ease) * -0.8;
        model.group.rotation.y = input.time * 0.12 + (1 - ease) * 1.4 + input.pointer.x * 0.5;
        model.group.rotation.x = -input.pointer.y * 0.15;
        model.tick(input.time, input.hover, speed);
      });

      root.scale.setScalar(clamp(input.aspect * 0.9, 0.6, 1));
    }
  };
};
