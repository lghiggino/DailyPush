import Book from '../../../models/Book';

interface BookType {
    _id: string
    title: string
    author: string
}

export default {
  Book: {
    fullName: (book: BookType) => `${book.title} ${book.author}`,
  },
  Query: {
    getAllBooks: async () => await Book.find(),
    getBookById: async (_: any, { id }: any) => await Book.findById(id),
  },
  Mutation: {
    createBook: async (_: any, { data }: any, { pubsub }: any) => {
      const book = await Book.create(data);

      pubsub.publish('USER_ADDED', {
        userAdded: book
      });

      return book;
    },
    updateBook: async (_: any, { id, data }: any) => await Book.findByIdAndUpdate(id, data, { new: true }),
    deleteBook: async (_: any, { id }: any) => !!(await Book.findByIdAndDelete(id)),
  }
};