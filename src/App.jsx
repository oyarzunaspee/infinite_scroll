import { useEffect } from 'preact/hooks';
import { useGetProductsInfiniteQuery } from "./store/api.js";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import Header from "./components/Header.jsx"
import Product from "./components/Product.jsx"
import TopButton from "./components/TopButton.jsx"
import { useSelector } from 'react-redux';
import './app.css';

export function App() {

  const limit = useSelector((state) => state.limit.value)
  const search = useSelector((state) => state.search.value)

  const useQueryResult = useGetProductsInfiniteQuery({ limit: limit, search: search })
  const { data, isFetching, fetchNextPage, isLoading, refetch } = useQueryResult

  useEffect(() => {
    if (search.length > 3) {
      refetch()
    }
  }, [search])

  const handleScroll = () => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight && !isFetching && !isLoading) {
      fetchNextPage()
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [data]);

  if (isLoading) {
    return (
      <>
        <div className="min-h-screen bg-base flex justify-center items-center">
          <ArrowPathIcon className="size-8 text-primary animate-spin" />
        </div>
      </>
    )
  }

  if (data) {

    return (
      <>
        <div className="min-h-screen bg-base p-5 pb-10">
          <Header data={data} />
          {data.pages.map((page) => {
            return page.products.map((item) => {
              return (
                <>
                <div className="px-5">
                  <Product item={item} />
                </div>
                </>
              )
            })
          })}
          {isFetching &&
            <div className="flex justify-center mt-5">
              <ArrowPathIcon className="size-8 text-light animate-spin" />
            </div>
          }
          <TopButton />
        </div>
      </>
    )

  }
}
