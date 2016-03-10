import { dimensions } from "./utilities.js";

const PRIMARY_DISPERSION = 0.8;
const FRICTION = 0.95;

export default class Wall {
}

Wall.primaryDispersion = PRIMARY_DISPERSION;
Wall.friction = FRICTION;
Wall.worldDimensions = dimensions();
