import { useQuizz } from '@/contexts/quizz';
import { formatPhotosUrl } from '@/utils/Utils';
import { playerFallback } from '@/utils/fallbackImage';
import { Image } from '@nextui-org/react';

export interface TeammateType {
  player_id: string;
  first_name: string;
  last_name: string;
  country_id: string;
  nbp: string;
  photos: string;
  country_name: string;
  country_flag: string;
  age: number;
}

export default function QuizzPlayerTeammate() {
  const { currentQuizz } = useQuizz();
  return (
    <div className="w-full px-48 relative h-full mb-5 flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {currentQuizz.quizz_description?.data.map((ele: TeammateType) => {
          return (
            <div
              key={`teammate-${ele?.player_id}`}
              className="flex justify-center items-center flex-col"
            >
              <Image
                width={60}
                height={60}
                alt={`${ele?.last_name} ${ele.first_name}`}
                fallbackSrc={formatPhotosUrl(playerFallback)}
                className="object-contain cursor-pointer"
                title={`${ele?.last_name} ${ele.first_name}`}
                src={`${formatPhotosUrl(ele?.photos)}`}
              />
              <div className="flex justify-center items-center flex-col gap-1 mt-2">
                <div className="flex flex-row items-center gap-2">
                  <Image
                    width={25}
                    height={15}
                    alt={ele.country_name}
                    src={ele.country_flag}
                    className="cursor-pointer"
                    title={ele.country_name}
                    classNames={{
                      wrapper:
                        'bg-center bg-contain relative flex justify-center items-center',
                    }}
                  />
                  <h2>{`${`${ele?.first_name} ${ele?.last_name}`}`}</h2>
                </div>
                <small>{ele.age} ans</small>
                <small>
                  {ele.nbp} {parseInt(ele.nbp) > 1 ? `matchs` : 'match'}{' '}
                  {'ensemble'}
                </small>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="text-lg my-5">
        Qui est ce Joueur qui a joué avec le plus avec ces joueurs ?
      </h2>
    </div>
  );
}
