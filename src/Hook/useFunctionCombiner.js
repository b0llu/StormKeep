import { useNoteContext } from "../Context/Notes.context";
import { useReducerContext } from "../Context/Reducer.context";
import {
  labelFilter,
  priorityfiltering,
  searchBarHandler,
  getSortedDates,
} from "../Reducer/filterFunctions";

export const useFunctionCombiner = () => {
  const { labels, priority, searchTerm, timeSort } = useReducerContext();
  const { notes } = useNoteContext();

  const sortedLables = labelFilter(notes, labels);

  const filteredPriorites = priorityfiltering(notes, priority);

  const sortedDates = getSortedDates(filteredPriorites, timeSort);

  const searchBarHandle = searchBarHandler(sortedDates, searchTerm);

  return { sortedLables, searchBarHandle };
};
