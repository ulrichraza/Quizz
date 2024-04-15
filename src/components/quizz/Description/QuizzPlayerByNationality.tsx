import { useQuizz } from '@/contexts/quizz';
// import { formatPhotosUrl } from '@/utils/Utils';
import { playerFallback } from '@/utils/fallbackImage';
import { formatPhotosUrl, getSeasonsPicUrl } from '@/utils/Utils';
import { cupFallback } from '@/utils/fallbackImage';
import NextImage from 'next/image';
import { Image } from '@nextui-org/react';

export interface NationalityType {
  id: number;
  name: string;
  first_name: string;
  birth_date: string;
  text: string;
  death_date: string | null;
  photos: string;
}

export default function QuizzPlayerNationality() {
  const { currentQuizz } = useQuizz();
  return (
    <div className="flex flex-col   w-full justify-center items-center mb-5">
      <div className="w-2/3 flex flex-wrap justify-center gap-4">
        {currentQuizz.quizz_description && (
          <div
            key={`player-nationality-${currentQuizz.quizz_description?.data?.id}`}
            className="text-center"
          >
            <Image
              alt={`${currentQuizz.quizz_description?.data?.name}`}
              width={200}
              height={200}
              className="object-contain"
              src={`${formatPhotosUrl(currentQuizz.quizz_description?.data?.photos)}`}
              as={NextImage}
              fallbackSrc={formatPhotosUrl(playerFallback)}
            />
          </div>
        )}
      </div>
      <h2 className="text-lg my-5">{`Pour quelle équipe nationale ${currentQuizz?.quizz_description?.data?.text} a joué ?`}</h2>
    </div>
  );
}
