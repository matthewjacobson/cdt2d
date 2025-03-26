declare module 'cdt2d' {
  /**
   * Computes a constrained Delaunay triangulation of the input point set.
   *
   * @param points - An array of points, where each point is a length-2 number array [x, y].
   * @param edges - An optional array of constraint edges as pairs of point indices.
   * @param options - Optional additional options, like interior/exterior constraints.
   *
   * @returns An array of triangles, where each triangle is a 3-element array of point indices.
   */
  function cdt2d(
    points: number[][],
    edges?: number[][],
    options?: {
      delaunay?: boolean,
      interior?: boolean,
      exterior?: boolean,
      infinity?: boolean
    }
  ): number[][];
  export = cdt2d;
}
