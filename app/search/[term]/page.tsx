import { notFound } from "next/navigation";

type Props = {
    params: {
        term: string;
    };
};

function SearchPage({params: {term}} : Props) {
    if(!term) notFound();

    const termToUse = decodeURI(term);
    //API call to get the serched movies
    //API call to get the popular movies
  return <div>Weclome to the searchpage: {termToUse}</div>
}

export default SearchPage