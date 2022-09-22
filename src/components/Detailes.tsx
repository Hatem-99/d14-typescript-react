import { Card } from "react-bootstrap";
import { format } from "date-fns";
import Article from '../types/Article'
interface SingleArticleProps {
    article: Article
}


const Detailes = ({article} : SingleArticleProps) => {

 const fetchingWithId = async () =>{
    try {
        let response = fetch()
        
    } catch (error) {
        
    }
 }



  return (
    <Card>
      <h1>{article.title}</h1>
      <Card.Img variant="top" src={article.imageUrl} />
      <Card.Body>
        <Card.Text>
          <>
            {article.summary} <br />
            last updated on
            {format(new Date(article.updatedAt), " MM/dd/yyyy/ H:m")}
          </>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Detailes;
