"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 600);

  const handleStatusChange = (newStatus:string)=> {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.set("status", newStatus);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0 justify-between">
      <div className=" flex sm:grow md:w-6/12 lg:w-8/12">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
      <select
      className="rounded-md border border-gray-200"
       
        onChange={(e) => handleStatusChange(e.target.value)}
        value={(searchParams.get("status") || 'all').toString()}
      >
        <option value="all">All Payments</option>
        <option value="paid"> Successful</option>
        <option value="pending">Pending</option>
        <option value="disputed">Disputed</option>
        <option value="returned">Returned</option>
      </select>
    </div>
  );
}
