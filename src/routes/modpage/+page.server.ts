import { ServerLoad } from "@sveltejs/kit";
import { POST } from "../library/networking";

export const prerender = false;

export interface Mod {
  ID: string;
  Author: string;
  Version: number;
  Video: string;
  Game: string;
  Platform: string;
  Downloads: number;
  Published: boolean;
  Name: string;
  Description: string;
  Dependencies: string[];
  CachedLikes: number;
  Verified: boolean;
}

export const load: ServerLoad = async ({ url }) => {
  let modData: Mod;
  const searchParams = url.searchParams;
  console.log("getting mod for modpage " + url.toString);
  if (searchParams.has("id")) {
    const id = searchParams.get("id");
    modData = await POST("mod/get", { ID: id }, true);

    console.log("got mod: " + modData.ID);

    return {
      modData,
    };
  }

  return null;
};
