import User from '../../../models/User';

export default {
  User: {
    fullName: (user: any) => `${user.firstName} ${user.lastName}`,
  },
  Query: {
    getAllUsers: async () => await User.find(),
    getUserById: async (_: any, { id }: any) => await User.findById(id),
  },
  Mutation: {
    createUser: async (_: any, { data }: any) => {
      const user = await User.create(data);
      return user;
    },
    updateUser: async (_: any, { id, data }: any) => await User.findByIdAndUpdate(id, data, { new: true }),
    deleteUser: async (_: any, { id }: any) => !!(await User.findByIdAndDelete(id)),
  }
};