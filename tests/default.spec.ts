import { expect } from 'chai'
import {calcHouseMaterials, getHouseMaterials, calcWallLumber} from '../src/calculator/index'

import "mocha";


// Changed calcHouseMaterials to multiply by 12 if flag is present

describe("calcHouseMaterials", () => {
  it("should return customer name gerald", () => {
      const result= calcHouseMaterials("gerald", 8, 8, false)
      expect(result.name).to.equal("gerald")
  });
  
  it("should return length as 96", () => {
      const result = calcHouseMaterials("gerald", 8, 8, false)
      expect(result.house.length).to.equal(8);
  });
  
  it("should return width as 96", () => {
      const result= calcHouseMaterials("gerald", 8, 8, false)
      expect(result.house.width).to.equal(8);
  });
}); 

describe("getHouseMaterials", () => {
  it("should return House Name", () => {
      const result = getHouseMaterials("gerald");
      expect(result.name).to.equal("gerald");
  });
}); 


// // Tests for calcWallLumber
// describe ("calcWallLumber"), () => {
//   it("Hopefully returns plates, studs, and posts", () => {
//     const result = calcWallLumber(0);
//     expect(result.plates).to.equal(0);
// });
// });

// // describe ("calcWallLumber"), () => {
// //   it("Hopefully returns plates, studs, and posts", () => {
// //     const result = calcWallLumber(0);
// //     expect(result.plates).to.equal(0)
// //   });
// // });
