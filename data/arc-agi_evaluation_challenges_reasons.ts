// I = this input
// O = this output
// II | OO = shared between train input and output
// X, Y, Z... = any property value
// A, B, C = groups
// class = different groups of same class representation
// N = each body or group
// |> return
// self = the result of the operation
// this = the blueprint of the operation
// C = color
// .c = color property
// = assign operation
// == information

const reasons = {
  "00576224": {
    i: 1,
    reasonLang: [
      "A==I",
      // O is 3*I in x and y
      "O-set-size-escale(3)",
      // reading orientation of an operation
      // tb-lr = top-bottom left-right
      "orientation(x==1, y==-1)=leftToRight",
      "next(0,leftToRight)=calculatedPos",
      "append(A)-to-calculatedPos=appendedA",
      // B operation is: put I in O (copy I and paste I)
      // right to the next available 0 following top to bottom left to right
      "O-change-appendedA=fillO",
      // C is: repeat B operation and flip last B horiontally
      "change-transform-flip(appendedA, x)=flippedA",
      "calculatedPos.y.shift.index===odd=oddRowA",
      "loop-fillO-flippedA-when-oddRowA",
    ],
  },
  "009d5c81": {
    i: 2,
    reasonLang: [
      // each I has A and B and only A and B
      // (A and B) are a meaninful different class
      "I(A,B)-class",
      // all B can be one of 4 types and btype is
      // a variable that represents the type of a given B
      "II(B)-type==1/4=btype",
      "B(btype)-class=F",
      // B have property .c = Color
      // same B have same property encoded Color
      // different B have different encoded Color
      "II(F)-encode(.c==Color)",
      // copy I to O
      "O-set(I)",
      "A-change-transform-mutate-color==B.c",
      "B-destroy",
    ],
  },

  "00dbd492": {
    i: 3,
    reasonLang: [
      "I(A)-class",
      "A-count==1/2",
      "II(A)-type==1/3=atype",
      "A(atype)-class=F",
      "II(F)-encode(.c==Color)",
      "O-set(I)",
      "A-change-inside(floor)-color(A.c)",
    ],
  },
  "03560426": {
    i: 4,
    reasonLang: [
      "I(A)-class=A",
      "A-count==3/4",
      "O-set(I)",
      "orientation(x==1, y==-1)=first",
      "orientation(x==-1, y==1)=last",
      "O(A)-from-first=oai",
      "previous(oai).first(last, unit)=j",
      "O.first(first,0)=j",
      "oai-change-shift-to-j|k",
    ],
  },
  "05a7bcf2": {
    i: 5,
    reasonLang: [
      "I(A,B,C)-class=A,B,C",
      "O-set(I)",
      "from(A)-to-closest-surface-of(B)-class=aToBsurface",
      "aToBsurface.direction=aToBDir",
      "O-change-create-projection(aToBDir, until-end)-behind(B,C)-class=aproj",
      "A-change-transform-mutate-color==green",
      "aproj-front(B)-class=aprojfrontB",
      "aprojfrontB-change-transform-mutate-color==B.Color",
      "C-on(aprojOnC)=cInFrontOfAproj",
      "cInFrontOfAproj-change-transform-shift-to-aToBDir-until-collide",
    ],
  },
  "0607ce86": {
    i: 6,
    reasonLang: [
      "I(A)-class=blocks",
      "I(B)-class=residues",
      "A-count==6",
      "residues-around(blocks)=residuesAroundBlocks",
      "residues-not-on(blocks)=residuesNotOnBlocks",
      "O-set(I)",
      "O-change-destroy(residuesNotInBlocks, residuesAroundBlocks)",
      "stack(blocks)=stackedBlocks",
      "stackedBlocks.unit=stackedBlocksUnit",
      "votes-of-stackedBlocksUnit.color=unitColorVotes",
      "stackedBlocksUnit-change-transform-mutate-color==unitColorVotes.max",
    ],
  },

  "0692e18c": {
    i: 7,
    reasonLang: [
      "A==I",
      "O-set-size-escale(3)",
      "A.unit.color=unitColor",
      "A.floor.unit=florUnit",
      "unitColor-change-transform-mutate-color==0",
      "florUnit-change-transform-mutate-color==unitColor",
      "orientation(x==1, y==-1)=readingOrder",
      "each-order-by-readingOrder=readingOrderEach",
      // part = unit + floor.unit
      "readingOrderEach-I.part=ipart",
      "O.quadrant(ipart)=quadrant",
      "loop(quadrant)-change-replace-by(A)-when-ipart.unit.color!=0",
    ],
  },

  "070dd51e": {
    i: 8,
    reasonLang: [
      // all dots
      "I(A)-class",
      "A-group-by-color=unitPairs",
      "O-set(I)",
      "each-unitPair-order-by-horizontal-connectivity=unitPairOrdered",
      "connect-between(unitPairOrdered)",
    ],
  },

  "08573cc6": {
    i: 9,
    reasonLang: [
      "I(A,B,C)-class",
      "O-set(I(C))",
      "orientation(anticlockwise, 90deg, 1)=dir",
      "alternate(A,B)=alt",
      "loop.index=idx",
      "last-append-(alt)-at-(dir)=nextAppend",
      "last(C-nextAppend)=lastAppend",
      "loop(idx+2)-lastAppend",
    ],
  },
};
