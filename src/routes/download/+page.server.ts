import { error, ServerLoad } from "@sveltejs/kit";
let startedCheckRoutine = false;
let cachedJson: any;

async function CacheReleases() {
  console.log("Caching new releases");
  let releaseRequest = await fetch(
    "https://api.github.com/repos/Epic-Mickey-Launcher/launcher/releases",
  );
  if (releaseRequest.status != 200) {
    console.log("github api returned wrong result: " + releaseRequest.status);
    return;
  }
  cachedJson = await releaseRequest.json();
}

function CheckRoutine() {
  if (!startedCheckRoutine) {
    startedCheckRoutine = true;
    console.log("Check Routine");

    setInterval(async () => {
      await CacheReleases();
    }, 1800 * 1000);
  }
}

export const prerender = true;
export const load: ServerLoad = async () => {
  let releaseInfo = {
    tag_name: "",
    download_url: "",
    stability: "",
  };

  let json: any = cachedJson;

  if (!startedCheckRoutine) {
    CheckRoutine();
    await CacheReleases();
    json = cachedJson;
  }

  if (json == null) {
    return error(500, "Couldn't get latest releases from GitHub.");
  }

  releaseInfo.tag_name = json[0].tag_name;
  releaseInfo.download_url = json[0].html_url;
  if (json[0].prerelease) {
    releaseInfo.stability = "unstable";
  }

  let userCountRequest = await fetch("https://emlapi.kalsvik.no/user/count");
  let count = await userCountRequest.text();
  let memberCount = Number(count);
  let futureMemberCount = (memberCount + 1).toString();
  let memberCountSuffix = "";
  if (futureMemberCount.endsWith("1")) {
    memberCountSuffix = "st";
  } else if (futureMemberCount.endsWith("2")) {
    memberCountSuffix = "nd";
  } else if (futureMemberCount.endsWith("3")) {
    memberCountSuffix = "rd";
  } else {
    memberCountSuffix = "th";
  }

  let formattedMemberCount = String(futureMemberCount) + memberCountSuffix;
  return { releaseInfo, formattedMemberCount };
};
