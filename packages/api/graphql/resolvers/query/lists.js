export const lists = async (parent, args, { db, userId }) => {
  return [
    {
      id: 0,
      label: "Saturday",
      userId: "12345",
    },
  ];
  // return await db
  //   .collection("lists")
  //   .find({ userId })
  //   .project({ _id: 0 })
  //   .toArray();
};
