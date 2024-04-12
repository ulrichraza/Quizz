import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
export const NextButton = (props: any) => {
  return (
    <AiFillRightCircle
      size="2rem"
      {...props}
      color="text-white"
      className="absolute z-10 top-1/2 right-0 transform  text-white -translate-x-1/2 cursor-pointer -translate-y-1/2 rounded-full bg-purple"
    />
  );
};

export const PrevButton = (props: any) => {
  return (
    <AiFillLeftCircle
      size="2rem"
      className="absolute z-10 top-1/2 left-0 ml-10 transform  text-white -translate-x-1/2 cursor-pointer -translate-y-1/2 rounded-full bg-purple"
      {...props}
    />
  );
};
