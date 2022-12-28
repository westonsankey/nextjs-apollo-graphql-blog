import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";
import Link from "next/link";
import { CustomPageProps } from "./_app";

export const ALL_BOOKS_QUERY = gql`
  query {
    books {
      id
      author
      title
    }
  }
`;

const Books: NextPage<CustomPageProps> = (props) => {
  const { data } = useQuery(ALL_BOOKS_QUERY, { ssr: true });

  return (
    <div>
      {data?.books.map((b) => {
        return (
          <li key={b.id}>
            <Link href={`book/${b.id}`}>{b.title}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Books;
