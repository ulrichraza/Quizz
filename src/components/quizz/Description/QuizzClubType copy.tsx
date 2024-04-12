import { useQuizz } from '@/contexts/quizz';
import { Avatar, Image } from '@nextui-org/react';
import NextImage from 'next/image';
import { formatPhotosUrl } from '@/utils/Utils';
import { playerFallback } from '@/utils/fallbackImage';
import { FaQuestionCircle } from 'react-icons/fa';

const makePlayerPhotos = (playerId: number | undefined) => {
  if (!playerId || playerId == 0) return playerFallback;
  const path = `/images/photos/players/a_${Math.floor(
    playerId / 1000,
  )}/${playerId}.jpg`;
  return path;
};

// const makeSeasonsPhotos = (seasonsID: number | undefined) => {
//   if (!seasonsID || seasonsID == 0) return playerFallback;
//   const path = `/images/photos/seasons/a_${Math.floor(
//     seasonsID / 1000,
//   )}/${seasonsID}.png`;
//   return path;
// };

const GoalKeeper = ({
  data,
  nationalTeam,
}: {
  data: PlayerLineup[];
  nationalTeam: number;
}) => {
  const gk = data?.find((item: PlayerLineup) => item?.position_id == '20');
  return (
    <div className="flex justify-center w-full items-center flex-col h-14">
      {gk?.show == 1 ? (
        <div className="flex flex-col items-center text-white">
          <span
            color="primary"
            className="mb-1 inline-flex items-center rounded-full bg-blue px-2 py-0 text-xs font-medium text-white-600 ring-1 ring-inset ring-gray-500/10"
          >{`${gk?.first_name} ${gk?.last_name}`}</span>

          <Avatar
            className="w-12 h-12 cursor-pointer"
            classNames={{ img: 'object-top' }}
            src={formatPhotosUrl(
              makePlayerPhotos(parseInt(gk?.player_id || '0')),
            )}
          />
        </div>
      ) : nationalTeam && nationalTeam == 1 ? (
        <FaQuestionCircle size={'48px'} color={'#243F85'} />
      ) : (
        <Avatar
          radius="full"
          className="w-12 h-12 cursor-pointer"
          src={gk?.country_flag}
          size="sm"
          title={gk?.nationality}
        />
      )}
    </div>
  );
};

const Libero = ({
  data,
  nationalTeam,
}: {
  data: PlayerLineup[];
  nationalTeam: number;
}) => {
  const l = data?.filter(
    (item: PlayerLineup) => ['8']?.includes(item.position_id || ''),
  );
  return (
    l?.length > 0 && (
      <div className="w-full h-14 flex flex-wrap flex-col">
        {l?.map((currentDC: PlayerLineup, index: number) => {
          return (
            <div
              key={index}
              className={`flex justify-center ${
                !currentDC && 'hidden'
              } items-center flex-col`}
            >
              {currentDC?.show == 1 ? (
                <div className="flex flex-col items-center text-white">
                  <span
                    color="primary"
                    className="mb-1 inline-flex items-center rounded-full bg-blue px-2 py-0 text-xs font-medium text-white-600 ring-1 ring-inset ring-gray-500/10"
                  >{`${currentDC?.first_name} ${currentDC?.last_name}`}</span>

                  <Avatar
                    className="w-12 h-12 cursor-pointer"
                    classNames={{ img: 'object-top' }}
                    src={formatPhotosUrl(
                      makePlayerPhotos(parseInt(currentDC?.player_id || '0')),
                    )}
                  />
                </div>
              ) : nationalTeam && nationalTeam == 1 ? (
                <FaQuestionCircle size={'48px'} color={'#243F85'} />
              ) : (
                <Avatar
                  radius="full"
                  className="w-12 h-12 cursor-pointer"
                  src={currentDC?.country_flag}
                  size="sm"
                  title={currentDC?.nationality}
                />
              )}
            </div>
          );
        })}
      </div>
    )
  );
};
const CentralDefense = ({
  data,
  nationalTeam,
}: {
  data: PlayerLineup[];
  nationalTeam: number;
}) => {
  const cd = data?.filter(
    (item: PlayerLineup) =>
      ['24', '23', '47', '51', '25']?.includes(item.position_id || ''),
  );
  return (
    cd?.length > 0 && (
      <div className="w-full h-14 flex flex-wrap flex-col">
        {cd?.map((currentDC: PlayerLineup, index: number) => {
          return (
            <div
              key={index}
              className={`flex justify-center ${
                !currentDC && 'hidden'
              } items-center flex-col`}
            >
              {currentDC?.show == 1 ? (
                <div className="flex flex-col items-center text-white">
                  <span
                    color="primary"
                    className="mb-1 inline-flex items-center rounded-full bg-blue px-2 py-0 text-xs font-medium text-white-600 ring-1 ring-inset ring-gray-500/10"
                  >{`${currentDC?.first_name} ${currentDC?.last_name}`}</span>

                  <Avatar
                    className="w-12 h-12 cursor-pointer"
                    classNames={{ img: 'object-top' }}
                    src={formatPhotosUrl(
                      makePlayerPhotos(parseInt(currentDC?.player_id || '0')),
                    )}
                  />
                </div>
              ) : nationalTeam && nationalTeam == 1 ? (
                <FaQuestionCircle size={'48px'} color={'#243F85'} />
              ) : (
                <Avatar
                  radius="full"
                  className="w-12 h-12 cursor-pointer"
                  src={currentDC?.country_flag}
                  size="sm"
                  title={currentDC?.nationality}
                />
              )}
            </div>
          );
        })}
      </div>
    )
  );
};

