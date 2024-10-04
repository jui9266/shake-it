import Visual from "@/components/main/Visual";
import CocktailList from "@/components/main/CocktailList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import IngredientForm from "@/components/main/IngredientForm";
import { getCocktails } from "@/app/cocktail/[cocktailId]/_lib/getCocktails";
// import CreateButton from "@/components/main/CreateButton";

export default async function Main() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["ingredients"],
    queryFn: getCocktails,
  });

  return (
    <div>
      <Visual />
      <IngredientForm />
      {/* <CreateButton /> */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CocktailList />
      </HydrationBoundary>
    </div>
  );
}
