function Form() {
  return (
    <>
      <form className="form">
        <h1 id="name">ADD NEW BOOK</h1>
        <input type="text" id="title" placeholder="Book Title" />
        <input type="text" id="author" placeholder="Author" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
