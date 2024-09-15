import Visual from "@/components/main/Visual";
import CocktailList from "@/components/main/CocktailList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getCocktails } from "@/utils/supabase/api/cocktail/getCocktails";

export default async function Main() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["cocktails"],
    queryFn: getCocktails,
  });

  return (
    <div>
      <Visual />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CocktailList />
      </HydrationBoundary>
    </div>
  );
}
