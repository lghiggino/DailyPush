import User from '../../../models/User';

export class UserService {

    static async findByIdAndUpdate(id: string, data: any) {
        return await User.findByIdAndUpdate(id, data, { runValidators: true, context: 'query', new: true })
    }

    static deleteById(id: string) {
        return User.findByIdAndDelete(id)
    }
}
