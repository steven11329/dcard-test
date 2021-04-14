import PropTypes from 'prop-types';
import './index.css';

function Post({ title, excerpt }) {
  return (
    <div className="Post">
      <div className="content">
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
