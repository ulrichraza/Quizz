import { competitionType, useQuizz } from '@/contexts/quizz';
import { formatPhotosUrl } from '@/utils/Utils';
import { Autocomplete, AutocompleteItem, Avatar } from '@nextui-org/react';

import { useAsyncList } from '@react-stately/data';
import { Key, useState } from 'react';
export default function CompetitionForm() {
  const { changeCompetitionID, clubId } = useQuizz();
  const [competition, setCompetition] = useState<competitionType>(
    {} as competitionType,
  );
  const list = useAsyncList({
    async load({ filterText }) {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_HOST}/api/v1/quizz/competitions?s=${filterText}`,
        {
          cache: 'default',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        },
      ).then((result) => result.json());

      return {
        items: data as competitionType[],
      };
    },
  });

  const handleChangeKey = (value: Key) => {
    const selectCompetition = list?.items.find(
      (item: any) => item.competition_id == value,
    ) as competitionType;
    setCompetition(selectCompetition);
    changeCompetitionID(value as number);
  };

  return (
    <Autocomplete
      color={'secondary'}
      label="Competition"
      placeholder="Selectionner la competition"
      className="max-w-xs"
      isDisabled={clubId > 0 ? true : false}
      startContent={
        competition?.logo && (
          <Avatar
            alt={competition?.competition_name}
            className="w-4 h-4"
            src={formatPhotosUrl(competition?.logo)}
            size={'sm'}
          />
        )
      }
      inputValue={list.filterText}
      isLoading={list.isLoading}
      scrollShadowProps={{
        isEnabled: false,
      }}
      items={list.items as competitionType[]}
      onInputChange={list.setFilterText}
      onSelectionChange={handleChangeKey}
    >
      {(item: competitionType) => {
        return (
          <AutocompleteItem
            startContent={
              item?.logo && (
                <Avatar
                  size={'sm'}
                  alt={item.competition_name}
                  className="w-6 h-6"
                  src={formatPhotosUrl(item?.logo)}
                />
              )
            }
            key={item.competition_id}
            value={`${item.competition_id}`}
          >
            {item?.competition_name}
          </AutocompleteItem>
        );
      }}
    </Autocomplete>
  );
}
