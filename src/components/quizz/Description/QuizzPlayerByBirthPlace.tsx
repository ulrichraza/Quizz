import { useQuizz } from '@/contexts/quizz';
import { playerFallback } from '@/utils/fallbackImage';
import { formatPhotosUrl } from '@/utils/Utils';
import NextImage from 'next/image';
import { Image } from '@nextui-org/react';

export interface BirthPlaceType {
  id: number;
  name: string;
  first_name: string;
  birth_date: string;
  text: string;
  death_date: string | null;
  photos: string;
}

export default function QuizzPlayerBirthPlace() {
  const { currentQuizz } = useQuizz();
  return (
    <div className="flex flex-col   w-full justify-center items-center mb-5">
      <div className="w-2/3 flex flex-wrap justify-center gap-4">
        {currentQuizz.quizz_description && (
          <div
            key={`player-birth-place-${currentQuizz.quizz_description?.data?.id}`}
            className="text-center"
          >
            <Image
              alt={`${currentQuizz.quizz_description?.data?.name}`}
              width={200}
              height={200}
              className="object-contain"
              src={`${currentQuizz.quizz_description?.data?.photos}`}
              // src={`${formatPhotosUrl(currentQuizz.quizz_description?.data?.photos)}`}
              as={NextImage}
              fallbackSrc={formatPhotosUrl(playerFallback)}
            />
          </div>
        )}
      </div>
      <h2 className="text-lg my-5">{`De quelle ville est originaire ${currentQuizz?.quizz_description?.data?.text} ?`}</h2>
    </div>
  );
}
