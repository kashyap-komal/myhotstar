import { notFound } from "next/navigation";

type Props= {
    params: {
        term: string;
    };

};

function SearchPage({params: {term}} :Props) {
    if(!term) notFound();

    const termToUse = decodeURI(term);
   
  return <div>Welcome to the SearchPage: {term}</div>;
}

export default SearchPage
