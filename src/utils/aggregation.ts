import { Unit } from "../model/grid/unit";
import {
  DAGNode,
  DAGNodes,
  GridTypes,
  RawNodeTreeData,
  StatObject,
  StatProps,
  StatsArr,
  UnitData,
} from "../types";

export function processNodesStatsArr(arr: StatsArr): StatProps {
  const colorCounts: StatObject = {};
  const lengthCounts: StatObject = {};

  for (const item of arr) {
    const [color, length] = item;

    // Count occurrences for color
    if (colorCounts[color]) {
      colorCounts[color].length++;
    } else {
      colorCounts[color] = { length: 1 };
    }

    // Count occurrences for length
    if (lengthCounts[length]) {
      lengthCounts[length].length++;
    } else {
      lengthCounts[length] = { length: 1 };
    }
  }

  return {
    color: colorCounts,
    length: lengthCounts,
  };
}
export function createDAG(obj: RawNodeTreeData): DAGNode {
  const root: DAGNode = { name: "root", index: 0, children: [], units: [] };
  const nodes: { [key: string]: DAGNode } = { root: root };

  for (const key in obj) {
    const [prefix, path] = key.split("|");
    const parts = path.split("_");
    let currentNode = root;
    let currentPath = "root";

    for (const part of parts) {
      const [nodeName, index] = part.split("-");
      const nodeKey = `${currentPath}_${nodeName}${index}`;

      if (!nodes[nodeKey]) {
        const newNode: DAGNode = {
          name: nodeName as DAGNodes,
          index: parseInt(index, 10),
          children: [],
          units: [],
        };
        nodes[nodeKey] = newNode;
        currentNode.children.push(newNode);
      }

      currentNode = nodes[nodeKey];
      currentPath = nodeKey;
    }

    currentNode.units = obj[key];
  }

  return root;
}

export function aggregateTaskUnits(dag: DAGNode): {
  [key in DAGNodes]?: UnitData[][];
} {
  const result: { [key in DAGNodes]?: UnitData[][] } = { input: [] };

  function traverse(node: DAGNode) {
    if (!result[node.name]) {
      result[node.name] = [];
    }
    result[node.name]![node.index] = node.units;

    for (const child of node.children) {
      traverse(child);
    }
  }

  traverse(dag);
  return result;
}

export function aggregateUnitsByGridType(
  obj: RawNodeTreeData,
  gridType: GridTypes = "input"
): UnitData[][] {
  const inputRegex = new RegExp(`${gridType}-(\\d+)`);
  const result: UnitData[][] = [];

  for (const key in obj) {
    const match = key.match(inputRegex);
    if (match) {
      const index = parseInt(match[1], 10);
      if (!result[index]) {
        result[index] = [];
      }
      result[index].push(...obj[key]);
    }
  }

  return result;
}
