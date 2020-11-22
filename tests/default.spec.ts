import { expect } from 'chai'
import {calcHouseMaterials, getHouseMaterials, calcWallLumber, calcDrywall, calcPlywood, calcMaterials} from '../src/calculator/index'
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

  // Not sure how to test for the boolean yet
  
}); 

// Tests for getHouseMaterials
// No input is currently being saved
describe("getHouseMaterials", () => {
  it("should return House Name", () => {
      const result = getHouseMaterials("gerald");
      expect(result.name).to.equal("gerald");
  });
}); 


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

//Tests for calcMaterials
describe("calcMaterials", () => {
  // it("hopefully returns materials for drywall", () => {
  //   const result = calcMaterials(96,96, calcWallLumber, calcDrywall, calcPlywood)
  //   expect(result.materials.drywall).to.equal(10);
  // });

  // it("hopefully returns materials for plywood", () => {
  //   const result = calcMaterials(96,96, calcWallLumber, calcDrywall, calcPlywood)
  //   expect(result.materials.plywood).to.equal(8);
  // });

  it("hopefully returnsmaterials for posts", () => {
    const result = calcMaterials(96,96, calcWallLumber, calcDrywall, calcPlywood)
    expect(result.materials.lumber["4x4"]).to.equal(4);
  });

  it("hopefully returns materials for boards", () => {
    const result = calcMaterials(96,96, calcWallLumber, calcDrywall, calcPlywood)
    expect(result.materials.lumber["2x4"]).to.equal(28);
  });

  it("hopefully returns area for outsideWallArea", () => {
    const result = calcMaterials(96,96, calcWallLumber, calcDrywall, calcPlywood)
    expect(result.house.outsideWallArea).to.equal(36864);
  });

  it("hopefully returns area for insideWallArea", () => {
    const result = calcMaterials(96,96, calcWallLumber, calcDrywall, calcPlywood)
    expect(result.house.insideWallArea).to.equal(36864);
  });

  it("hopefully returns area for ceilingArea", () => {
    const result = calcMaterials(96,96, calcWallLumber, calcDrywall, calcPlywood)
    expect(result.house.ceilingArea).to.equal(9216);
  });
});