// 명시하여 타입 지정
let x: number = 12;

// 명시하지 않아도 타입 추론을 통해 타입 지정
let z = 12;

// 객체 또한 타입을 지정하지 않아도 내부 값에 따라 타입이 지정됨. person은 동일한 타입.
const personA: {
    name: string;
    born: {
      where: string;
      when: string;
    };
    died: {
      where: string;
      when: string;
    }
  } = {
    name: 'Sojourner Truth',
    born: {
      where: 'Swartekill, NY',
      when: 'c.1797',
    },
    died: {
      where: 'Battle Creek, MI',
      when: 'Nov. 26, 1883'
    }
  };

  const personB = {
    name: 'Sojourner Truth',
    born: {
      where: 'Swartekill, NY',
      when: 'c.1797',
    },
    died: {
      where: 'Battle Creek, MI',
      when: 'Nov. 26, 1883'
    }
  };

// 반환되는 함수의 값 또한 타입이 추론됨.
function square(nums: number[]) {
  return nums.map(x => x * x);
}
const squares = square([1, 2, 3, 4]); // Type is number[]

const axis1: string = 'x';  // Type is string
const axis2 = 'y';  // Type is "y"
