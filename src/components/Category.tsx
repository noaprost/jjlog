import React from "react";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Category({ categories, selected, onClick }: Props) {
  return (
    <section className="relative mt-24">
      <div className="absolute -left-3">
        <p className="font-bold underline underline-offset-8">Category</p>
        <ul className="h-72 flex flex-col justify-evenly items-center">
          {categories.map((category) => (
            <li
              className={`cursor-pointer hover:text-orange-400 hover:scale-110 ${
                category === selected ? "text-orange-400" : ""
              }`}
              key={category}
              onClick={() => onClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
