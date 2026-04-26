const millisPerDay = 24 * 60 * 60 * 1000;

class Clock {
  now() {
    return new Date();
  }
}

export function daysUntilChristmas(clock = new Clock()) {
  const now = clock.now();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const christmasDay = new Date(now.getFullYear(), 12 - 1, 25);
  if (today.getTime() > christmasDay.getTime()) {
    christmasDay.setFullYear(now.getFullYear() + 1);
  }
  const diffMillis = christmasDay.getTime() - today.getTime();
  return Math.floor(diffMillis / millisPerDay);
}

// time is a global variable and as such difficult to test.
//
//
// export function daysUntilChristmas() {
//   const now = new Date();
//   const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//   const christmasDay = new Date(now.getFullYear(), 12 - 1, 25);
//   if (today.getTime() > christmasDay.getTime()) {
//     christmasDay.setFullYear(new Date().getFullYear() + 1);
//   }
//   const diffMillis = christmasDay.getTime() - today.getTime();
//   return Math.floor(diffMillis / millisPerDay);
// }
