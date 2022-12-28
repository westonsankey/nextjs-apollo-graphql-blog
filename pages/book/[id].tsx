import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

export const ALL_BOOKS_QUERY = gql`
  query {
    books {
      id
      author
      title
    }
  }
`;

const Book = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useQuery(ALL_BOOKS_QUERY, {
    fetchPolicy: "cache-first",
  });

  if (loading || !data) {
    return <p>Loading...</p>;
  }

  const book = data.books.find((b) => b.id === id);

  return (
    <div>
      <div>
        Book: {id}: {book.title} - {book.author}
      </div>
      <Link href={`/books`}>Back</Link>
    </div>
  );
};

export default Book;
