import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Custom404 from "@/components/nestable/Custom404";

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
});

export default async function NotFound() {
  const currentConfig = await StoryblokCMS.getConfig();
  return (
    <div>
      <Custom404 config={currentConfig}></Custom404>
    </div>
  );
}
