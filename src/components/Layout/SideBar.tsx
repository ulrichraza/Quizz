import React from 'react';

import { FaFilter } from 'react-icons/fa';
import Image from 'next/image';
import { formatPhotosUrl } from '@/utils/Utils';
import { IoCloseSharp } from 'react-icons/io5';
import ClubForm from '../quizz/ClubForm';
import { Divider } from '@nextui-org/divider';
import { Spacer } from '@nextui-org/spacer';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import CompetitionForm from '../quizz/CompetitionForm';
const AccordeonIconTitle = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <span className="flex flex-row gap-3 items-center">
      {icon}
      {title}
    </span>
  );
};
export default function SidebarWithLogo({
  closeDrawer,
}: {
  closeDrawer: () => void;
}) {
  return (
    <div className="w-full">
      <IoCloseSharp
        onClick={closeDrawer}
        className="absolute right-2 top-5 cursor-pointer"
        size={'2rem'}
      />
      <div className="mb-2 flex items-center gap-4 p-4">
        <div className="relative">
          <Image
            src={formatPhotosUrl('/images/base/logo-fbdb-small.png')}
            alt="quizz-logo"
            width={32}
            height={55}
          />
        </div>
      </div>
      <Divider />
      <Spacer y={10} />
      <Accordion variant="light" className="w-full">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={<AccordeonIconTitle icon={<FaFilter />} title={'Filtre'} />}
        >
          <ClubForm />
          <Spacer y={5} />
          <CompetitionForm />
        </AccordionItem>
      </Accordion>
    </div>
  );
}
