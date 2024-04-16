import { useQuizz } from '@/contexts/quizz';
import { playerFallback } from '@/utils/fallbackImage';
import { formatPhotosUrl, getSeasonsPicUrl } from '@/utils/Utils';
import { cupFallback } from '@/utils/fallbackImage';
import NextImage from 'next/image';
import { Image } from '@nextui-org/react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export interface PlayerClubByTransfert {
  data: Data;
  indices: Indices;
}

export interface Data {
  player_id: number;
  transfert: Transfert;
}

export interface Transfert {
  arrival_date: string;
  leaving_date: string;
  transfert: number;
}

export interface Indices {
  nationality: string;
  current_club: string;
  player_photo: string;
  palmares: Palmares[];
}

export interface Palmares {
  player_id: string;
  palmares_date: string;
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

export default function QuizzPlayerClubByTransfert() {
  const { currentQuizz } = useQuizz();
  const leavingDate = currentQuizz?.quizz_description?.data?.transfert?.leaving_date;
  const formattedDate = format(new Date(leavingDate), 'dd MMMM yyyy', { locale: fr });
  console.log(currentQuizz.quizz_description?.data.transfert.transfert);
  return (
    <div className="flex flex-col   w-full justify-center items-center mb-5">
      <div className="w-2/3 flex flex-wrap justify-center gap-4">
        {currentQuizz.quizz_description && (
          <div
            key={`player-photos-${currentQuizz.quizz_description?.data?.player_id}`}
            className="text-center"
          >
            <Image
              alt={`${currentQuizz.quizz_description?.data?.text}`}
              width={200}
              height={200}
              classNames={{ wrapper: 'bg-center bg-contain' }}
              src={`${currentQuizz.quizz_description?.data?.photos}`}
              // src={`${formatPhotosUrl(
              //   getSeasonsPicUrl(
              //     currentQuizz.quizz_description?.data?.photos,
              //   ),
              // )}`}
              as={NextImage}
              fallbackSrc={formatPhotosUrl(cupFallback)}
            />
          </div>
        )}
      </div>
      <h2 className="text-lg my-5">{`Dans quel club a été transféré ${currentQuizz?.quizz_description?.data?.text} le ${formattedDate} ?`}</h2>
      {/* <h2 className="text-lg my-5">{`Dans quel club a été transféré ${currentQuizz?.quizz_description?.data?.text} le ${currentQuizz.quizz_description?.data?.transfert?.leaving_date} ? TEST`}</h2> */}
    </div>
  );
}
