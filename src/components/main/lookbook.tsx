import { NextPage } from "next";
import { useEffect, useState } from "react";

import { useQuery } from "react-query";

import LookBookItem from "./lookbook-item";

import { apiGet } from "../../service/request";
import { LookbookData, LookbookDataMin } from "../../common/types/data.types";
import useLookbook from "../../hooks/useLookbook";

const LookBook: NextPage = () => {
  const { data: lookbooks } = useQuery<LookbookData[]>({
    queryKey: ["lookbooks"],
    queryFn: apiGet.GET_LOOKS,
  });

  const { lookbookList } = useLookbook({ lookbooks: lookbooks ?? [] });

  return (
    <div>
      <div className="mb-5">
        <h2 className="px-5 text-xl">Look Book</h2>
        <p className="px-5 text-textColor-gray-100">회원 스타일 피드</p>
      </div>
      <div className="border border-b-common-black border-t-common-black">
        <ul className="flex overflow-x-scroll">
          {lookbookList.map((look: LookbookDataMin) => (
            <LookBookItem key={look.id} {...look} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LookBook;
