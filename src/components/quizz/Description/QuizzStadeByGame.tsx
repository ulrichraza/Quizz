import { useQuizz } from '@/contexts/quizz';
import { formatPhotosUrl } from '@/utils/Utils';
import { cupFallback, defaultStadium } from '@/utils/fallbackImage';
import NextImage from 'next/image';
import { Image } from '@nextui-org/react';

export interface StadeByGame {
  competition_season_id: number;
  competition_id: number;
  competition_type_id: number;
  venue: string;
  competition_rules_id: number;
  season: number;
  competition_season_name: string;
  starting_date: string;
  ending_date: string;
  priority: number;
  num_division: number;
}

export default function QuizzStadeByGame() {
  const { currentQuizz } = useQuizz();
  console.log(currentQuizz.quizz_description?.data.competition_season_id);
  return (
    <div className="flex flex-col   w-full justify-center items-center mb-5">
      <div className="w-2/3 flex flex-wrap justify-center gap-4">
        {currentQuizz.quizz_description && (
          <div
            key={`competition-${currentQuizz.quizz_description?.data?.competition_season_id}`}
            className="text-center"
          >
            <Image
              alt={`${currentQuizz.quizz_description?.data?.competition_season_name}`}
              width={200}
              height={200}
              className="object-contain"
              src={formatPhotosUrl(defaultStadium)}
              as={NextImage}
              fallbackSrc={formatPhotosUrl(cupFallback)}
            />
          </div>
        )}
      </div>
      <h2 className="text-lg my-5">{`Dans quel stade a eu lieu le match final de (la) ${currentQuizz?.quizz_description?.data?.competition_season_name} le/en ${currentQuizz?.quizz_description?.data?.season} ?`}</h2>
    </div>
  );
}