const LateralDefense = ({
  data,
  nationalTeam,
}: {
  data: PlayerLineup[];
  nationalTeam: number;
}) => {
  const ld = data?.filter(
    (item: PlayerLineup) =>
      ['26', '22', '27']?.includes(item.position_id || ''),
  );
  return (
    ld?.length > 0 && (
      <div className="w-full h-14 flex flex-wrap flex-col">
        {ld?.map((currentDC: PlayerLineup, index: number) => {
          return (
            <div
              key={index}
              className={`flex justify-center ${
                !currentDC && 'hidden'
              } items-center flex-col`}
            >
              {currentDC?.show == 1 ? (
                <div className="flex flex-col items-center text-white">
                  <span
                    color="primary"
                    className="mb-1 inline-flex items-center rounded-full bg-blue px-2 py-0 text-xs font-medium text-white-600 ring-1 ring-inset ring-gray-500/10"
                  >{`${currentDC?.first_name} ${currentDC?.last_name}`}</span>

                  <Avatar
                    className="w-12 h-12 cursor-pointer"
                    classNames={{ img: 'object-top' }}
                    src={formatPhotosUrl(
                      makePlayerPhotos(parseInt(currentDC?.player_id || '0')),
                    )}
                  />
                </div>
              ) : nationalTeam && nationalTeam == 1 ? (
                <FaQuestionCircle size={'48px'} color={'#243F85'} />
              ) : (
                <Avatar
                  radius="full"
                  className="w-12 h-12 cursor-pointer"
                  src={currentDC?.country_flag}
                  size="sm"
                  title={currentDC?.nationality}
                />
              )}
            </div>
          );
        })}
      </div>
    )
  );
};
const MiddleDefense = ({
  data,
  nationalTeam,
}: {
  data: PlayerLineup[];
  nationalTeam: number;
}) => {
  const md = data?.filter(
    (item: PlayerLineup) =>
      ['31', '28', '32']?.includes(item.position_id || ''),
  );
  return (
    md?.length > 0 && (
      <div className="w-full h-14 flex flex-wrap flex-col">
        {md?.map((currentDC: PlayerLineup, index: number) => {
          return (
            <div
              key={index}
              className={`flex justify-center ${
                !currentDC && 'hidden'
              }   items-center flex-col`}
            >
              {currentDC?.show == 1 ? (
                <div className="flex flex-col items-center text-white">
                  <span
                    color="primary"
                    className="mb-1 inline-flex items-center rounded-full bg-blue px-2 py-0 text-xs font-medium text-white-600 ring-1 ring-inset ring-gray-500/10"
                  >{`${currentDC?.first_name} ${currentDC?.last_name}`}</span>

                  <Avatar
                    className="w-12 h-12 cursor-pointer"
                    classNames={{ img: 'object-top' }}
                    src={formatPhotosUrl(
                      makePlayerPhotos(parseInt(currentDC?.player_id || '0')),
                    )}
                  />
                </div>
              ) : nationalTeam && nationalTeam == 1 ? (
                <FaQuestionCircle size={'48px'} color={'#243F85'} />
              ) : (
                <Avatar
                  radius="full"
                  className="w-12 h-12 cursor-pointer"
                  src={currentDC?.country_flag}
                  size="sm"
                  title={currentDC?.nationality}
                />
              )}
            </div>
          );
        })}
      </div>
    )
  );
};
const Middle = ({
  data,
  nationalTeam,
}: {
  data: PlayerLineup[];
  nationalTeam: number;
}) => {
  const m = data?.filter(
    (item: PlayerLineup) =>
      ['35', '33', '29', '48', '52', '30', '34', '36']?.includes(
        item.position_id || '',
      ),
  );
  return (
    m?.length > 0 && (
      <div className="w-full h-14 flex flex-wrap flex-col">
        {m?.map((currentDC: PlayerLineup, index: number) => {
          return (
            <div
              key={index}
              className={`flex justify-center ${
                !currentDC && 'hidden'
              }   items-center flex-col`}
            >
              {currentDC?.show == 1 ? (
                <div className="flex flex-col items-center text-white">
                  <span
                    color="primary"
                    className="mb-1 inline-flex items-center rounded-full bg-blue px-2 py-0 text-xs font-medium text-white-600 ring-1 ring-inset ring-gray-500/10"
                  >{`${currentDC?.first_name} ${currentDC?.last_name}`}</span>

                  <Avatar
                    className="w-12 h-12 cursor-pointer"
                    classNames={{ img: 'object-top' }}
                    src={formatPhotosUrl(
                      makePlayerPhotos(parseInt(currentDC?.player_id || '0')),
                    )}
                  />
                </div>
              ) : nationalTeam && nationalTeam == 1 ? (
                <FaQuestionCircle size={'48px'} color={'#243F85'} />
              ) : (
                <Avatar
                  radius="full"
                  className="w-12 h-12 cursor-pointer"
                  src={currentDC?.country_flag}
                  size="sm"
                  title={currentDC?.nationality}
                />
              )}
            </div>
          );
        })}
      </div>
    )
  );
};
const MiddleOffense = ({
  data,
  nationalTeam,
}: {
  data: PlayerLineup[];
  nationalTeam: number;
}) => {
  const mo = data?.filter(
    (item: PlayerLineup) =>
      ['39', '38', '49', '40', '37']?.includes(item.position_id || ''),
  );
  return (
    mo?.length > 0 && (
      <div className="w-full h-14 flex flex-wrap flex-col middle-offence">
        {mo?.map((currentDC: PlayerLineup, index: number) => {
          return (
            <div
              key={index}
              className={`flex justify-center ${
                !currentDC && 'hidden'
              }   items-center flex-col`}
            >
              {currentDC?.show == 1 ? (
                <div className="flex flex-col items-center text-white">
                  <span
                    color="primary"
                    className="mb-1 inline-flex items-center rounded-full bg-blue px-2 py-0 text-xs font-medium text-white-600 ring-1 ring-inset ring-gray-500/10"
                  >{`${currentDC?.first_name} ${currentDC?.last_name}`}</span>

                  <Avatar
                    className="w-12 h-12 cursor-pointer"
                    classNames={{ img: 'object-top' }}
                    src={formatPhotosUrl(
                      makePlayerPhotos(parseInt(currentDC?.player_id || '0')),
                    )}
                  />
                </div>
              ) : nationalTeam && nationalTeam == 1 ? (
                <FaQuestionCircle size={'48px'} color={'#243F85'} />
              ) : (
                <Avatar
                  radius="full"
                  className="w-12 h-12 cursor-pointer"
                  src={currentDC?.country_flag}
                  size="sm"
                  title={currentDC?.nationality}
                />
              )}
            </div>
          );
        })}
      </div>
    )
  );
};

