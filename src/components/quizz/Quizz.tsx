'use client';
import { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import Drawer from '../Layout/Drawer';
import NextDynamic from 'next/dynamic';
import { useQuizz } from '@/contexts/quizz';

const SidebarWithLogo = NextDynamic(
  () => import('@/components/Layout/SideBar'),
  {
    ssr: false,
  },
);

const Description = NextDynamic(
  () => import('@/components/quizz/Description/Description'),
  {
    ssr: false,
  },
);

const ResponseBlock = NextDynamic(
  () => import('@/components/quizz/Response/ResponseBlocks'),
  {
    ssr: false,
  },
);

export default function Quizz() {
  const [open, setOpen] = useState(false);
  const { level, timer } = useQuizz();
  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };
  return (
    <div className="w-full flex flex-row">
      <AiOutlineMenuUnfold
        onClick={openDrawer}
        size={'2rem'}
        className="absolute top-10 left-4 cursor-pointer animate-bounce hover:animate-none transition-all"
      />
      <Drawer open={open} onClose={closeDrawer}>
        <SidebarWithLogo closeDrawer={closeDrawer} />
      </Drawer>
      <div className="flex-1">
        <div className="flex items-center flex-col min-h-screen justify-between p-16 max-w-screen-xl mx-auto">
          <div className="font-bold">{`Niveau ${level}`}</div>
          <div className="w-full h-full min-h-[550px] text-[14px] md:text-md flex items-center">
            <Description />
          </div>
          <div className="w-full">
            <ResponseBlock />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">{timer && timer / 1000}</div>
    </div>
  );
}
