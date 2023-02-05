import Seo from "@/src/components/Seo";
import { useRouter } from "next/router";
import React from "react";

export default function Detail({ params, results }: any) {
  const router = useRouter();
  const [title, id]: string[] = params || [];
  console.log(results);

  return (
    <div className="container">
      <Seo title={title} />
      <h3>{title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
        alt=""
      />
      <h4>release : {results.release_date}</h4>
      <h4>budget : $ {results.budget}</h4>
      <h4>popularity : {results.popularity}</h4>
      <h4>vote average : {results.vote_average}</h4>
      <h4>vote count : {results.vote_count}</h4>
      <h4>{results.overview}</h4>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          background-color: whitesmoke;
          margin: 0 auto;
          align-items: center;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        h4 {
          text-align: center;
          margin: 10px;
        }
        img {
          border-radius: 7px;
          margin: 0 auto;
          width: 70%;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }: any) {
  const id = params[1];
  const results = await (
    await fetch(`http://localhost:3000/api/movies/${id}`)
  ).json();

  return { props: { params, results } };
}
