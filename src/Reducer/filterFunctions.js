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

const getSortedDates = (notes, timeSort) => {
  const dateToTime = (date) => {
    const d = new Date(date);
    return d.getTime();
  };

  if (timeSort === "Latest") {
    const noteDate = [...notes].sort(
      (itemOne, itemTwo) =>
        dateToTime(itemTwo.createdAtDate) - dateToTime(itemOne.createdAtDate)
    );
    return noteDate;
  } else if (timeSort === "Old") {
    const noteDate = [...notes].sort(
      (itemOne, itemTwo) =>
        dateToTime(itemOne.createdAtDate) - dateToTime(itemTwo.createdAtDate)
    );
    return noteDate;
  } else {
    return notes;
  }
};

const searchBarHandler = (notes, searchTerm) => {
  return notes.filter((value) => {
    if (searchTerm === "") {
      return value;
    } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return value;
    }
  });
};

export { labelFilter, prioritySorting, searchBarHandler, getSortedDates };
