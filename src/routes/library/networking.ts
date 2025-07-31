export const SERVER_URL = "https://emlapi.kalsvik.no/";

export enum ImageType {
  User,
  Mod,
}

export async function POST(
  route: string,
  data: any,
  isJson = false,
  onServer = true,
) {
  const res = await fetch((onServer ? SERVER_URL : "") + route, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
  if (isJson) {
    return await res.json();
  }

  return res.text();
}

export async function GET(route: string) {
  const res = await fetch(SERVER_URL + route);
  return await res.text();
}

export function GetImagePath(
  id: string,
  type: ImageType,
  ignoreCaching: boolean = true,
): string {
  let typeString = type == ImageType.User ? "userpfp" : "modicon";
  let query = SERVER_URL + "img/" + typeString + "?id=" + id;
  if (ignoreCaching) {
    query += "&t=" + Date.now();
  }
  return query;
}
