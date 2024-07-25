import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://picsum.photos/1000/500 "
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="text-sm text-slate-900">Published on 2024/07/25</p>
          <Link href="#" className=" text-slate-900 pb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            provident autem eligendi tenetur sequi error iure, temporibus quidem
            consequuntur dolor at voluptatem eum velit? Ducimus animi ex eaque
            asperiores odit!
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
