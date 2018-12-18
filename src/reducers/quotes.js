import uuid from "uuid";

export default quotesReducer(state = [], action) => {
  let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

<<<<<<< HEAD
    case 'UPVOTE_QUOTE':
      let currentQuote = initialState.filter(
        quote => quote.id === action.quoteId
      );
      if (currentQuote.length > 0) {
        return [{ ...quote, votes: quote.votes + 1 }];
      } else {
        return initialState;
      }

      case 'DOWNVOTE_QUOTE':
        let currentQuote = initialState.filter(
          quote => quote.id === action.quoteId
        );
        if (currentQuote.length > 0) && (currentQuote.votes > 0) {
          return [{ ...quote, votes: quote.votes - 1 }];
        } else {
          return initialState;
        }
=======
<<<<<<< HEAD
    //case 'UPVOTE_QUOTE':

    //case 'DOWNVOTE_QUOTE':
=======
    case 'UPVOTE_QUOTE':
      let existingAuthor = state.filter(
        author => author.authorName === action.book.authorName
      );
      if (existingAuthor.length > 0) {
        return state;
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid() }];
      }

      case 'DOWNVOTE_QUOTE':
        let existingAuthor = state.filter(
          author => author.authorName === action.book.authorName
        );
        if (existingAuthor.length > 0) {
          return state;
        } else {
          return [...state, { authorName: action.book.authorName, id: uuid() }];
        }
>>>>>>> 916bf6025f11640082aaedeac69ea65dbed31f83
>>>>>>> ea7091055ca6bd5157e3bf1fb42e2b3d61bcb008

  default:
    return state;
}
