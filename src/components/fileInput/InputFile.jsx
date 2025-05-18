import { uploadFiles } from "@/redux/features/fileSlice/slice";
import { useDispatch } from "react-redux";
import coreEndpoint from "@/api/coreApi";

function InputFile({ Id }) {
  const dispatch = useDispatch();

  async function UploadFile(e) {
    const fileData = new FormData();
    fileData.append("file", e.target.files[0]);
    dispatch(
      uploadFiles({
        endpoint: coreEndpoint.uploadFile("project", Id),
        body: fileData,
      })
    );
  }
  return (
    <>
      <input
        type="file"
        name="file"
        className=""
        style={{ display: "none" }}
        id="fileinput"
        onChange={UploadFile}
      />
      <label htmlFor="fileinput">
        <div className="btn-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="plus-circle"
            className=""
          >
            <path
              fill=""
              d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
            ></path>
          </svg>
          <span className="text">Add File</span>
        </div>
      </label>
    </>
  );
}

export default InputFile;
