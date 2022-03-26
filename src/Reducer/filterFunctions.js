const labelFilter = (notes, labels) => {
  let filteredLables =
    labels.length !== 0
      ? notes.filter((l) => labels.includes(l.typeOfNote))
      : notes;
  return filteredLables;
};

const prioritySorting = (notes, sort) => {
  if (sort === null) {
    return notes;
  } else if (sort === "High") {
    return notes.filter((note) => note.priority === sort);
  } else if (sort === "Medium") {
    return notes.filter((note) => note.priority === sort);
  } else if (sort === "Low") {
    return notes.filter((note) => note.priority === sort);
  }
};

export { labelFilter, prioritySorting };
