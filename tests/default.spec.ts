import { expect } from 'chai'
import {calcHouseMaterials, getHouseMaterials, calcWallLumber, calcDrywall} from '../src/calculator/index'
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
  
  // ceil area = 48,772
  // dwLengthAmount = 12
  // dwWidthAmount = 8
  // dwArea = 4,608
  // ceilingSheets = 11
  it("should amount to the total sheet needed for a 16x24 house", () => {
    const result = calcDrywall(192,288);
    expect(result).to.equal(31);
  });
});
