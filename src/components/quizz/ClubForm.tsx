import { useQuizz } from '@/contexts/quizz';
import { clubsType } from '@/contexts/quizz';
import { formatPhotosUrl } from '@/utils/Utils';
import { Autocomplete, AutocompleteItem, Avatar } from '@nextui-org/react';

import { useAsyncList } from '@react-stately/data';
import { Key, useState } from 'react';
export default function ClubForm() {
  const { changeClubId, competitionID } = useQuizz();
  const [club, setClub] = useState<clubsType>({} as clubsType);
  const list = useAsyncList({
    async load({ filterText }) {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_HOST}/api/v1/quizz/clubs?s=${filterText}`,
        {
          cache: 'default',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        },
      ).then((result) => result.json());

      return {
        items: data as clubsType[],
      };
    },
  });

  const handleChangeKey = (value: Key) => {
    const selectClub = list?.items.find(
      (item: any) => item.club_id == value,
    ) as clubsType;
    setClub(selectClub);
    changeClubId(value as number);
  };

  return (
    <Autocomplete
      color={'secondary'}
      label="Club"
      isDisabled={competitionID > 0 ? true : false}
      placeholder="Selectionner un club"
      className="max-w-xs"
      startContent={
        club?.logo && (
          <Avatar
            alt={club?.club_name}
            className="w-4 h-4"
            src={formatPhotosUrl(club?.logo)}
            size={'sm'}
          />
        )
      }
      inputValue={list.filterText}
      isLoading={list.isLoading}
      scrollShadowProps={{
        isEnabled: false,
      }}
      items={list.items as clubsType[]}
      onInputChange={list.setFilterText}
      onSelectionChange={handleChangeKey}
    >
      {(item: clubsType) => {
        return (
          <AutocompleteItem
            startContent={
              item?.logo && (
                <Avatar
                  size={'sm'}
                  alt={item.club_name}
                  className="w-6 h-6"
                  src={formatPhotosUrl(item?.logo)}
                />
              )
            }
            key={item.club_id}
            value={`${item.club_id}`}
          >
            {item?.club_name}
          </AutocompleteItem>
        );
      }}
    </Autocomplete>
  );
}