const Winger = ({
  data,
  nationalTeam,
}: {
  data: PlayerLineup[];
  nationalTeam: number;
}) => {
  const w = data?.filter(
    (item: PlayerLineup) =>
      ['44', '43', '45']?.includes(item.position_id || ''),
  );
  return (
    w?.length > 0 && (
      <div className="w-full h-14 flex flex-wrap flex-col winger">
        {w?.map((currentDC: PlayerLineup, index: number) => {
          return (
            <div
              key={index}
              className={`flex justify-center ${
                !currentDC && 'hidden'
              }   items-center flex-col`}
            >
              {currentDC?.show == 1 ? (
                <div className="flex flex-col items-center text-white">
                  <span
                    color="primary"
                    className="mb-1 inline-flex items-center rounded-full bg-blue px-2 py-0 text-xs font-medium text-white-600 ring-1 ring-inset ring-gray-500/10"
                  >{`${currentDC?.first_name} ${currentDC?.last_name}`}</span>

                  <Avatar
                    className="w-12 h-12 cursor-pointer"
                    classNames={{ img: 'object-top' }}
                    src={formatPhotosUrl(
                      makePlayerPhotos(parseInt(currentDC?.player_id || '0')),
                    )}
                  />
                </div>
              ) : nationalTeam && nationalTeam == 1 ? (
                <FaQuestionCircle size={'48px'} color={'#243F85'} />
              ) : (
                <Avatar
                  radius="full"
                  className="w-12 h-12 cursor-pointer"
                  src={currentDC?.country_flag}
                  size="sm"
                  title={currentDC?.nationality}
                />
              )}
            </div>
          );
        })}
      </div>
    )
  );
};

