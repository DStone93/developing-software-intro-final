import { expect } from 'chai'
import {calcHouseMaterials, getHouseMaterials, calcWallLumber, calcDrywall, calcPlywood, calcWaste, calcPurchase} from '../src/calculator/index'
import "mocha";


// Changed calcHouseMaterials to multiply by 12 if flag is present

describe("calcHouseMaterials", () => {
  it("should return customer name gerald", () => {
      const result= calcHouseMaterials("gerald", 8, 8, true)
      expect(result.name).to.equal("gerald")
  });
  
  it("should return length as 96", () => {
      const result = calcHouseMaterials("gerald", 8, 8, true)
      expect(result.house.length).to.equal(96);
  });
  
  it("should return width as 96", () => {
      const result= calcHouseMaterials("gerald", 8, 8, true)
      expect(result.house.width).to.equal(96);
  });

  it("should return outsideWallArea as 36864", () => {
    const result= calcHouseMaterials("gerald", 8, 8, true)
    expect(result.house.outsideWallArea).to.equal(36864);
  });

  it("should return insideWallArea as 31684", () => {
    const result= calcHouseMaterials("gerald", 8, 8, true)
    expect(result.house.insideWallArea).to.equal(31684);
  });

  it("should return ceilingArea as 31684", () => {
    const result= calcHouseMaterials("gerald", 8, 8, true)
    expect(result.house.ceilingArea).to.equal(9216);
  });

  
}); 

// Tests for getHouseMaterials
// No input is currently being saved
// describe("getHouseMaterials", () => {
//   it("should return House Name", () => {
//       const result = getHouseMaterials("gerald");
//       expect(result.name).to.equal("gerald");
//   });
// }); 


// calcWallLumber testing
describe ("calcWallLumber", () => {
  it("hopefully returns plates as 3", () => {
    const result = calcWallLumber(96);
    expect(result.plates).to.equal(3);
  });

  it("hopefully returns studs as 7", () => {
    const result = calcWallLumber(96);
    expect(result.studs).to.equal(7);
  });

  it("hopefully returns 0 studs", () => {
    const result = calcWallLumber(96);
    expect(result.posts).to.equal(0);
  });
  
});

// Tests for calcDrywall
describe("calcDrywall", () => {
  it("should amount to the total sheets needed for a 8x8 house", () => {
      const result = calcDrywall(96,96);
      expect(result).to.equal(10);
  });
  
  it("should amount to the total drywallsheet needed for a 16x24 house", () => {
    const result = calcDrywall(192,288);
    expect(result).to.equal(31);
  });
});

//Tests for calcPlywood
describe("calcDrywall", () => {
  // 192 / 48 = 4 * 2 = 8
  // 288 / 48 = 6 * 2 = 12
  //                    20
  it("should amount to the total plywood sheets needed for a 16x24 house", () => {
      const result = calcPlywood(192,288);
      expect(result).to.equal(20);
  });
});

// Tests for calcWaste
describe("calcWaste", () => {
  it("should return the waste required for 2x4s", () => {
      const result = calcWaste(28);
      expect(result).to.equal(3);
  });
  it("should return the waste required for 4x4s", () => {
    const result = calcWaste(4);
    expect(result).to.equal(1);
  });
  it("should return the waste required for plywood", () => {
    const result = calcWaste(calcPlywood(96,96));
    expect(result).to.equal(1);
  });
  it("should return the waste required for drywall", () => {
    const result = calcWaste(calcDrywall(96,96));
    expect(result).to.equal(1);
  });
  
});

describe("calcPurchase", () => {
  it("should return the purchase required for 2x4s", () => {
      const result = calcPurchase(28);
      expect(result).to.equal(31);
  });
  it("should return the purchase required for 4x4s", () => {
    const result = calcPurchase(4);
    expect(result).to.equal(5);
  });
  it("should return the purchase required for plywood", () => {
    const result = calcPurchase(calcPlywood(96,96));
    expect(result).to.equal(9);
  });
  it("should return the purchase required for drywall", () => {
    const result = calcPurchase(calcDrywall(96,96));
    expect(result).to.equal(11);
  });
  
});