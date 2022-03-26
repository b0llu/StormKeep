import { useNoteContext } from "../Context/Notes.context";
import { useReducerContext } from "../Context/Reducer.context";
import { labelFilter, prioritySorting } from "../Reducer/filterFunctions";

export const useFunctionCombiner = () => {
  const { labels, sort } = useReducerContext();
  const { notes } = useNoteContext();

  const sortedLables = labelFilter(notes, labels);

  const sortedPriorites = prioritySorting(notes, sort);

  return { sortedLables, sortedPriorites };
};
