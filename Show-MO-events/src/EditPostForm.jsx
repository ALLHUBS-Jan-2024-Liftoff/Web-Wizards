const EditPostForm = ({ editTitle, editContent, handleEditTitleChange, handleEditContentChange, handleEditSubmit }) => (
    <form onSubmit={handleEditSubmit}>
	<input type="text" value={editTitle} onChange={handleEditTitleChange}/>
	<textarea value = {editContent} onChange={handleEditContentChange} />
	<button type="submit">Save Changes </button>
	</form>
);

export default EditPostForm;