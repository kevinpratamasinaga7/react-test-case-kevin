import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import { fetchArticles } from '../api';
import './ArticleList.css';

const ArticleList: React.FC = () => {
    const [articles, setArticles] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchArticles();
            setArticles(data);
        };
        fetchData();
    }, []);

    return (
        <div className="article-list-container">
            {articles.map((item) => (
                    <Card
                        hoverable
                        className="article-card"
                        cover={<img alt="article thumbnail" src={item.urlToImage} />}
                    >
                        <Card.Meta title={item.title} description={item.description} />
                        <Button href={item.url} className="read-button">
                            Read More
                        </Button>
                    </Card>
            ))}
        </div>
    );
};

export default ArticleList;
