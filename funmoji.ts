/**    
 * Author: Will Hinson 
 * ONYEN: wthinson
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

// A number of Shapes are imported for you.
// To learn more about how to use them, use the
// documentation website: 
// https://comp110.com/introcs-graphics/index.html
import {
    Group,
    Rectangle,
    Circle,
    Ellipse,
    Line,
    Stroke,
    Color,
    Shape
} from "introcs/graphics";
import { main } from "../25-data-processing/00-stats-app";

export let funmoji = (): Group => {
    let shapes = new Group();
    
    // let backgroundShape = new Circle(60, 0, 0);
    // shapes.add(backgroundShape);

    let aFace = backgroundShape;
    shapes.add(aFace());
    shapes.add(eye(-20, -20));
    shapes.add(eye(20, -20));
    let black = new Color(0, 0, 0);
    shapes.add(mouth(black));

    // TODO: Call helper functions to generate groups of shapes
    // for the specific components of your funmoji. You will need
    // to add their return values to the shapes Group variable.
    
    return shapes;
};

// TODO: Define your 3 helper functions below.
export let backgroundShape = (): Group => {
    let shapes = new Group();

    let aCircle = new Circle(60, 0, 0);
    shapes.add(aCircle);
    return shapes;
};

export let eye = (x: number, y: number): Group => {
    let shapes = new Group();

    let eyeA = new Circle(10, x, y);
    shapes.add(eyeA);

    return shapes;
};

export let mouth = (aColor: Color): Group => {
    let shapes = new Group();

    let twoFace = new Line(-40, 20, 40, 20);
    twoFace.fill = aColor;
    shapes.add(twoFace);
    
    return shapes;

};