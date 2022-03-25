const labelFilter = (notes, labels) => {
  const filteredLables = [];

  if (Object.values(labels).every((value) => !value)) {
    return notes;
  } else {
    for (const key in labels) {
      if (labels[key]) {
        let newLables = notes.filter((item) => key === item.typeOfNote);
        filteredLables.push(...newLables);
      }
    }
  }
  return filteredLables;
};

export { labelFilter };
