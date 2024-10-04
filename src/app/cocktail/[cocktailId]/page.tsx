import React from "react";
import DetailWrap from "./_components/DetailWrap";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getCocktails } from "@/app/cocktail/[cocktailId]/_lib/getCocktails";

const RecipePage = async ({ params }: { params: { cocktailId: string } }) => {
  const cocktailId = params.cocktailId;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["cocktail", cocktailId],
    queryFn: () => getCocktails(),
    staleTime: 1,
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DetailWrap cocktailId={cocktailId} />
      </HydrationBoundary>
    </div>
  );
};

export default RecipePage;
