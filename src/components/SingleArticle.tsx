import { Card } from "react-bootstrap";
import Article from '../types/Article'
import { format} from 'date-fns'
import Link from 'react-router-dom'
interface SingleArticleProps {
    article: Article
}

const SingleArticle = ({article} : SingleArticleProps) => {
  return (
    
    <Card>
        <h1>{article.title}</h1>
        <Link to={`/${article.id}`}><Card.Img variant="top" src={article.imageUrl} height={500}/></Link>
      <Card.Body>
        <Card.Text>
            <>
            {article.summary} <br />
            last updated on{format(new Date( article.updatedAt),' MM/dd/yyyy/ H:m')}
            </>
        </Card.Text>
      </Card.Body>
    </Card>
    
  );
};

export default SingleArticle;
