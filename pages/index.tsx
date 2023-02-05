import React, { useEffect, useState } from "react";
import Seo from "@/src/components/Seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export interface Imovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function Home({
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const onClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <>
      <Seo title="Home" />
      <div className="container">
        {results?.map((movie) => (
          <div
            onClick={() => onClick(movie.id, movie.original_title)}
            className="movie"
            key={movie.id}
          >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <h4 key={movie.id}>{movie.original_title}</h4>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding-top: 10px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 7px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          text-align: center;
          margin-top: 0px;
          margin-bottom: 0px;
        }
      `}</style>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  results: Imovies[];
}> = async () => {
  const { results } = await (await fetch(`/api/movies`)).json();
  return { props: { results: results || [] } };
};
