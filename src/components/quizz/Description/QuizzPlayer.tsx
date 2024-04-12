import NextImage from 'next/image';
import { formatPhotosUrl } from '@/utils/Utils';
import { playerFallback } from '@/utils/fallbackImage';
import { useQuizz } from '@/contexts/quizz';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Image } from '@nextui-org/react';
export interface PlayerTypes {
  text: string;
  club: string;
  logo: string;
  level: string;
  club_id: string;
}
export default function QuizzPlayer() {
  const { currentQuizz } = useQuizz();
  return (
    <div className="w-full px-48 relative h-full mb-5 flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
        {currentQuizz.quizz_description &&
          currentQuizz.quizz_description?.data.map(
            (ele: PlayerTypes, i: number) => {
              const dateArray = ele.text.match(/[0-9]{4}/g);
              return (
                <div
                  key={`player-${ele?.club_id}-${i}`}
                  className="text-center items-center flex flex-col"
                >
                  <Image
                    as={NextImage}
                    disableSkeleton={false}
                    width={50}
                    height={50}
                    alt={`${ele?.club}`}
                    classNames={{ wrapper: 'bg-center bg-contain' }}
                    src={`${formatPhotosUrl(ele?.logo)}`}
                    fallbackSrc={formatPhotosUrl(playerFallback)}
                  />
                  <div className="my-5 flex flex-col">
                    <small className="text-[12px]">{ele.club}</small>
                    <small className="text-xs md:text-sm">
                      {dateArray?.[0]}
                      {' - '}
                      {(dateArray?.[1] && dateArray?.[1]) || 'maintenant'}
                    </small>
                  </div>
                </div>
              );
            },
          )}
      </div>
      <h2 className="text-lg my-5">Qui est ce Joueur ? </h2>
    </div>
  );
}
