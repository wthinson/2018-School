import { SVG, Group } from "introcs/graphics";

import { funmoji } from "./funmoji";
import { Grid } from "./Grid";

/** 
 * You should not need to modify this file...
 * ...unless you want to comment out the grid.
 */
export let main = async () => {
    let canvas = new SVG("canvas");
    let scene = new Group();

    // Establish a coordinate grid
    let grid = new Grid(-100, -100, 100, 100);
    scene.add(grid.shapes());

    // Add the funmoji to the scene
    scene.add(funmoji());

    canvas.render(scene);
};

main();