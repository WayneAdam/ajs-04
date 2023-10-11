import calculateCashback from '../cashback';

test('cashback at sum: 500', () => {
  const result = calculateCashback(500);
  expect(result).toBe(0);
});

/** Пример формы кода разбитой на части */
// const dataList = [
//   ['gold', 100000, 5000],
//   ['silver', 10000, 200],
//   ['regular', 1000, 10],
//   ['no', 500, 0],
// ];

// const handler = test.each(dataList);

// /**
//  * %s - означает вставку в качестве строки первого параметра (т.е. 'gold' или 'silver' и т.д.)
//  * %i - в качестве целого числа (integer) вставляет второй
//  параметр (т.е. 100000 или 10000 и т.д.)
//  *  */
// handler('testing cashback function with %s status and %i amount', (status, amount, expected) => {
//   const result = calculateCashback(amount);
//   expect(result).toBe(expected);
// });

/** Пример другой формы кода, который встречается чаще */
test.each([
  ['gold', 100000, 5000],
  ['silver', 10000, 200],
  ['regular', 1000, 10],
  ['no', 500, 0],
])('testing cashback function with %s status and %i amount', (_, amount, expected) => { // если не используем аргумент (status) можно именовать его как: "_" (нижнее подчеркивание), чтобы это обозначить
  const result = calculateCashback(amount);
  expect(result).toBe(expected);
});
