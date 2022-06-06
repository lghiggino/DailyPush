import User from '../../../models/User';
import { UserService } from '../../services/users/userService';
import { USER_ADDED } from './channels';


export default {
  User: {
    fullName: (user: any) => `${user.firstName} ${user.lastName}`,
  },
  Query: {
    getAllUsers: async () => await User.find(),
    getUserById: async (_: any, { id }: any) => await User.findById(id),
  },
  Mutation: {
    createUser: async (_: any, { data }: any, { pubsub }: any) => {
      console.log("Entrou em createUser")
      try {
        console.log("Entrou em createUser no try")
        const user = await User.create(data);

        pubsub.publish(USER_ADDED, {
          userAddded: user
        })

        return user;
      } catch (error: any) {
        console.log("Entrou em createUser no catch")
        console.log(error )
        throw new Error(`${error._message}`)
      }

    },
    updateUser: async (_: any, { id, data }: any) => await UserService.findByIdAndUpdate(id, data),
    deleteUser: async (_: any, { id }: any) => !!(await UserService.deleteById(id)),
  },
  Subscription: {
    userAdded: {
      subscribe: (obj: any, args: any, { pubsub }: any) => pubsub.asyncIterator(USER_ADDED),
    }
  }
};