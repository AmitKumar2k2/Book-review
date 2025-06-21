import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Calendar, User, BookOpen, FileText } from 'lucide-react';
import { useBook } from '../hooks/useBooks';
import { useReviews } from '../hooks/useReviews';
import ReviewCard from '../components/reviews/ReviewCard';
import ReviewForm from '../components/reviews/ReviewForm';
import LoadingSpinner from '../components/common/LoadingSpinner';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { book, loading: bookLoading, error: bookError } = useBook(id!);
  const { reviews, loading: reviewsLoading, submitReview } = useReviews(id!);

  if (bookLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (bookError || !book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Book Not Found</h1>
          <p className="text-gray-600">{bookError || 'The book you\'re looking for doesn\'t exist.'}</p>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Book Details */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={book.cover_image}
              alt={book.title}
              className="h-96 w-full object-cover md:w-64"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
              {book.genre}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              {book.title}
            </h1>
            
            <div className="flex items-center space-x-4 text-gray-600 mb-4">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span className="font-medium">{book.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{new Date(book.publication_date).getFullYear()}</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                <span>{book.pages} pages</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {renderStars(Math.round(book.average_rating))}
                <span className="text-lg font-semibold text-gray-900 ml-2">
                  {book.average_rating.toFixed(1)}
                </span>
              </div>
              <span className="text-gray-500">
                ({book.total_reviews} review{book.total_reviews !== 1 ? 's' : ''})
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {book.description}
            </p>

            <div className="flex items-center text-sm text-gray-500">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>ISBN: {book.isbn}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Reviews */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Reviews ({reviews.length})
            </h2>
            
            {reviewsLoading ? (
              <div className="flex justify-center py-8">
                <LoadingSpinner size="lg" />
              </div>
            ) : reviews.length > 0 ? (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No reviews yet. Be the first to review this book!</p>
              </div>
            )}
          </div>
        </div>

        {/* Review Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <ReviewForm onSubmit={submitReview} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;