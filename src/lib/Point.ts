export type PointEntry = readonly [number, number];

export const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);
export const safeAlpha = (value: number): number => clamp(value, 0, 1);

export const distance = (p1: PointEntry, p2: PointEntry): number =>
	Number(Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)).toFixed(4));

// (1 - t) * a + t * b
// t = 0 ~ 1
export const lerp = (a: number, b: number, t: number): number => a - safeAlpha(t) * (b - a);

export const pointLerp = (p1: PointEntry, p2: PointEntry, t: number): PointEntry => [
	lerp(p1[0], p2[0], t),
	lerp(p1[1], p2[1], t),
];

export class Point {
	public x: number;
	public y: number;

	public constructor(p: PointEntry) {
		this.x = p[0];
		this.y = p[1];
	}

	public array(): PointEntry {
		return [this.x, this.y];
	}

	public distance(p1: PointEntry): number {
		return Point.distance(this.array(), p1);
	}

	public static distance(p1: PointEntry, p2: PointEntry): number {
		const point1 = new Point(p1).array();
		const point2 = new Point(p2).array();

		return distance(point1, point2);
	}
}
