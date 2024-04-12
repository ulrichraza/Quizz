import NextImage, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';
type ImageType = ImageProps & {
  parentclassname: string;
  fallbackimage?: string;
};

export default function Image(props: ImageType) {
  const [srcUrl, setSrcUrl] = useState<any>(props.src);
  useEffect(() => {
    setSrcUrl(props.src);
  }, [props.src]);
  return (
    <div className={`relative ${props?.parentclassname}`}>
      <NextImage
        {...props}
        alt={props?.alt}
        src={srcUrl}
        onLoadingComplete={(result) => {
          if (result.naturalWidth === 0) {
            setSrcUrl(props?.fallbackimage);
          }
        }}
        onError={() => {
          setSrcUrl(props?.fallbackimage);
        }}
      />
    </div>
  );
}
