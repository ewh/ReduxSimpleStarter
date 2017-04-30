export const BOOK_SELECTED = 'BOOK_SELECTED';

export function selectBook(book) {
  return {
    type: BOOK_SELECTED,
    payload: book
  };
}
