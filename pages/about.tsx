import Seo from "@/src/components/Seo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function about() {
  return (
    <div className="container">
      <Seo title="About" />
      <Link href={"https://github.com/Paperkeem"}>
        <div className="overview">
          <Image src="/image/github.png" width={20} height={20} alt="" />
          <span>About Me</span>
        </div>
      </Link>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .overview {
          display: flex;
          align-items: center;
          margin-top: 30px;
          padding: 10px 100px;
          background-color: whitesmoke;
          border-radius: 7px;
          border: 1px solid lightgray;
        }
        .overview span {
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
}
