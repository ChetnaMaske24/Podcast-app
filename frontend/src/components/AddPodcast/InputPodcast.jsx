import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const InputPodcast = () => {
  const [frontImage, setfrontImage] = useState(null);
  const [audioFile, setaudioFile] = useState(null);
  const [Dragging, setDragging] = useState(false);
  const [Inputs, setInputs] = useState({
    title: "",
    description: "",
    category: "",
  });
  const handleChangeImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setfrontImage(file);
  };
  const handleDrageEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };
  const handleDrageOver = (e) => {
    e.preventDefault();
    setDragging(false);
  };
  const handleDropImage = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfers.files[0];
    setfrontImage(file);
  };
  const handleaudioFile = (e) => {
    e.preventDefault();
    const file = e.dataTransfers.files[0];
    setaudioFile(file);
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const handleSubmitPodcast = async () => {
    const data = new FormData();
    data.append("title", Inputs.title);
    data.append("description", Inputs.description);
    data.append("category", Inputs.category);
    data.append("frontImage", frontImage);
    data.append("audioFile", audioFile);
    try {
      const res = await axios.post(
        "http:/localhost:1000/api/v1/add-podcast",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setInputs({
        title: "",
        description: "",
        category: "",
      });
      setfrontImage(null);
      setaudioFile(null);
    }
  };

  return (
    <div className="my-4 px-4 lg:px-12">
      <ToastContainer />
      <h1 className="text-2xl font-semibold">Create your podcast</h1>
      <div className="mt-5 flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="w-full lg:w-2/6 flex items-center justify-center lg:justify-start">
          <div
            className="size-[20vh] lg:size[60vh] flex items-center justify-center hover:bg-slate-50 transition-all duration-300"
            style={{ border: "1px dashed black" }}
            onDragEnter={handleDrageEnter}
            onDragLeave={handleDrageOver}
            onDrop={handleChangeImage}
          >
            <input
              type="file"
              accept="image/*"
              id="file"
              name="frontImage"
              className="hidden"
              onChange={handleChangeImage}
            />
            {frontImage ? (
              <img
                src={URL.createObjectURL(frontImage)}
                alt="thumbnail"
                className="h-[100%] w-[100%].object-cover"
              />
            ) : (
              <>
                <label
                  htmlFor="file"
                  className={`text-xl p-4 h-[100%] w-[100%] hover:cursor-pointer flex items-center justify-center ${
                    Dragging ? "bg-blue-100" : ""
                  } hover:bg-zinc-200 transition-all duration-300`}
                >
                  <div>Drage and drop the thumbnail or Click to browse</div>
                </label>
              </>
            )}
          </div>
        </div>
        <div className="w-full lg:w-4/6">
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title for your podcast"
              className="mt-4 px-4 py-2 outline-none border border-zinc-800 rounded"
              value={Inputs.title}
              onChange={onChangeInput}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="title">Description</label>
            <textarea
              type="text"
              id="Description"
              name="Description"
              placeholder="Description for your podcast"
              className="mt-4 px-4 py-2 outline-none border border-zinc-800 rounded"
              rows={4}
              value={Inputs.description}
              onChange={onChangeInput}
            />
          </div>

          <div className="flex flex-col mt-4">
            <div className="flex flex-col w-2/6">
              <label htmlFor="audioFile">Select Audio</label>
              <input
                type="file"
                accept=".mp3, .wav, .m4a, .ogg"
                id="audioFile"
                className="mt-4"
                onChange={handleaudioFile}
              />
            </div>

            <div className="flex flex-col w-4/6">
              <label htmlFor="category">Select Category</label>
              <select
                name="category"
                id="category"
                className="border border-zinc-900 rounded mt-4 outline-none px-4 py-2"
                value={Inputs.category}
                onChange={onChangeInput}
              >
                <option value="">Select Category</option>
                <option value="Comedy">Comedy</option>
                <option value="Bussiness">Bussiness</option>
                <option value="Education">Education</option>
                <option value="Hobbies">Hobbies</option>
                <option value="Government">Government</option>
              </select>
            </div>
            <div className="mt-8 lg:mt-6 flex">
              <button
                className="bg-zinc-900 w-full text-white rounded px-8 py-2 font-semibold hover:bg-zinc-800 transition-all duration-300"
                onClick={handleSubmitPodcast}
              >
                Create Podcast
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPodcast;
