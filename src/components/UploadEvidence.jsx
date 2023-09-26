function UploadEvidence({
  id,
  data,
  comment,
  handleData,
  handleComment,
  handleImageUpload,
  question,
}) {
  let fileName = null;
  const handleTextAreaChange = (e) => {
    handleComment(e.target.id, e.target.value);
  };

  return (
    <>
      <div className="upload-evidence">
        <h2>UPLOAD EVIDENCE</h2>
        <label
          className="image-upload "
          htmlFor={`file${id}`}
          id={`filepicture${id}`}
        >
          {data.questionSrc[id - 1].fileName
            ? data.questionSrc[id - 1].fileName
            : "Choose Picture"}
        </label>
        <input
          type="file"
          id={`file${id}`}
          accept="image/*"
          onChange={(e) => handleImageUpload(e, question)}
          style={{ display: "none" }}
        />

        <textarea
          className="textarea-comment"
          id={id}
          rows="6"
          cols="40"
          value={comment}
          onChange={handleTextAreaChange}
          placeholder="Enter your comment here..."
        />
      </div>
    </>
  );
}

export default UploadEvidence;
