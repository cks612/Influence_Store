import create from "zustand";
import { fetchStore, Store } from "../hooks/stores/useGetStore";

interface SearchState {
  initResult: Store[];
  searchResult: Store[];
  searchText: string;
  setInitResult: () => void;
  setSearchResult: (result: Store[]) => void;
  setSearchText: (text: string) => void;
}

export const useSearchStore = create<SearchState>(set => ({
  initResult: [],
  searchResult: [],
  searchText: "",
  setInitResult: async () => {
    const response = await fetchStore();
    set({ initResult: response?.GGGOODINFLSTOREST[1].row });
  },
  setSearchResult: (result: Store[]) => set({ searchResult: result }),
  setSearchText: (text: string) => set({ searchText: text }),
}));
