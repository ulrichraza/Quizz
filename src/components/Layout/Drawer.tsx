import { useClickAway } from '@uidotdev/usehooks';
export default function Drawer({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
}) {
  const ref = useClickAway(() => {
    onClose();
  });
  return (
    <div
      ref={ref as any}
      className={`h-full ${
        open ? 'opacity-100 visible' : 'opacity-0 invisible'
      }  max-w-[20rem] p-4 w-full shadow-xl  transition-all ease-in-out delay-150 duration-250 vshadow-blue-gray-900/5 absolute top-0 left-0 z-50 bg-white`}
    >
      {children}
    </div>
  );
}
