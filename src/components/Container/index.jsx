import { useState, useEffect } from 'react';
import './index.css';
import Post from '../Post';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import getPosts from '../../apis/getPosts';

function Container() {
  const [isReachBottom, setIsReachBottom] = useInfiniteScroll('#root');
  const [data, setData] = useState([]);

  useEffect(() => {
    getPosts().then(nextData => setData([...nextData]));
  }, []);

  useEffect(() => {
    if (isReachBottom && data.length > 0) {
      getPosts(data[data.length - 1].id).then(nextData => {
        setIsReachBottom(false);
        setData([...data, ...nextData]);
      });
    }
  }, [isReachBottom, setIsReachBottom, data]);

  const posts = data.map(d => (
    <Post key={d.id} title={d.title} excerpt={d.excerpt} />
  ));

  return <div className="Container">{posts}</div>;
}

export default Container;
