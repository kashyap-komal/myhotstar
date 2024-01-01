export async function GET(request: Request) {
    const { searchParams } =  new URL(request.url);
    const term =  searchParams.get("term");

   // https://myhotstar.azurewebsites.net/api/getaisuggestionmyhotstar

   const res= await fetch(`https://myhotstar.azurewebsites.net/api/getaisuggestionmyhotstar?term=${term}`,
   {
    method: "GET",
    next:{
        revalidate: 60*60*24,
    },
   },
   );

   const message = await res.text();

   return Response.json({ message });
}