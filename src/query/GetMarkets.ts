import { gql } from '@apollo/client'

export const GET_MARKETS = gql`
    query($ticker: String!) {
        markets(filter:{ marketSymbol: {_eq:$ticker} }) {
            baseSymbol
            ticker {
                lastPrice
            }
        }
    }
`
