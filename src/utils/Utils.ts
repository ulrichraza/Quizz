export function formatPhotosUrl(url: string) {
  const backURl =
    process.env.NEXT_PUBLIC_BACKEND_HOST || 'www.footballdatabase.eu';
  if (!url.includes(backURl)) {
    url = url
      .replace('https://footballdatabase.eu', '')
      .replace('https://www.footballdatabase.eu', '');

    url = `https://${process.env.NEXT_PUBLIC_BACKEND_HOST}/${url}`;
  }
  return url;
}

export function getClubPicUrl(clubID: number) {
  const dirID = Math.floor(clubID / 1000);
  const path = `/images/photos/clubs/a_${dirID}/${clubID}.png`;
  return path;
}

export function getSeasonsPicUrl(compId: number) {
  const dirID = Math.floor(compId / 1000);
  const path = `/images/photos/seasons/a_${dirID}/${compId}.png`;
  return path;
}
export function permuteArray(input: any[]) {
  if (!input || input.length === 0) return [];
  const permArr: any[] = [];
  const usedChars: any[] = [];

  function permute(input: any[]) {
    let i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length == 0) {
        permArr.push(usedChars.slice());
      }
      permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  }

  return permute(input);
}

export function stringifySearchParams({ params }: any): string | null {
  if (typeof params !== 'object') {
    return null;
  }
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
}