const SupportAttacker = ({
  data,
  nationalTeam,
}: {
  data: PlayerLineup[];
  nationalTeam: number;
}) => {
  const sa = data?.filter(
    (item: PlayerLineup) => ['41']?.includes(item.position_id || ''),
  );
  return (
    sa?.length > 0 && (
      <div className="w-full h-14 flex flex-wrap flex-col">
        {sa?.map((currentDC: PlayerLineup, index: number) => {
          return (
            <div
              key={index}
              className={`flex justify-center ${
                !currentDC && 'hidden'
              }   items-center flex-col`}
            >
              {currentDC?.show == 1 ? (
                <div className="flex flex-col items-center text-white">
                  <span
                    color="primary"
                    className="mb-1 inline-flex items-center rounded-full bg-blue px-2 py-0 text-xs font-medium text-white-600 ring-1 ring-inset ring-gray-500/10"
                  >{`${currentDC?.first_name} ${currentDC?.last_name}`}</span>

                  <Avatar
                    className="w-12 h-12 cursor-pointer"
                    classNames={{ img: 'object-top' }}
                    src={formatPhotosUrl(
                      makePlayerPhotos(parseInt(currentDC?.player_id || '0')),
                    )}
                  />
                </div>
              ) : nationalTeam && nationalTeam == 1 ? (
                <FaQuestionCircle size={'48px'} color={'#243F85'} />
              ) : (
                <Avatar
                  radius="full"
                  className="w-12 h-12 cursor-pointer"
                  src={currentDC?.country_flag}
                  size="sm"
                  title={currentDC?.nationality}
                />
              )}
            </div>
          );
        })}
      </div>
    )
  );
};

