import React from "react";
import { getCocktail } from "@/utils/supabase/api/cocktail/getCocktails";
import DetailWrap from "./_components/DetailWrap";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const RecipePage = async ({ params }: { params: { cocktailId: string } }) => {
  const cocktailId = params.cocktailId;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["cocktail", cocktailId],
    queryFn: () => getCocktail(cocktailId),
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
