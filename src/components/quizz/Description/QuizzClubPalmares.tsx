import NextImage from 'next/image';
import { formatPhotosUrl } from '@/utils/Utils';
import { cupFallback } from '@/utils/fallbackImage';
import { useQuizz } from '@/contexts/quizz';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Image } from '@nextui-org/react';
export interface ClubPalmaresType {
  country_flag: string;
  logo_comp: string;
  text: string;
}

export default function QuizzClubPalmares() {
  const { currentQuizz } = useQuizz();
  return (
    <div className="w-full px-48 relative h-full mb-5 flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {currentQuizz.quizz_description &&
          currentQuizz.quizz_description?.data.map(
            (ele: ClubPalmaresType, i: number) => {
              return (
                <div
                  key={`palmares-club-${i}`}
                  className="flex flex-col justify-center items-center"
                >
                  <Image
                    as={NextImage}
                    key={i}
                    disableSkeleton={false}
                    width={100}
                    height={100}
                    classNames={{ wrapper: 'bg-center bg-contain' }}
                    alt={`${ele?.text}`}
                    src={`${formatPhotosUrl(ele?.logo_comp)}`}
                    fallbackSrc={formatPhotosUrl(cupFallback)}
                  />
                  <div className="my-5 flex flex-col">
                    <div className="flex flex-row items-center justify-center gap-2 my-2  ">
                      <Image
                        as={NextImage}
                        key={i}
                        disableSkeleton={false}
                        width={50}
                        height={50}
                        title={ele.text}
                        alt={ele.text}
                        classNames={{
                          wrapper:
                            'g-center bg-contain relative flex justify-center items-center w-8',
                        }}
                        src={`${formatPhotosUrl(ele?.country_flag)}`}
                        fallbackSrc={formatPhotosUrl(cupFallback)}
                      />
                    </div>
                    <h2>{ele.text}</h2>
                  </div>
                </div>
              );
            },
          )}
      </div>
      <h2 className="text-lg my-5">
        Quel est ce club qui a obtenu ces palamres ?{' '}
      </h2>
    </div>
  );
}
