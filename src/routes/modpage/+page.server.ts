import { error, ServerLoad } from "@sveltejs/kit";
import { POST } from "../library/networking";
import { marked } from "marked";
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
    if (modData == null) error(404, "Mod does not exist!");
    console.log("got mod: " + modData.ID);
    let markdownDescription = await marked(modData.Description);
    modData.Description;
    return {
      modData,
      markdownDescription,
    };
  }

  return null;
};
