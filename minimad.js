// Define a polygon (array of points)
let polygon = [
    [0, 0],
    [0, 5],
    [5, 5],
    [5, 0]
];

// Define a point to check
let point = [2, 2];

// Check if the point is inside the polygon
let isInside = polygonContains(polygon, point);
console.log(`Point ${point} is inside polygon: ${isInside}`);
