import React, { useContext } from "react";
import PostCard from "./PostCard";
import { useGetPosts, useGetPostsByCategory } from "../../actions";
import { PAGE_SIZE } from "../../lib/vars";
import IconsBtn from "../shared/IconsBtn";
import { BsGrid } from "react-icons/bs";
import { FiList } from "react-icons/fi";
import { Box, Button, Skeleton, useColorMode } from "@chakra-ui/core";
import { borderColor, color } from "../../customTheme";
import { downChevron } from "../../lib/icons";
import { GlobalContext } from "../../context/global.context";
import { IAllPosts } from "../../interfaces/IAllPosts";

const Previews = ({ posts }: { posts: IAllPosts[] }) => {
  const { isListView, switchView } = useContext(GlobalContext);

  const { colorMode } = useColorMode();

  const initialData = posts && [posts];

  const { data: paginatedPosts, size, setSize } = useGetPosts(initialData);
  const { data } = useGetPostsByCategory("faith");

  if (!paginatedPosts) return "loading";

  const isEmpty = paginatedPosts?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || paginatedPosts[paginatedPosts.length - 1]?.length < PAGE_SIZE;

  const previews = paginatedPosts.map((el: IAllPosts[]) =>
    el.map(({ _id, title, subtitle, slug, mainImage, publishedAt }) => (
      <PostCard
        key={_id}
        title={title}
        subtitle={subtitle}
        slug={slug}
        mainImage={mainImage}
        publishedAt={publishedAt}
      />
    ))
  );

  const previewClass = isListView
    ? "md:mx-16 ip:ml-48"
    : "lg:grid-cols-2 lg:mt-2 ip:grid-cols-3 xl:gap-12";

  return (
    <>
      <div className="view-button-container">
        <IconsBtn
          whileHover={{ scale: 1.2 }}
          firstIcon={BsGrid}
          secondIcon={FiList}
          toggle={switchView}
          isToggled={isListView}
          className="ease"
        />
      </div>
      <Skeleton isLoaded={paginatedPosts}>
        <Box
          color={color[colorMode]}
          className={`preview-container ${previewClass}`}
        >
          {previews}
        </Box>
      </Skeleton>
      <div className="preview-button-container">
        <Button
          disabled={isReachingEnd}
          size="lg"
          rounded="full"
          onClick={() => !isReachingEnd && setSize(size + 1)}
          variant="outline"
          borderColor={borderColor[colorMode]}
          _focus={{ outline: "none" }}
        >
          {downChevron(isReachingEnd)}
        </Button>
      </div>
    </>
  );
};

export default Previews;
