import { useQuery, useReactiveVar } from '@apollo/client';
import { isLoggedInVar, logUserOut } from '../apollo';
import { gql } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ME_QUERY = gql`
  query me {
    me {
      id
      username
      avatar
    }
  }
`;

export default function useUser() {
  const hasToken = useReactiveVar(isLoggedInVar);
  const navigate = useNavigate();
  const { data, error } = useQuery(ME_QUERY, {
    skip: !hasToken,
  });

  useEffect(() => {
    if (data?.me === null) {
      logUserOut(navigate);
    }
  }, [data]);
  return { data };
}
