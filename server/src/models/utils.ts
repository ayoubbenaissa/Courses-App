/**
 * takes an array of strings and checks whether the array is not empty & whether all elements are non empty strings
 * @param membersArray: array of strings presenting the names of the course members
 * @returns boolean
 */
export const membersValidator = (membersArray: string[]) => {
  return (
    membersArray.length && membersArray.every((member) => member.length > 0)
  );
};
