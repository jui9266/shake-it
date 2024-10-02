import Visual from "@/components/main/Visual";
import CocktailList from "@/components/main/CocktailList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import IngredientForm from "@/components/main/IngredientForm";
import { getCocktails } from "@/utils/getCocktails";

export default async function Main() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["cocktails"],
    queryFn: getCocktails,
  });

  return (
    <div>
      <Visual />
      <IngredientForm />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CocktailList />
      </HydrationBoundary>
    </div>
  );
}
