import { expect } from 'chai'
import {calcHouseMaterials, getHouseMaterials} from '../src/calculator/index'

import "mocha";

// describe("calcHouseMaterials Function", () => {
//   it("should return House Materials", () => {
//       const result = calcHouseMaterials("test", 8, 8, false);
//       expect(result.name).to.equal("test");
//       expect(result.house.length).to.equal(8);
//       expect(result.house.width).to.equal(8);
//   });
// });

// describe ("calcHouseMaterials"), () => {
//   it("Should return the name gerald"), () => {
//     const result = calcHouseMaterials("gerald", 8, 8, false);
//     expect(result.name).to.equal("gerald");
 
//   });
// });

describe("Creates a house object as defined in IHouse", () => {
  it("should return customer name gerald", () => {
      const result= calcHouseMaterials("gerald", 8, 8, false)
      expect(result.name).to.equal("gerald")
  });
  
  it("should return length as 8", () => {
      const result = calcHouseMaterials("gerald", 8, 8, false)
      expect(result.house.length).to.equal(8);
  });
  
  it("should return width as 8", () => {
      const result= calcHouseMaterials("gerald", 8, 8, false)
      expect(result.house.width).to.equal(8);
  });
}); 

describe("getHouseMaterials Function", () => {
  it("should return House Name", () => {
      const result = getHouseMaterials("gerald");
      expect(result.name).to.equal("gerald");
  });
}); 