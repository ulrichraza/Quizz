'use client';
import Button, { QuizzButton } from '@/components/Button/Button';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Button as NextUiButton } from '@nextui-org/react';
import { responseTypes, useQuizz } from '@/contexts/quizz';
import { useEffect, useState } from 'react';
const ResponseBlockSqueletton = () => {
  const myArray: string[] = ['1', '2', '3', '4'];
  return (
    <>
      {' '}
      {myArray.map((element: string) => {
        return (
          <Button
            key={`squeleton-${element}`}
            className="animate-pulse"
          ></Button>
        );
      })}
    </>
  );
};
export default function ResponseBlock() {
  const [responses, setResponseList] = useState<responseTypes[]>(
    [] as responseTypes[],
  );
  const {
    level,
    currentQuizz,
    increment,
    decrement,
    verifyResponse,
    isLoading,
  } = useQuizz();

  useEffect(() => {
    const parseResponse = () => {
      const isResponseFound = currentQuizz?.quizz_response_choice?.find(
        (response) => response.isCorrect === true,
      );
      if (isResponseFound?.isCorrect) {
        setResponseList(
          currentQuizz?.quizz_response_choice?.map((response) => {
            return {
              ...response,
              isCorrect: response?.isCorrect == true ? true : false,
            };
          }),
        );
      } else {
        setResponseList(currentQuizz?.quizz_response_choice);
      }
    };
    parseResponse();
  }, [setResponseList, currentQuizz]);

  return (
    <div className="grid-cols-2 grid gap-4 px-4 md:px-20 lg:px-36 ">
      {isLoading ? (
        <ResponseBlockSqueletton />
      ) : (
        responses &&
        responses.map((list: responseTypes, index: number) => {
          return (
            <QuizzButton
              onClick={() => {
                verifyResponse(list.id);
              }}
              key={index}
              isCorrect={list.isCorrect}
            >
              {list.text}
            </QuizzButton>
          );
        })
      )}
      <div className="col-span-2 flex flex-row gap-2 mt-5 justify-between">
        <NextUiButton
          className="flex items-center gap-3 disabled:bg-slate-300"
          onClick={decrement}
          color="primary"
          disabled={level <= 1}
        >
          <FaArrowLeft />
          Précedent
        </NextUiButton>
        <NextUiButton
          color="primary"
          className="flex items-center gap-3"
          onClick={increment}
        >
          Suivant
          <FaArrowRight />
        </NextUiButton>
      </div>
    </div>
  );
}
