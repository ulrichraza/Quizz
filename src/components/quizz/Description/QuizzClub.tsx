import { useQuizz } from '@/contexts/quizz';
import { formatPhotosUrl } from '@/utils/Utils';
import { clubFallback } from '@/utils/fallbackImage';
import { FaQuestion } from 'react-icons/fa';
import NextImage from '@/components/Image/Image';
import { ImMinus } from 'react-icons/im';
import { Image } from '@nextui-org/react';
export interface ClubMatchType {
  text: string;
  date: string;
  goals_against: string;
  goals_for: string;
  shootout_against: null;
  shootout_for: null;
  vs: string;
  logo_comp: string;
  scoring: Scoring[];
  scoring_vs: Scoring[];
}

export interface Scoring {
  scoring_minute: string;
  player_id: string;
  first_name: string;
  last_name: string;
}

export default function QuizzClub() {
  const { currentQuizz } = useQuizz();
  return (
    <div className="flex flex-col  w-full justify-center items-center mb-5">
      {currentQuizz.quizz_description &&
        currentQuizz.quizz_description?.data.map(
          (ele: ClubMatchType, i: number) => {
            return (
              <div
                key={`club-${i}`}
                className="w-2/3 flex flex-col items-center justify-center gap-4"
              >
                <Image
                  as={NextImage}
                  disableSkeleton={false}
                  width={100}
                  height={100}
                  alt={`${ele?.text}`}
                  classNames={{ wrapper: 'bg-center bg-contain' }}
                  src={`${formatPhotosUrl(ele?.logo_comp)}`}
                  fallbackSrc={formatPhotosUrl(clubFallback)}
                />
                <h3 className="text-center w-full">{ele.text}</h3>
                <span className="text-gray-500">{ele.date}</span>
                <div className="grid grid-cols-3 gap-2 w-2/3 p-10">
                  <div className="flex justify-start flex-col gap-3 items-center">
                    <FaQuestion className="text-purple text-lg mt-2" />
                    <ul className="mt-4">
                      {ele.scoring.map((scoring: Scoring, i: number) => {
                        return (
                          <li
                            key={`scoring-${i}`}
                            className="text-sm text-gray-500"
                          >{`${scoring.first_name} ${scoring.last_name} ${scoring.scoring_minute}'`}</li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-purple text-2xl">
                      {ele.goals_for}
                    </span>
                    <div className="w-full flex justify-center flex-col items-center">
                      <ImMinus size={'25px'} />
                      {ele.shootout_against || ele.shootout_for ? (
                        <span className="text-sm text-gray-500">{`( ${ele.shootout_for} - ${ele.shootout_against} )`}</span>
                      ) : null}
                    </div>

                    <span className="font-bold text-purple text-2xl">
                      {ele.goals_against}
                    </span>
                  </div>
                  <div className="flex justify-start items-center flex-col gap-3">
                    <span className="text-lg font-bold">{ele.vs}</span>
                    <ul className="mt-4">
                      {ele.scoring_vs.map((scoring: Scoring, i: number) => {
                        return (
                          <li
                            key={`scoring-${i}`}
                            className="text-sm text-gray-500"
                          >{`${scoring.first_name} ${scoring.last_name} ${scoring.scoring_minute}'`}</li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          },
        )}
    </div>
  );
}
