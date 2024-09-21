import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { atom, useRecoilValue, useSetRecoilState, selector } from "recoil";

const queryState = atom({
  key: "query",
  default: "",
});

const resultsState = selector({
  key: "searchResults",
  get: async ({ get }) => {
    const valorDeQuery = get(queryState);
    const response = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery
    );
    const json = await response.json();
    return json.results;
  },
});

// mi custom hook
export function useSearchResults() {
  const params = useParams();
  const useQueryState = useSetRecoilState(queryState);
  const results = useRecoilValue(resultsState);

  // escucho cambios en los params con useEffect
  useEffect(() => {
    console.log("el router me dice que query cambió");
    useQueryState(params.query);
    // ### TU CÓDIGO
    // guardar el valor de la query en el átomo: queryState
  }, [params]);

  // finalmente me engancho a los cambios de resultState

  return results;
}
