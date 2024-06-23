// Basic unit and dimensions definition
class Unit {
  x: number;
  y: number;
  color: number;

  constructor(x: number, y: number, color: number) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}

class Dimensions {
  x: number;
  y: number;
  xy: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.xy = x * y;
  }
}

// Define abstract class for composite objects
abstract class CompositeObject {
  units: Unit[];
  children: CompositeObject[];

  constructor() {
    this.units = [];
    this.children = [];
  }

  addUnit(unit: Unit): void {
    this.units.push(unit);
  }

  addChild(child: CompositeObject): void {
    this.children.push(child);
  }
}

// Grid class
class Grid extends CompositeObject {
  floor: Floor;
  publicArea: Public;

  constructor() {
    super();
    this.floor = new Floor();
    this.publicArea = new Public();
    this.children = [this.floor, this.publicArea];
  }
}

// Floor class
class Floor extends CompositeObject {
  holes: Unit[]; // Special units that define holes

  constructor() {
    super();
    this.holes = [];
  }

  addHole(hole: Unit): void {
    this.holes.push(hole);
  }
}

// Public class
class Public extends CompositeObject {
  groups: Group[];
  semiGroups: SemiGroup[];

  constructor() {
    super();
    this.groups = [];
    this.semiGroups = [];
  }

  addGroup(group: Group): void {
    this.groups.push(group);
    this.children.push(group);
  }

  addSemiGroup(semiGroup: SemiGroup): void {
    this.semiGroups.push(semiGroup);
    this.children.push(semiGroup);
  }
}

// Group and SemiGroup
class Group extends CompositeObject {
  bodies: Body[];
  limbs: Limb[];

  constructor() {
    super();
    this.bodies = [];
    this.limbs = [];
  }

  addBody(body: Body): void {
    this.bodies.push(body);
    this.children.push(body);
  }

  addLimb(limb: Limb): void {
    this.limbs.push(limb);
    this.children.push(limb);
  }
}

class SemiGroup extends CompositeObject {
  bodies: Body[];
  limbs: Limb[];

  constructor() {
    super();
    this.bodies = [];
    this.limbs = [];
  }

  addBody(body: Body): void {
    this.bodies.push(body);
    this.children.push(body);
  }

  addLimb(limb: Limb): void {
    this.limbs.push(limb);
    this.children.push(limb);
  }
}

// Body and Limb
class Body extends CompositeObject {
  publicBody: boolean;

  constructor(publicBody: boolean) {
    super();
    this.publicBody = publicBody;
  }
}

class Limb extends CompositeObject {
  publicLimb: boolean;

  constructor(publicLimb: boolean) {
    super();
    this.publicLimb = publicLimb;
  }
}
