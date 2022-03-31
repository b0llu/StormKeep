import { useNoteContext } from "../Context/Notes.context";
import { useReducerContext } from "../Context/Reducer.context";
import {
  labelFilter,
  prioritySorting,
  searchBarHandler,
  getSortedDates,
} from "../Reducer/filterFunctions";

export const useFunctionCombiner = () => {
  const { labels, sort, searchTerm, timeSort } = useReducerContext();
  const { notes } = useNoteContext();

  const sortedLables = labelFilter(notes, labels);

  const sortedPriorites = prioritySorting(notes, sort);

  const sortedDates = getSortedDates(sortedPriorites, timeSort);

  const searchBarHandle = searchBarHandler(sortedDates, searchTerm);

  return { sortedLables, searchBarHandle };
};
