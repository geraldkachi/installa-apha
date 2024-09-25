import { urlFor } from "@/sanity/utils";
import Image from "next/image";
import React from "react";

const ImpactArticle = ({ impactPage }) => {
  return (
    <section className="md:px-20 px-5 md:py-24 py-20">
      <div className="md:flex justify-between md:space-x-8">
        <h3 className="md:text-[44px] text-4xl md:mb-0 mb-10 md:max-w-sm md:w-[20%] leading-snug">
          Read our published stories
        </h3>
        <div className="md:w-[80%] grid md:grid-cols-3 gap-8 md:text-lg">
          {impactPage?.articles.map((article) => (
            <div>
              <Image
                src={urlFor(article.image).url()}
                width={256}
                height={200}
                alt="sdg image"
                className="mb-7 md:block hidden w-full"
              />
              <Image
                src={urlFor(article.imageMobile).url()}
                width={343}
                height={256}
                alt="sdg image"
                className="mb-7 md:hidden w-full"
              />
              <p>{article.articleTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactArticle;
