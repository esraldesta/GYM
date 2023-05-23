import { useState } from "react";
import axios from "axios";

export const Upload = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null)
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);

  const uploadFile = async (url) => {
    // setIsLoading(true);
    let formData = new FormData();
    formData.append("file", file);
    formData.append("name", name)
    await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent);
        const progress = (progressEvent.loaded / progressEvent.total) * 50;
        setProgress(progress);
      },
      onDownloadProgress: (progressEvent) => {
        const progress = 50 + (progressEvent.loaded / progressEvent.total) * 50;
        console.log(progress);
        setName("")
        setFile(null)
        setProgress(progress);
      },
    });
    setIsSuccess(true)
  }

  const onChange = (e) => {
    e.preventDefault()
    let url = "file/upload/";
    uploadFile(url);
    console.log("got called");
  };


  return (
    <div className="py-5">
      <form onSubmit={onChange}>
        <input type="text" value={name} onChange={(e => setName(e.target.value))} />
        <input type="file" onChange={(e => setFile(e.target.files[0]))} />
        <input type="submit" value="submit" />
      </form>

      {progress !== 0 &&

        <div>
          {!isSuccess && <p className="m-auto ">UPloading</p>}
          {isSuccess && <p className="ml-auto">Successfully uploaded</p>}
          <div className="progress m-auto" >

            <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      }


    </div>)
    {/* <div class="frame">
	<div class="center">
		<div class="title">
			<h1>Drop file to upload</h1>
		</div>

		<div class="dropzone">
			<img src="http://100dayscss.com/codepen/upload.svg" class="upload-icon" />
			<input type="file" class="upload-input" />
		</div>

		<button type="button" class="btn" name="uploadbutton">Upload file</button>

	</div>
</div> */}


    {/* <div className="container-fluid overflow-hidden">
            <div className="row vh-100 overflow-auto">
                <div className="col d-flex flex-column h-sm-100">
                    <main className="row overflow-auto">
                        <div className="col">
                            <section style={{ backgroundColor: "gray" }}>
                                <div className="container py-3">

                                    <div className="row">
                                        <div className="col-md-12">

                                            <div className="card" id="chat3" style={{ borderRadius: "15px" }}>
                                                <div className="card-body">

                                                    <div className="row">


                                                        <div className="col-xl-12">

                                                            <div className="pt-3 pe-3 overflow-auto" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "85vh" }}>
                                                                    <input name="file" onChange={onChange} className="ms-auto me-auto" style={{display:"block",marginTop:"30%"}} type="file" />
                                                                    <form onSubmit={onChange} className="ms-auto me-auto" style={{display:"block",marginTop:"30%"}}>
                                                                        <input type="text" value={name} onChange={(e=>setName(e.target.value))}   className="ms-auto me-auto" style={{display:"block"}}/>
                                                                        <input type="file" onChange={(e=>setFile(e.target.files[0]))}   className="ms-auto me-auto" style={{display:"block"}}/>
                                                                        <input type="submit" value="submit" />
                                                                    </form>
                                                            </div>


                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>
                    </main>
                    <footer className="row bg-light py-4 mt-auto">
                        <div className="col"> Footer content here... </div>
                    </footer>
                </div>
            </div>
        </div> */}
}