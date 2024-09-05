import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Posts = ({ posts }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-12 mb-16 items-center"
      >
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{posts[0].frontmatter.title}</h2>
          <p className="text-gray-600 leading-relaxed">{posts[0].frontmatter.description}</p>
          <a
            href={`/blog/${posts[0].slug}`}
            className="text-purple-700 hover:text-purple-900 transition duration-300 inline-block mt-2"
          >
            Continue reading
          </a>
        </div>
        <div className="w-full md:w-1/2">
          {posts[0].frontmatter.image && (
            <Image
              className="rounded-lg object-cover w-full"
              src={posts[0].frontmatter.image}
              alt={posts[0].frontmatter.title}
              width={600}
              height={400}
              priority={true}
            />
          )}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(1).map((post, i) => (
          <motion.div
            key={`key-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col"
          >
            {post.frontmatter.image && (
              <Image
                className="rounded-lg object-cover w-full h-64"
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                width={500}
                height={300}
              />
            )}
            <div className="mt-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.frontmatter.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{post.frontmatter.description}</p>
              <a
                href={`/blog/${post.slug}`}
                className="text-purple-700 hover:text-purple-900 transition duration-300 inline-block mt-auto"
              >
                Read more
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Posts;