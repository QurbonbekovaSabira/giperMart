import React from "react";
import { SearchIcon } from "../../../../assets/icon/search-icon";
import { useDebounce } from "../../../../hook/useDebounce";
import { useGetAllDataQuery } from "../../../../redux/service/all-product";
import { SearchCard } from "../search-card";
export const Search = () => {
  const [input, setInput] = React.useState(false);

  let search = useDebounce(input);
  if (search.length <= 2) {
    search = false;
  }
  const [click, setClick] = React.useState(false);
  const { data, isLoading } = useGetAllDataQuery(search);

  return (
    <>
      <form className={`relative ${input && "z-50"} grow`}>
        <input
          value={input ? input : ""}
          onClick={() => setClick(true)}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Поиск"
          aria-label="Поиск"
          className="w-full border border-meridian p-4 text-base font-normal text-raisin"
        />
        <button className="absolute bottom-4 right-4 top-4">
          <SearchIcon />
        </button>
      </form>
      {!isLoading && data?.length ? (
        <div className="absolute z-50 h-[250px] overflow-y-scroll bg-white">
          {data.map((item) => (
            <SearchCard setInput={setInput} key={item.id} {...item} />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