const Attacker = ({
  data,
  nationalTeam,
}: {
  data: PlayerLineup[];
  nationalTeam: number;
}) => {
  const a = data?.filter(
    (item: PlayerLineup) =>
      ['53', '42', '50', '46']?.includes(item.position_id || ''),
  );
  return (
    a?.length > 0 && (
      <div className="w-full h-14  flex flex-wrap flex-col">
        {a?.map((currentDC: PlayerLineup, index: number) => {
          return (
            <div
              key={index}
              className={`flex justify-center  ${
                !currentDC && 'hidden'
              }   items-center flex-col`}
            >
              {currentDC?.show == 1 ? (
                <div className="flex flex-col items-center text-white">
                  <span
                    color="primary"
                    className="mb-1 inline-flex items-center rounded-full bg-blue px-2 py-0 text-xs font-medium text-white-600 ring-1 ring-inset ring-gray-500/10"
                  >{`${currentDC?.first_name} ${currentDC?.last_name}`}</span>

                  <Avatar
                    className="w-12 h-12 cursor-pointer"
                    classNames={{ img: 'object-top' }}
                    src={formatPhotosUrl(
                      makePlayerPhotos(parseInt(currentDC?.player_id || '0')),
                    )}
                  />
                </div>
              ) : nationalTeam && nationalTeam == 1 ? (
                <FaQuestionCircle size={'48px'} color={'#243F85'} />
              ) : (
                <Avatar
                  radius="full"
                  className="w-12 h-12 cursor-pointer"
                  src={currentDC?.country_flag}
                  size="sm"
                  title={currentDC?.nationality}
                />
              )}
            </div>
          );
        })}
      </div>
    )
  );
};
export const LineUp = ({
  data,
  nationalTeam,
}: {
  data: PlayerLineup[];
  nationalTeam: number;
}) => {
  console.log(data?.map((item: PlayerLineup) => item.position_id));
  return (
    <div className="absolute top-0 left-0 w-full h-full z-50 pt-3">
      <div className="flex flex-wrap w-full h-full gap-3">
        <GoalKeeper nationalTeam={nationalTeam} data={data} />
        <Libero nationalTeam={nationalTeam} data={data} />
        <CentralDefense nationalTeam={nationalTeam} data={data} />
        <LateralDefense nationalTeam={nationalTeam} data={data} />
        <MiddleDefense nationalTeam={nationalTeam} data={data} />
        <Middle nationalTeam={nationalTeam} data={data} />
        <MiddleOffense nationalTeam={nationalTeam} data={data} />
        <Winger nationalTeam={nationalTeam} data={data} />
        <SupportAttacker nationalTeam={nationalTeam} data={data} />
        <Attacker nationalTeam={nationalTeam} data={data} />
      </div>
    </div>
  );
};
export default function QuizzClubType() {
  const { currentQuizz } = useQuizz();
  const details = currentQuizz?.quizz_description?.data?.find(
    (data: PlayerLineup) => !!data.competition_season_name,
  );
  console.log(details, 'this is details');
  return (
    <div className="w-full px-4 md:px-48 relative max-h-[650px]  flex flex-col justify-center items-center gap-10 mb-10 ">
      <div className="relative">
        <Image
          as={NextImage}
          disableSkeleton={false}
          width={700}
          height={700}
          classNames={{ wrapper: 'bg-center bg-contain' }}
          alt={`soccer-field`}
          src={`${process.env.NEXT_PUBLIC_SITE_URL}/images/field.jpg`}
        />
        <LineUp
          data={currentQuizz?.quizz_description?.data}
          nationalTeam={currentQuizz?.quizz_description?.national_team}
        />
      </div>
      {details && (
        <div className="flex justify-center flex-col items-center gap-5 h-4">
          <h3>
            Quel est ce Club pendant la compétition{' '}
            <span className="font-bold">
              {details?.competition_season_name} {details?.season}
            </span>
          </h3>

          {/* <Image
            as={NextImage}
            disableSkeleton={false}
            width={100}
            height={100}
            classNames={{ wrapper: 'bg-center bg-contain' }}
            alt={`${details?.competition_season_name}`}
            src={`${formatPhotosUrl(
              makeSeasonsPhotos(details?.competition_season_id),
            )}`}
            fallbackSrc={formatPhotosUrl(cupFallback)}
          /> */}
        </div>
      )}
    </div>
  );
}

export type PlayerLineup = {
  player_id?: string;
  last_name?: string;
  first_name?: string;
  birth_date?: Date;
  birth_place?: string;
  height?: string;
  weight?: string;
  player_best_foot_id?: string;
  country_id?: string;
  country2_id?: string;
  non_public?: string;
  woman?: string;
  twitter?: string;
  player_club_id?: string;
  club_variation_id?: string;
  arrival_date?: Date;
  leaving_date?: IngDate;
  transfer?: string;
  player_contract?: string;
  manager_contract?: string;
  player_position_id?: string;
  position_id?: string;
  level_id?: string;
  mastering_date?: Date | IngDate;
  forgetting_date?: IngDate;
  club_id?: string;
  club_variant_name?: string;
  club_short_variant_name?: string;
  club_level_id?: string;
  club_name?: string;
  club_full_name?: string;
  club_short_name?: string;
  city_id?: string;
  national_team?: string;
  zip_code?: string;
  address?: string;
  fundation_date?: string;
  end_date?: string;
  website?: string;
  first_color?: string;
  second_color?: SecondColor;
  city_name?: string;
  zip?: string;
  locality?: string;
  longitude?: string;
  lattitude?: string;
  country_name?: string;
  nationality?: string;
  country_flag?: string;
  continent_id?: string;
  timezone?: string;
  active?: string;
  text?: string;
  club_regular_team_id?: string;
  competition_season_id?: string;
  tactical_position?: string;
  user_id?: string;
  valid?: string;
  competition_id?: string;
  competition_type_id?: string;
  venue?: string;
  competition_rules_id?: string;
  season?: Season;
  competition_season_name?: CompetitionSeasonName;
  starting_date?: Date;
  ending_date?: Date;
  priority?: string;
  num_division?: string;
  show?: number;
};

export enum CompetitionSeasonName {
  LigueDESChampions = 'Ligue des Champions',
}

export enum IngDate {
  The00000000 = '0000-00-00',
}

export enum Season {
  The20202021 = '2020/2021',
}

export enum SecondColor {
  Ff0000 = 'FF0000',
  Ffffff = 'FFFFFF',
  The000000 = '000000',
}
