import Seo from "@/components/Seo";
import { useRouter } from "next/router";
import React from "react";

export default function Detail({ params, results }: any) {
  const router = useRouter();
  const [title, id]: string[] = params || [];
  console.log(results);

  return (
    <>
      <Seo title={title} />
      <h4>{title}</h4>
      <img
        src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
        alt=""
      />
      <h4>release : {results.release_date}</h4>
      <h4>budget : $ {results.budget}</h4>
      <h4>{results.overview}</h4>
      <style jsx>{`
        h4 {
          text-align: center;
        }
        img {
          width: 100%;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps({ params: { params } }) {
  const id = params[1];
  const results = await (
    await fetch(`http://localhost:3000/api/movies/${id}`)
  ).json();

  return { props: { params, results } };
}
