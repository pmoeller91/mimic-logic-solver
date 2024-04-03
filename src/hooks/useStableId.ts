import { useMemo } from 'use-memo-one';

function randomLetters(num: number) {
  const letterArr = new Array(num);
  letterArr.fill('');
  return letterArr
    .map(() => Math.floor(Math.random() * 37).toString(36))
    .join('');
}

const useStableId = (idLength = 6) => {
  return useMemo(() => randomLetters(idLength), [idLength]);
};

export { useStableId };
