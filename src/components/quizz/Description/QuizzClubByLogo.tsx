import { useQuizz } from '@/contexts/quizz';
import { formatPhotosUrl } from '@/utils/Utils';
import { clubFallback } from '@/utils/fallbackImage';
import NextImage from 'next/image';
import { Image } from '@nextui-org/react';

export interface ClubPhotoTypes {
  id: number;
  photos: string;
}
export default function QuizzClubByLogo() {
  const { currentQuizz } = useQuizz();
  return (
    <div className="flex flex-col   w-full justify-center items-center mb-5">
      <div className="w-2/3 flex flex-wrap justify-center gap-4">
        {currentQuizz.quizz_description &&
          currentQuizz.quizz_description?.data.map(
            (ele: ClubPhotoTypes, i: number) => {
              return (
                <div
                  key={`player-photos-${ele?.id}-${i}`}
                  className="text-center"
                >
                  <Image
                    alt={`${ele?.id}`}
                    width={200}
                    height={200}
                    classNames={{ wrapper: 'bg-center bg-contain' }}
                    className="object-contain blur-sm"
                    src={`${formatPhotosUrl(ele?.photos)}`}
                    as={NextImage}
                    fallbackSrc={formatPhotosUrl(clubFallback)}
                  />
                </div>
              );
            },
          )}
      </div>
      <h2 className="text-lg my-5">Quel est ce Club ? </h2>
    </div>
  );
}
