import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';
/**
* @author
* @function ContactUS
**/

const Post = (props) => {
	console.log(props);

  return(
    <section className="container">
      <BlogPost{...props} ></BlogPost>
      <Sidebar></Sidebar>
    </section>
   )

 }

export default Post;