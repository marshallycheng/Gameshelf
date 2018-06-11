export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review }
  })
);

export const editReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}/edit`,
    data: { review }
  })
);

export const deleteReview = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`
  })
);
