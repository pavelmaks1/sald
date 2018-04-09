import moment from 'moment';


export default (posts, { text, sortBy }) => {
  return posts.filter((post) => {
    console.log(sortBy);
    let textMatch = false;
    if (sortBy === 'title') {
      textMatch = post.description.toLowerCase().includes(text.toLowerCase());
      
    } else if (sortBy === 'text') {
      textMatch = post.note.toLowerCase().includes(text.toLowerCase());      
    }
    console.log(textMatch);

    return  textMatch;
  });
};
