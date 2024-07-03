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
  UnitDataWithId,
} from "../types";

export function processNodesStatsArr(arr: StatsArr): StatProps {
  const colorCounts: StatObject = {};
  const lengthCounts: StatObject = {};
  const colorLengthCounts: StatObject = {};

  for (const item of arr) {
    const [color, length, id, area] = item;
    const colorLengthKey = `${color}${length}`;

    // Count occurrences for color
    if (colorCounts[color]) {
      colorCounts[color].length++;
      colorCounts[color].items.push({ id, area });
    } else {
      colorCounts[color] = { length: 1, items: [{ id, area }] };
    }

    // Count occurrences for length
    if (lengthCounts[length]) {
      lengthCounts[length].length++;
      lengthCounts[length].items.push({ id, area });
    } else {
      lengthCounts[length] = { length: 1, items: [{ id, area }] };
    }

    // Count occurrences for colorLength
    if (colorLengthCounts[colorLengthKey]) {
      colorLengthCounts[colorLengthKey].length++;
      colorLengthCounts[colorLengthKey].items.push({ id, area });
    } else {
      colorLengthCounts[colorLengthKey] = {
        length: 1,
        items: [{ id, area }],
      };
    }
  }

  return {
    color: colorCounts,
    length: lengthCounts,
    colorLength: colorLengthCounts,
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
          id: nodeKey,
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
  gridType: GridTypes = "input",
  idx: string
): UnitDataWithId[] {
  const inputRegex = new RegExp(`${gridType}-${idx}`);
  const result: UnitDataWithId[] = [];

  for (const key in obj) {
    const match = key.match(inputRegex);
    if (match) {
      result.push(...obj[key].map((unit) => [...unit, key]));
    }
  }

  return result;
}
