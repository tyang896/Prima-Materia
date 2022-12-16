import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
    me {
        _id
        username
        email
        wishList {
            _id
            cardId
            name
            type
            text
            image
        }
        decks {
            _id
            title
            cards {
                _id
                cardId
                name
                type
                text
                image
            }
        }
    }
}
`;

export const QUERY_SINGLE_DECK = gql`
  query singleDeck($deckId: ID!) {
    deck(deckId: $deckId) {
      _id
      title
        cards {
            _id
            cardId
            name
            type
            text
            image
        }
    }
  }
`;