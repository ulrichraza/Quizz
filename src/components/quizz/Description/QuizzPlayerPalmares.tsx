import NextImage from 'next/image';
import { formatPhotosUrl } from '@/utils/Utils';
import { cupFallback } from '@/utils/fallbackImage';
import { useQuizz } from '@/contexts/quizz';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Image } from '@nextui-org/react';
export interface PlayerPalmaresType {
  player_id: string;
  palmares_date: Date;
  competition_season_id: string;
  club_variation_id: string;
  competition_id: string;
  competition_season_name: string;
  season: string;
  priority: string;
  level_value: string;
  club_level_id: string;
  competition_logo: string;
  country_flag: string;
}

export default function QuizzPlayerPalmares() {
  const { currentQuizz } = useQuizz();
  return (
    <div className="w-full px-48 relative h-full mb-5 flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {currentQuizz.quizz_description &&
          currentQuizz.quizz_description?.data.map(
            (ele: PlayerPalmaresType, i: number) => {
              return (
                <div
                  key={`teammate-${ele?.player_id}-${i}`}
                  className="flex flex-col justify-center items-center"
                >
                  <Image
                    as={NextImage}
                    key={i}
                    disableSkeleton={false}
                    width={80}
                    height={80}
                    alt={`${ele?.competition_season_name}`}
                    src={`${formatPhotosUrl(ele?.competition_logo)}`}
                    classNames={{
                      wrapper:
                        'bg-center bg-contain relative flex justify-center items-center',
                    }}
                    fallbackSrc={formatPhotosUrl(cupFallback)}
                  />
                  <div className="my-5 flex flex-col text-center">
                    <div className="flex flex-row items-center justify-center gap-2">
                      <Image
                        as={NextImage}
                        key={i}
                        disableSkeleton={false}
                        width={19}
                        height={19}
                        title={ele.competition_season_name}
                        alt={ele.competition_season_name}
                        classNames={{
                          wrapper:
                            'bg-center bg-contain relative flex justify-center items-center',
                        }}
                        src={`${formatPhotosUrl(ele?.country_flag)}`}
                        fallbackSrc={formatPhotosUrl(cupFallback)}
                      />
                      <h2>{ele.competition_season_name}</h2>
                    </div>
                    <small>{ele.season}</small>
                  </div>
                </div>
              );
            },
          )}
      </div>
      <h2 className="text-lg my-5">
        {'Qui est ce joueur qui a obtenu ces palmares ? '}
      </h2>
    </div>
  );
}
