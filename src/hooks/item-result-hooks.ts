import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { atom, useRecoilValue, useSetRecoilState, selector } from "recoil";

const itemState = atom({
  key: "id",
  default: "",
});

const resultsState = selector({
  key: "itemResults",
  get: async ({ get }) => {
    const valorDeItem = get(itemState);
    if (valorDeItem) {
      const response = await fetch(
        "https://api.mercadolibre.com/items/" + valorDeItem
      );
      const json = await response.json();
      return {
        title: json.title,
        price: json.price,
        img: json.thumbnail,
      };
    } else {
      return {
        title: "",
        price: "",
        img: "",
      };
    }
  },
});

// mi custom hook
export function useItemResults() {
  const params = useParams();
  const useItemState = useSetRecoilState(itemState);
  const results = useRecoilValue(resultsState);

  // escucho cambios en los params con useEffect
  useEffect(() => {
    console.log("el router me dice que query cambió");
    useItemState(params.id);
    // ### TU CÓDIGO
    // guardar el valor de la query en el átomo: queryState
  }, [params]);

  // finalmente me engancho a los cambios de resultState

  return results;
}
