import Post from '../../../models/Post';
import User from '../../../models/User';

export default {
    Post: {
        author: async (post: any) => await User.findById(post.author),
    },
    Query: {
        posts: async () => await Post.find(),
        post: async (_: any, { id }: any) => await Post.findById(id),
    },
    Mutation: {
        createPost: (_: any, { data }: any) => Post.create(data),
        updatePost: (_: any, { id, data }: any) => Post.findOneAndUpdate(id, data, { new: true }),
        deletePost: async (_: any, { id }: any) => !!(await Post.findOneAndDelete(id)),
    },
};