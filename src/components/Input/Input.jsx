import "./Input.scss";

export default function Input(props) {
  return (
    <>
      <input
        type="text"
        id="searchInput"
        aria-label="Search pokemon by name"
        placeholder="Search by name"
      />
    </>
  );
}
