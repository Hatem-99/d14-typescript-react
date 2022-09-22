import { useState ,useEffect} from "react";
import SingleArticle from "./SingleArticle";
import Article from '../types/Article'

const Fetching = () => {

const [articles, setArticles] = useState<Article[]>([]);


useEffect(() => {
    fethcingArticles()
},[])

 const fethcingArticles = async  () => {
  try {
    let response = await fetch(
      "https://api.spaceflightnewsapi.net/v3/articles"
    );
    if (response.ok) {
      const articles = await response.json();
      setArticles(articles);
    }
  } catch (error) {
    console.log(error);
  }}
return(
<div>{articles.map((article, i) => {
    return(<SingleArticle article={article} key={i}/>)
})}</div>
)

};

export default Fetching;
