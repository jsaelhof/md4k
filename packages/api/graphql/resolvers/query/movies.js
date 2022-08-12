export const movies = async (parent, { list }, { db }) =>
  await db
    .collection(list)
    .find({ watchedOn: null })
    .project({ _id: 0 })
    .toArray();
