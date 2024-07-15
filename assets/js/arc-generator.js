/**
 * Generates an SVG path string for an arc with the given parameters.
 *
 * @param {number} cx - The x-coordinate of the arc's center.
 * @param {number} cy - The y-coordinate of the arc's center.
 * @param {number} radius - The radius of the arc.
 * @param {number} startAngle - The start angle of the arc in degrees.
 * @param {number} endAngle - The end angle of the arc in degrees.
 * @returns {string} The SVG path string for the arc.
 */
function createArcPath(cx, cy, radius, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  const d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

/**
 * Converts polar coordinates (angle and radius) to Cartesian coordinates (x and y).
 *
 * @param {number} cx - The x-coordinate of the center point.
 * @param {number} cy - The y-coordinate of the center point.
 * @param {number} radius - The radius of the polar coordinate.
 * @param {number} angleInDegrees - The angle of the polar coordinate in degrees.
 * @returns {Object} An object with `x` and `y` properties representing the Cartesian coordinates.
 */
function polarToCartesian(cx, cy, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  };
}

/**
 * Generates an SVG path element for an arc with the given parameters.
 *
 * @param {string} stroke - The color of the arc's stroke.
 * @param {number} fillPercentage - The percentage of the arc to fill (0-100).
 * @returns {SVGPathElement} The SVG path element representing the arc.
 */
function generateArc(stroke, fillPercentage) {
  // Define the arc parameters
  const cx = Math.floor(125 / 2); // Center x
  const cy = Math.floor(125 / 2); // Center y
  const radius = 125 / 2 - 5; // Radius
  const startAngle = -135; // Start angle in degrees
  const endAngle = startAngle + (270 * fillPercentage) / 100; // End angle in degrees
  const arcStrokeWidth = "8.5";

  // Create the arc path
  const arcPath = createArcPath(cx, cy, radius, startAngle, endAngle);

  // Create an SVG path element
  const pathElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  pathElement.setAttribute("d", arcPath);
  pathElement.setAttribute("fill", "none");
  pathElement.setAttribute("stroke", stroke.toString());
  pathElement.setAttribute("stroke-width", arcStrokeWidth);
  pathElement.setAttribute("stroke-linecap", "round");

  return pathElement;
}

for (let skill of document.getElementsByClassName("skill")) {
  const accentColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent")
    .trim();
  const fillPercentage = parseInt(skill.children[2].children[1].innerHTML);

  skill.children[0].appendChild(generateArc("#A6A6A6", 100));
  skill.children[1].appendChild(generateArc(accentColor, fillPercentage));
}
