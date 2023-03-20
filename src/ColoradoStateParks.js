import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";

export default function ColoradoStateParks() {
  howManyParks();
  aDifferentName();
  console.log(trees);
  console.log(RMFunctions.trees);
  RMFunctions.wildlife();

  RMFunctions.elevation();
  wildlife();

  return (
    <div>
      <MesaVerdePark />
    </div>
  );
}
