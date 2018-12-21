import { mapValue } from "../util";

export const scale = {
  "f-headline": 6,
  "f-subheadline": 5,
  f1: 3,
  f2: 2.25,
  f3: 1.5,
  f4: 1.25,
  f5: 1,
  f6: 0.875,
  f7: 0.75,
  f8: 0.65625,
  f9: 0.5703125,
  f10: 0.486328125
};

export default mapValue(scale, val => ({ fontSize: val }));
