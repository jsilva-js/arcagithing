import { useState, useEffect, useRef } from "react";
import ForceGraph3D from "react-force-graph-3d";
import SpriteText from "three-spritetext";
import * as d3 from "d3";
import * as THREE from "three";

let nn = null;
export default function App() {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [dagMode, setDagMode] = useState("td");
  const graphRef = useRef(null); // Ref to access the force graph component

  // Custom node object using Three.js
  const createNodeThreeObject = (node) => {
    if (node.path === "d3") {
      setTimeout(() => {
        nn = node;
      }, 500);
    }

    const size = 10; // Size of the square, adjust as needed
    const geometry = new THREE.PlaneGeometry(size, size);
    const material = new THREE.MeshBasicMaterial({
      color: node.color || 0x00ff00,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);

    // Optional: Adjust the position to ensure it's centered
    mesh.position.x = node.x || 0;
    mesh.position.y = node.y || 0;
    mesh.position.z = node.z || 0;
    setTimeout(() => {
      if (graphRef.current) {
        const center = new THREE.Vector3(nn.x, nn.y, nn.z); // Example: Look at the origin
        mesh.lookAt(center);
      }
    }, 1100);
    return mesh;
  };

  useEffect(() => {
    const parsedData = d3.csvParse(d3deps);
    const nodes = [],
      links = [];
    parsedData.forEach(({ size, path }) => {
      const levels = path.split("/");
      const level = levels.length - 1;
      const module = level > 0 ? levels[1] : null;
      const leaf = levels.pop();
      const parent = levels.join("/");
      const node = { path, leaf, module, size: +size || 20, level };
      // console.log(node);
      nodes.push(node);
      if (parent) {
        links.push({ source: parent, target: path, targetNode: node });
      }
    });

    setGraphData({ nodes, links });
  }, []);

  return (
    <div className="canva">
      <ForceGraph3D
        ref={graphRef}
        graphData={graphData}
        dagMode={"td"}
        dagLevelDistance={100}
        backgroundColor="#101020"
        linkColor={() => "rgba(255,255,255,0.2)"}
        nodeRelSize={1}
        nodeId="path"
        nodeVal="size"
        nodeLabel="path"
        nodeAutoColorBy="module"
        nodeOpacity={0.9}
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={0.8}
        linkDirectionalParticleSpeed={0.006}
        nodeThreeObject={createNodeThreeObject} // Use the custom node function
      />
    </div>
  );
}

const d3deps = `size,path
,d3
,d3/d3-array
,d3/d3-array/threshold
,d3/d3-axis
,d3/d3-brush
,d3/d3-chord
,d3/d3-collection
,d3/d3-color
,d3/d3-dispatch
,d3/d3-drag
,d3/d3-dsv
,d3/d3-ease
,d3/d3-force
,d3/d3-format
,d3/d3-geo
,d3/d3-geo/clip
,d3/d3-geo/path
,d3/d3-geo/projection
,d3/d3-hierarchy
,d3/d3-hierarchy/hierarchy
,d3/d3-hierarchy/pack
,d3/d3-hierarchy/treemap
,d3/d3-interpolate
,d3/d3-interpolate/transform
,d3/d3-path
,d3/d3-polygon
,d3/d3-quadtree
,d3/d3-queue
,d3/d3-random
,d3/d3-request
,d3/d3-scale
,d3/d3-selection
,d3/d3-selection/selection
,d3/d3-shape
,d3/d3-shape/curve
,d3/d3-shape/offset
,d3/d3-shape/order
,d3/d3-shape/symbol
,d3/d3-time-format
,d3/d3-time
,d3/d3-timer
,d3/d3-transition
,d3/d3-transition/selection
,d3/d3-transition/transition
,d3/d3-voronoi
,d3/d3-zoom
90,d3/d3-array/array.js
86,d3/d3-array/ascending.js
238,d3/d3-array/bisect.js
786,d3/d3-array/bisector.js
72,d3/d3-array/constant.js
86,d3/d3-array/descending.js
135,d3/d3-array/deviation.js
553,d3/d3-array/extent.js
1876,d3/d3-array/histogram.js
43,d3/d3-array/identity.js
451,d3/d3-array/max.js
362,d3/d3-array/mean.js
452,d3/d3-array/median.js
339,d3/d3-array/merge.js
451,d3/d3-array/min.js
63,d3/d3-array/number.js
182,d3/d3-array/pairs.js
161,d3/d3-array/permute.js
416,d3/d3-array/quantile.js
344,d3/d3-array/range.js
357,d3/d3-array/scan.js
285,d3/d3-array/shuffle.js
295,d3/d3-array/sum.js
361,d3/d3-array/threshold/freedmanDiaconis.js
180,d3/d3-array/threshold/scott.js
96,d3/d3-array/threshold/sturges.js
672,d3/d3-array/ticks.js
356,d3/d3-array/transpose.js
540,d3/d3-array/variance.js
99,d3/d3-array/zip.js
42,d3/d3-axis/array.js
5239,d3/d3-axis/axis.js
43,d3/d3-axis/identity.js
15778,d3/d3-brush/brush.js
72,d3/d3-brush/constant.js
127,d3/d3-brush/event.js
202,d3/d3-brush/noevent.js
42,d3/d3-chord/array.js
3178,d3/d3-chord/chord.js
72,d3/d3-chord/constant.js
159,d3/d3-chord/math.js
2340,d3/d3-chord/ribbon.js
137,d3/d3-collection/entries.js
104,d3/d3-collection/keys.js
1988,d3/d3-collection/map.js
2021,d3/d3-collection/nest.js
800,d3/d3-collection/set.js
115,d3/d3-collection/values.js
9276,d3/d3-color/color.js
1855,d3/d3-color/cubehelix.js
340,d3/d3-color/define.js
3167,d3/d3-color/lab.js
72,d3/d3-color/math.js
2729,d3/d3-dispatch/dispatch.js
72,d3/d3-drag/constant.js
4297,d3/d3-drag/drag.js
430,d3/d3-drag/event.js
857,d3/d3-drag/nodrag.js
202,d3/d3-drag/noevent.js
199,d3/d3-dsv/csv.js
3582,d3/d3-dsv/dsv.js
200,d3/d3-dsv/tsv.js
653,d3/d3-ease/back.js
521,d3/d3-ease/bounce.js
261,d3/d3-ease/circle.js
210,d3/d3-ease/cubic.js
1309,d3/d3-ease/elastic.js
251,d3/d3-ease/exp.js
43,d3/d3-ease/linear.js
596,d3/d3-ease/poly.js
192,d3/d3-ease/quad.js
236,d3/d3-ease/sin.js
654,d3/d3-force/center.js
2447,d3/d3-force/collide.js
72,d3/d3-force/constant.js
69,d3/d3-force/jiggle.js
3213,d3/d3-force/link.js
3181,d3/d3-force/manyBody.js
3444,d3/d3-force/simulation.js
1030,d3/d3-force/x.js
1030,d3/d3-force/y.js
361,d3/d3-format/defaultLocale.js
134,d3/d3-format/exponent.js
656,d3/d3-format/formatDecimal.js
368,d3/d3-format/formatDefault.js
475,d3/d3-format/formatGroup.js
611,d3/d3-format/formatPrefixAuto.js
458,d3/d3-format/formatRounded.js
1589,d3/d3-format/formatSpecifier.js
846,d3/d3-format/formatTypes.js
5247,d3/d3-format/locale.js
119,d3/d3-format/precisionFixed.js
190,d3/d3-format/precisionPrefix.js
186,d3/d3-format/precisionRound.js
906,d3/d3-geo/adder.js
1958,d3/d3-geo/area.js
5361,d3/d3-geo/bounds.js
929,d3/d3-geo/cartesian.js
3816,d3/d3-geo/centroid.js
2373,d3/d3-geo/circle.js
2897,d3/d3-geo/clip/antimeridian.js
470,d3/d3-geo/clip/buffer.js
5956,d3/d3-geo/clip/circle.js
5527,d3/d3-geo/clip/extent.js
3813,d3/d3-geo/clip/index.js
1099,d3/d3-geo/clip/line.js
2802,d3/d3-geo/clip/polygon.js
250,d3/d3-geo/compose.js
72,d3/d3-geo/constant.js
229,d3/d3-geo/distance.js
3034,d3/d3-geo/graticule.js
43,d3/d3-geo/identity.js
911,d3/d3-geo/interpolate.js
1309,d3/d3-geo/length.js
880,d3/d3-geo/math.js
34,d3/d3-geo/noop.js
945,d3/d3-geo/path/area.js
485,d3/d3-geo/path/bounds.js
2033,d3/d3-geo/path/centroid.js
914,d3/d3-geo/path/context.js
1690,d3/d3-geo/path/index.js
1149,d3/d3-geo/path/string.js
139,d3/d3-geo/pointEqual.js
2491,d3/d3-geo/polygonContains.js
235,d3/d3-geo/projection/albers.js
3986,d3/d3-geo/projection/albersUsa.js
502,d3/d3-geo/projection/azimuthal.js
447,d3/d3-geo/projection/azimuthalEqualArea.js
443,d3/d3-geo/projection/azimuthalEquidistant.js
402,d3/d3-geo/projection/conic.js
1017,d3/d3-geo/projection/conicConformal.js
871,d3/d3-geo/projection/conicEqualArea.js
771,d3/d3-geo/projection/conicEquidistant.js
314,d3/d3-geo/projection/cylindricalEqualArea.js
253,d3/d3-geo/projection/equirectangular.js
910,d3/d3-geo/projection/fit.js
387,d3/d3-geo/projection/gnomonic.js
1922,d3/d3-geo/projection/identity.js
3752,d3/d3-geo/projection/index.js
1119,d3/d3-geo/projection/mercator.js
376,d3/d3-geo/projection/orthographic.js
3275,d3/d3-geo/projection/resample.js
436,d3/d3-geo/projection/stereographic.js
762,d3/d3-geo/projection/transverseMercator.js
2509,d3/d3-geo/rotation.js
2305,d3/d3-geo/stream.js
701,d3/d3-geo/transform.js
166,d3/d3-hierarchy/accessors.js
2093,d3/d3-hierarchy/cluster.js
120,d3/d3-hierarchy/constant.js
138,d3/d3-hierarchy/hierarchy/ancestors.js
121,d3/d3-hierarchy/hierarchy/descendants.js
381,d3/d3-hierarchy/hierarchy/each.js
353,d3/d3-hierarchy/hierarchy/eachAfter.js
282,d3/d3-hierarchy/hierarchy/eachBefore.js
1819,d3/d3-hierarchy/hierarchy/index.js
164,d3/d3-hierarchy/hierarchy/leaves.js
246,d3/d3-hierarchy/hierarchy/links.js
606,d3/d3-hierarchy/hierarchy/path.js
151,d3/d3-hierarchy/hierarchy/sort.js
264,d3/d3-hierarchy/hierarchy/sum.js
2452,d3/d3-hierarchy/pack/enclose.js
1917,d3/d3-hierarchy/pack/index.js
389,d3/d3-hierarchy/pack/shuffle.js
3497,d3/d3-hierarchy/pack/siblings.js
1266,d3/d3-hierarchy/partition.js
1934,d3/d3-hierarchy/stratify.js
7060,d3/d3-hierarchy/tree.js
1184,d3/d3-hierarchy/treemap/binary.js
309,d3/d3-hierarchy/treemap/dice.js
2810,d3/d3-hierarchy/treemap/index.js
1029,d3/d3-hierarchy/treemap/resquarify.js
166,d3/d3-hierarchy/treemap/round.js
309,d3/d3-hierarchy/treemap/slice.js
170,d3/d3-hierarchy/treemap/sliceDice.js
1868,d3/d3-hierarchy/treemap/squarify.js
372,d3/d3-interpolate/array.js
600,d3/d3-interpolate/basis.js
360,d3/d3-interpolate/basisClosed.js
697,d3/d3-interpolate/color.js
72,d3/d3-interpolate/constant.js
760,d3/d3-interpolate/cubehelix.js
134,d3/d3-interpolate/date.js
547,d3/d3-interpolate/hcl.js
547,d3/d3-interpolate/hsl.js
447,d3/d3-interpolate/lab.js
100,d3/d3-interpolate/number.js
390,d3/d3-interpolate/object.js
163,d3/d3-interpolate/quantize.js
1277,d3/d3-interpolate/rgb.js
112,d3/d3-interpolate/round.js
1758,d3/d3-interpolate/string.js
672,d3/d3-interpolate/transform/decompose.js
2064,d3/d3-interpolate/transform/index.js
980,d3/d3-interpolate/transform/parse.js
598,d3/d3-interpolate/value.js
1387,d3/d3-interpolate/zoom.js
4089,d3/d3-path/path.js
243,d3/d3-polygon/area.js
346,d3/d3-polygon/centroid.js
411,d3/d3-polygon/contains.js
402,d3/d3-polygon/cross.js
1710,d3/d3-polygon/hull.js
375,d3/d3-polygon/length.js
2441,d3/d3-quadtree/add.js
1667,d3/d3-quadtree/cover.js
170,d3/d3-quadtree/data.js
206,d3/d3-quadtree/extent.js
1696,d3/d3-quadtree/find.js
134,d3/d3-quadtree/quad.js
2077,d3/d3-quadtree/quadtree.js
1898,d3/d3-quadtree/remove.js
51,d3/d3-quadtree/root.js
155,d3/d3-quadtree/size.js
695,d3/d3-quadtree/visit.js
773,d3/d3-quadtree/visitAfter.js
138,d3/d3-quadtree/x.js
138,d3/d3-quadtree/y.js
29,d3/d3-queue/array.js
2870,d3/d3-queue/queue.js
168,d3/d3-random/bates.js
113,d3/d3-random/exponential.js
137,d3/d3-random/irwinHall.js
178,d3/d3-random/logNormal.js
503,d3/d3-random/normal.js
236,d3/d3-random/uniform.js
101,d3/d3-request/csv.js
517,d3/d3-request/dsv.js
157,d3/d3-request/html.js
127,d3/d3-request/json.js
4593,d3/d3-request/request.js
109,d3/d3-request/text.js
118,d3/d3-request/tsv.js
370,d3/d3-request/type.js
174,d3/d3-request/xml.js
90,d3/d3-scale/array.js
2637,d3/d3-scale/band.js
119,d3/d3-scale/category10.js
179,d3/d3-scale/category20.js
179,d3/d3-scale/category20b.js
179,d3/d3-scale/category20c.js
101,d3/d3-scale/colors.js
72,d3/d3-scale/constant.js
3328,d3/d3-scale/continuous.js
188,d3/d3-scale/cubehelix.js
463,d3/d3-scale/identity.js
1206,d3/d3-scale/linear.js
3273,d3/d3-scale/log.js
340,d3/d3-scale/nice.js
44,d3/d3-scale/number.js
1116,d3/d3-scale/ordinal.js
1000,d3/d3-scale/pow.js
1280,d3/d3-scale/quantile.js
1066,d3/d3-scale/quantize.js
536,d3/d3-scale/rainbow.js
717,d3/d3-scale/sequential.js
802,d3/d3-scale/threshold.js
1203,d3/d3-scale/tickFormat.js
4565,d3/d3-scale/time.js
379,d3/d3-scale/utcTime.js
6471,d3/d3-scale/viridis.js
72,d3/d3-selection/constant.js
662,d3/d3-selection/creator.js
536,d3/d3-selection/local.js
533,d3/d3-selection/matcher.js
224,d3/d3-selection/mouse.js
303,d3/d3-selection/namespace.js
254,d3/d3-selection/namespaces.js
448,d3/d3-selection/point.js
259,d3/d3-selection/select.js
282,d3/d3-selection/selectAll.js
235,d3/d3-selection/selection/append.js
1460,d3/d3-selection/selection/attr.js
134,d3/d3-selection/selection/call.js
1740,d3/d3-selection/selection/classed.js
3597,d3/d3-selection/selection/data.js
132,d3/d3-selection/selection/datum.js
869,d3/d3-selection/selection/dispatch.js
289,d3/d3-selection/selection/each.js
53,d3/d3-selection/selection/empty.js
792,d3/d3-selection/selection/enter.js
176,d3/d3-selection/selection/exit.js
546,d3/d3-selection/selection/filter.js
520,d3/d3-selection/selection/html.js
2216,d3/d3-selection/selection/index.js
468,d3/d3-selection/selection/insert.js
171,d3/d3-selection/selection/lower.js
575,d3/d3-selection/selection/merge.js
258,d3/d3-selection/selection/node.js
140,d3/d3-selection/selection/nodes.js
3119,d3/d3-selection/selection/on.js
367,d3/d3-selection/selection/order.js
617,d3/d3-selection/selection/property.js
138,d3/d3-selection/selection/raise.js
153,d3/d3-selection/selection/remove.js
653,d3/d3-selection/selection/select.js
550,d3/d3-selection/selection/selectAll.js
98,d3/d3-selection/selection/size.js
681,d3/d3-selection/selection/sort.js
71,d3/d3-selection/selection/sparse.js
889,d3/d3-selection/selection/style.js
528,d3/d3-selection/selection/text.js
152,d3/d3-selection/selector.js
171,d3/d3-selection/selectorAll.js
175,d3/d3-selection/sourceEvent.js
407,d3/d3-selection/touch.js
323,d3/d3-selection/touches.js
218,d3/d3-selection/window.js
8831,d3/d3-shape/arc.js
2917,d3/d3-shape/area.js
42,d3/d3-shape/array.js
81,d3/d3-shape/constant.js
1436,d3/d3-shape/curve/basis.js
1530,d3/d3-shape/curve/basisClosed.js
1069,d3/d3-shape/curve/basisOpen.js
1081,d3/d3-shape/curve/bundle.js
1633,d3/d3-shape/curve/cardinal.js
1605,d3/d3-shape/curve/cardinalClosed.js
1288,d3/d3-shape/curve/cardinalOpen.js
2637,d3/d3-shape/curve/catmullRom.js
2083,d3/d3-shape/curve/catmullRomClosed.js
1760,d3/d3-shape/curve/catmullRomOpen.js
738,d3/d3-shape/curve/linear.js
514,d3/d3-shape/curve/linearClosed.js
3203,d3/d3-shape/curve/monotone.js
1761,d3/d3-shape/curve/natural.js
655,d3/d3-shape/curve/radial.js
1367,d3/d3-shape/curve/step.js
86,d3/d3-shape/descending.js
43,d3/d3-shape/identity.js
1516,d3/d3-shape/line.js
106,d3/d3-shape/math.js
29,d3/d3-shape/noop.js
319,d3/d3-shape/offset/expand.js
310,d3/d3-shape/offset/none.js
314,d3/d3-shape/offset/silhouette.js
740,d3/d3-shape/offset/wiggle.js
305,d3/d3-shape/order/ascending.js
112,d3/d3-shape/order/descending.js
545,d3/d3-shape/order/insideOut.js
120,d3/d3-shape/order/none.js
97,d3/d3-shape/order/reverse.js
2336,d3/d3-shape/pie.js
81,d3/d3-shape/point.js
934,d3/d3-shape/radialArea.js
396,d3/d3-shape/radialLine.js
1432,d3/d3-shape/stack.js
186,d3/d3-shape/symbol/circle.js
476,d3/d3-shape/symbol/cross.js
307,d3/d3-shape/symbol/diamond.js
137,d3/d3-shape/symbol/square.js
609,d3/d3-shape/symbol/star.js
255,d3/d3-shape/symbol/triangle.js
733,d3/d3-shape/symbol/wye.js
1160,d3/d3-shape/symbol.js
867,d3/d3-time-format/defaultLocale.js
284,d3/d3-time-format/isoFormat.js
319,d3/d3-time-format/isoParse.js
13876,d3/d3-time-format/locale.js
462,d3/d3-time/day.js
164,d3/d3-time/duration.js
569,d3/d3-time/hour.js
1845,d3/d3-time/interval.js
668,d3/d3-time/millisecond.js
437,d3/d3-time/minute.js
414,d3/d3-time/month.js
440,d3/d3-time/second.js
397,d3/d3-time/utcDay.js
399,d3/d3-time/utcHour.js
412,d3/d3-time/utcMinute.js
453,d3/d3-time/utcMonth.js
979,d3/d3-time/utcWeek.js
808,d3/d3-time/utcYear.js
963,d3/d3-time/week.js
754,d3/d3-time/year.js
400,d3/d3-timer/interval.js
250,d3/d3-timer/timeout.js
2771,d3/d3-timer/timer.js
484,d3/d3-transition/active.js
665,d3/d3-transition/interrupt.js
245,d3/d3-transition/selection/index.js
138,d3/d3-transition/selection/interrupt.js
1090,d3/d3-transition/selection/transition.js
2473,d3/d3-transition/transition/attr.js
904,d3/d3-transition/transition/attrTween.js
510,d3/d3-transition/transition/delay.js
528,d3/d3-transition/transition/duration.js
348,d3/d3-transition/transition/ease.js
574,d3/d3-transition/transition/filter.js
1892,d3/d3-transition/transition/index.js
340,d3/d3-transition/transition/interpolate.js
653,d3/d3-transition/transition/merge.js
853,d3/d3-transition/transition/on.js
284,d3/d3-transition/transition/remove.js
4792,d3/d3-transition/transition/schedule.js
826,d3/d3-transition/transition/select.js
883,d3/d3-transition/transition/selectAll.js
174,d3/d3-transition/transition/selection.js
2119,d3/d3-transition/transition/style.js
607,d3/d3-transition/transition/styleTween.js
473,d3/d3-transition/transition/text.js
691,d3/d3-transition/transition/transition.js
2026,d3/d3-transition/transition/tween.js
4381,d3/d3-voronoi/Beach.js
4087,d3/d3-voronoi/Cell.js
1632,d3/d3-voronoi/Circle.js
72,d3/d3-voronoi/constant.js
3415,d3/d3-voronoi/Diagram.js
3634,d3/d3-voronoi/Edge.js
81,d3/d3-voronoi/point.js
5302,d3/d3-voronoi/RedBlackTree.js
1420,d3/d3-voronoi/voronoi.js
72,d3/d3-zoom/constant.js
137,d3/d3-zoom/event.js
202,d3/d3-zoom/noevent.js
1336,d3/d3-zoom/transform.js
12133,d3/d3-zoom/zoom.js`;
