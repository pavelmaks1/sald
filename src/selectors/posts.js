import moment from 'moment';


export default (posts, { text, sortBy }) => {
  return posts.filter((post) => {
    let textMatch = false;
    if (sortBy === 'title') {
      textMatch = post.description.toLowerCase().includes(text.toLowerCase());
      
    } else if (sortBy === 'text') {
      textMatch = post.note.toLowerCase().includes(text.toLowerCase());      
    }

    return  textMatch;
  });
};
