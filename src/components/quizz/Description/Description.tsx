import { useQuizz } from '@/contexts/quizz';
import QuizzPlayerTeammate from './QuizzPlayerTeammate';
import QuizzPlayer from './QuizzPlayer';
import QuizzPlayerPhotos from './QuizzPlayerPhoto';
import QuizzPlayerPalmares from './QuizzPlayerPalmares';
import QuizzClub from './QuizzClub';
import QuizzClubByLogo from './QuizzClubByLogo';
import QuizzClubPalmares from './QuizzClubPalmares';
import QuizzClubType from './QuizzClubType';
import QuizzPlayerByRecords from './QuizzPlayerByRecords';
/* eslint-disable */
const QuestionDescrition: any = {
  who_is_this_player_by_teammate: <QuizzPlayerTeammate />,
  who_is_this_player: <QuizzPlayer />,
  who_is_this_player_by_photos: <QuizzPlayerPhotos />,
  who_is_this_player_by_palmares: <QuizzPlayerPalmares />,
  who_is_this_club: <QuizzClub />,
  who_is_this_club_by_logo: <QuizzClubByLogo />,
  who_is_this_club_by_palmares: <QuizzClubPalmares />,
  who_is_this_club_type: <QuizzClubType />,
  who_is_this_player_by_records: <QuizzPlayerByRecords />,
};

/* eslint-enable */

export function DescriptionSqueleton() {
  return (
    <div className="flex w-full justify-center items-start h-96 mt-5">
      <div role="status" className="max-w-lg animate-pulse">
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-4"></div>
        <div className="h-44 bg-gray-200 rounded-sm dark:bg-gray-700  w-full mb-2.5"></div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default function Description() {
  const { currentQuizz, isLoading } = useQuizz();
  if (
    currentQuizz?.quizz_question &&
    QuestionDescrition[
      currentQuizz?.quizz_question as keyof typeof QuestionDescrition
    ] == undefined
  ) {
    return (
      <div className="w-full flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold ">
          Ce type de quizz est en cours de developpement
        </h1>
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white w-2/3 text-center mt-5">
          <p className="text-lg">{`${currentQuizz.quizz_question}`}</p>
        </blockquote>
      </div>
    );
  }
  return (
    (isLoading && <DescriptionSqueleton />) ||
    (currentQuizz &&
      QuestionDescrition[
        currentQuizz?.quizz_question as keyof typeof QuestionDescrition
      ])
  );
}
