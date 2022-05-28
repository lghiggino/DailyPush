import User from '../../../models/User';

export default {
  User: {
    fullName: (user: any) => `${user.firstName} ${user.lastName}`,
  },
  Query: {
    users: async () => await User.find(),
    user: async (_: any, { id }: any) => await User.findById(id),
  },
  Mutation: {
    createUser: async (_: any, { data }: any, { pubsub }: any) => {
      const user = await User.create(data);

      pubsub.publish('USER_ADDED', {
        userAdded: user
      });

      return user;
    },
    updateUser: async (_: any, { id, data }: any) => await User.findByIdAndUpdate(id, data, { new: true }),
    deleteUser: async (_: any, { id }: any) => !!(await User.findByIdAndDelete(id)),
  }
};