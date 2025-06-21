import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, User } from 'lucide-react';
import { Book } from '../../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Link
      to={`/books/${book.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-olive-200"
    >
      <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
        <img
          src={book.cover_image}
          alt={book.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-2 group-hover:text-olive-600 transition-colors">
          {book.title}
        </h3>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <User className="h-4 w-4 mr-1" />
          <span className="truncate">{book.author}</span>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {book.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-900">
              {book.average_rating.toFixed(1)}
            </span>
            <span className="text-sm text-gray-500">
              ({book.total_reviews})
            </span>
          </div>
          
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{new Date(book.publication_date).getFullYear()}</span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="inline-block bg-olive-50 text-olive-700 text-xs px-2 py-1 rounded-full">
            {book.genre}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;