import { useNoteContext } from "../Context/Notes.context";
import { useReducerContext } from "../Context/Reducer.context";
import { labelFilter } from "../Reducer/filterFunctions";

export const useFunctionCombiner = () => {
  const { labels } = useReducerContext();
  const { notes } = useNoteContext();

  const sortedLables = labelFilter(notes, labels);

  return { sortedLables };
};
