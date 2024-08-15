// src/pages/CreatePost.js
const CreatePost = () => {
  return (
    <div>
      <h2>Create Post</h2>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
