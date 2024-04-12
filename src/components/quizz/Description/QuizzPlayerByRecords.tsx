import { useQuizz } from '@/contexts/quizz';
import { formatPhotosUrl, getSeasonsPicUrl } from '@/utils/Utils';
import { cupFallback } from '@/utils/fallbackImage';
import NextImage from 'next/image';
import { Image } from '@nextui-org/react';

export interface PlayerRecordsTypes {
  data: Data;
  indices: Indices;
}

export interface Data {
  player_id: number;
  record: Record;
}

export interface Record {
  record_id: string;
  date: number;
  value: string;
  competition: Competition;
  club_variation: ClubVariation;
  record_title: string;
}

export interface Competition {
  competition_id: string;
  competition_name: string;
  competition_level_id: string;
  main_competition: string;
  country_id: string;
  stillactive: string;
}

export interface ClubVariation {
  club_variation_id: string;
  club_id: string;
  club_variant_name: string;
  club_short_variant_name: string;
  club_level_id: string;
}

export interface Indices {
  nationality: string;
  current_club: string;
  player_photo: string;
  palmares: Palmare[];
}

export interface Palmare {
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

export default function QuizzPlayerByRecords() {
  const { currentQuizz } = useQuizz();
  console.log(currentQuizz.quizz_description?.data.record);
  return (
    <div className="flex flex-col   w-full justify-center items-center mb-5">
      <div className="w-2/3 flex flex-wrap justify-center gap-4">
        {currentQuizz.quizz_description && (
          <div
            key={`player-photos-${currentQuizz.quizz_description?.data?.record?.competition.competition_id}`}
            className="text-center"
          >
            <Image
              alt={`${currentQuizz.quizz_description?.data?.record?.competition.competition_name}`}
              width={200}
              height={200}
              classNames={{ wrapper: 'bg-center bg-contain' }}
              src={`${formatPhotosUrl(
                getSeasonsPicUrl(
                  currentQuizz.quizz_description?.data?.record?.competition
                    .competition_id,
                ),
              )}`}
              as={NextImage}
              fallbackSrc={formatPhotosUrl(cupFallback)}
            />
          </div>
        )}
      </div>
      <h2 className="text-lg my-5">{`Qui a battu le record du ${currentQuizz?.quizz_description?.data?.record?.record_title} en ${currentQuizz?.quizz_description?.data?.record?.competition?.competition_name} pendant l'année ${currentQuizz?.quizz_description?.data?.record?.date} `}</h2>
    </div>
  );
}
