import create from "zustand";
import { Store } from "../hooks/stores/useGetStore";

interface SearchState {
  searchResult: Store[];
  searchText: string;
  setSearchResult: (result: Store[]) => void;
  setSearchText: (text: string) => void;
}

export const useSearchStore = create<SearchState>(set => ({
  searchResult: [],
  searchText: "",
  setSearchResult: (result: Store[]) => set({ searchResult: result }),
  setSearchText: (text: string) => set({ searchText: text }),
}));
