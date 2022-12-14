import role from "../models/role.js";

export const createRoles = async () => {
  try {
    const count = await role.estimatedDocumentCount();
    if (count > 0) return;
    const value = await Promise.all([
      new role({ name: "user" }).save(),
      new role({ name: "moderator" }).save(),
      new role({ name: "admin" }).save(),
    ]);
    // console.log(value);
  } catch (error) {
    console.error(error);
  }
};
