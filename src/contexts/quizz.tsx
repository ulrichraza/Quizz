'use client';
import { permuteArray, stringifySearchParams } from '@/utils/Utils';
import { useCounter } from '@uidotdev/usehooks';
import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
  useRef,
} from 'react';
import { useQuery } from 'react-query';

export type responseTypes = {
  text: string;
  id: number;
  isCorrect?: boolean;
};

export type clubsType = {
  club_id: number;
  club_name: string;
  logo: string;
};

export type competitionType = {
  competition_id: number;
  competition_name: string;
  logo: string;
};
interface quizzContextType {
  currentQuizz: QuizzProps;
  increment: () => void;
  decrement: () => void;
  isLoading: boolean;
  timer?: number;
  level: number;
  type?: any;
  verifyResponse: (id: number) => void;
  checkResponse?: (id: number) => number;
  changeClubId: (id: number) => void;
  clubId: number;
  competitionID: number;
  changeCompetitionID: (id: number) => void;
}

const QuizzContext = createContext<quizzContextType | null>(null);

export const useQuizz = () => {
  const currentQuizzContext = useContext(QuizzContext);

  if (!currentQuizzContext) {
    throw new Error(
      'useQuizz has to be used within <CurrentUserContext.Provider>',
    );
  }

  return currentQuizzContext;
};

interface QuizzProps {
  quizz_response_choice: responseTypes[];
  quizz_description: any;
  quizz_id: number;
  quizz_response: number;
  quizz_question: string;
  score: number;
  quizz_type: string;
  quizz_ressource_name: string;
  competition_id: number;
}
export default function QuizzProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [currentQuizz, setCurrentQuizz] = useState<QuizzProps>(
    {} as QuizzProps,
  );
  const [level, { increment, decrement }] = useCounter(1);
  const lastLevelRef = useRef(0);
  const lastClubRef = useRef(0);
  const lastCompRef = useRef(0);
  const [clubId, setClubId] = useState<number>(0);
  const [competitionID, setCompetitionID] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const { data, isLoading, isSuccess } = useQuery(
    ['get-quizz', level, clubId, competitionID],
    async ({ queryKey }) => {
      /* eslint-disable */
      const [_, level, clubId, competitionID] = queryKey;
      const params = {
        question_type:'who_is_this_player_club_by_transfert,who_is_this_stade_by_game,who_is_this_player_by_birth_place,who_is_this_player_by_nationality,who_is_this_player_by_records,who_is_this_club,who_is_this_club_type,who_is_this_player,who_is_this_player_by_palmares,who_is_this_player_by_photos,who_is_this_player_by_teammate,who_is_this_club_by_logo',
        limit: 1,
        is_web: true,
        page: level,
        // times: Date.now(),
        club_id: clubId,
        competition_id: competitionID
      };
      const beginTimer = Date.now()
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_HOST}/api/quizz?${stringifySearchParams({ params })}`,
        {
          cache: 'no-cache',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        },
      ).then((result) => result.json());
      setTimer(Date.now() - beginTimer)
      const random = Math.floor(Math.random() * 12);
      if (data.length > 0) {
        const permutationResponse = permuteArray(data[0].quizz_response_choice);
        return {
          ...data[0],
          quizz_response_choice: permutationResponse[random],
        };
        /* eslint-enable */
      }
    },
    {
      staleTime: 1000 * 5,
      cacheTime: 1000 * 60 * 10,
    },
  );

  const changeClubId = (id: number) => {
    setClubId(id);
  };

  const changeCompetitionID = (id: number) => {
    setCompetitionID(id);
  };

  useEffect(() => {
    if (
      isSuccess &&
      (lastLevelRef.current != level ||
        lastClubRef.current != clubId ||
        lastCompRef.current != competitionID)
    ) {
      lastLevelRef.current = level;
      lastClubRef.current = clubId;
      lastCompRef.current = competitionID;
      setCurrentQuizz(data);
    }
  }, [isSuccess, data, level, clubId, competitionID]);

  const checkResponse = useCallback(() => {
    return currentQuizz.quizz_response;
  }, [currentQuizz]);

  const verifyResponse = useCallback(
    (id: number) => {
      const response = checkResponse();
      /*eslint-disable*/
      if (currentQuizz) {
        setCurrentQuizz({
          ...currentQuizz,
          quizz_response_choice: currentQuizz.quizz_response_choice.map(
            (item: responseTypes) =>
              response == item.id && item.id == id
                ? { ...item, isCorrect: true }
                : response != item.id && item.id == id
                  ? { ...item, isCorrect: false }
                  : item,
          ),
        });
        /*eslint-enable*/
      }
    },
    [currentQuizz, checkResponse],
  );
  return (
    <QuizzContext.Provider
      value={{
        isLoading,
        currentQuizz,
        verifyResponse,
        increment,
        decrement,
        level,
        timer,
        changeClubId,
        clubId,
        competitionID,
        changeCompetitionID,
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
}
