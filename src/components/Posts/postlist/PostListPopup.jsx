import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md'
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from 'axios'
import { createPost } from "../../../app/features/post/postsSlice";
import { togglePostModal } from "../../../app/features/auth/authSlice";

const PostListPopup = ({close}) => {
  const {_id } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState('');
  const [inputData, setInputData] = useState({
    userId: '',
    post: '',
    image: '',
  });

  const uploadImage = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const { type } = e.target.files[0];
    if(type === 'image/png' || type === 'image/svg' || type === 'image/jpeg' || type === 'image/gif' || type === 'image/webp'){
      setInputData({...inputData, image: e.target.files[0]});
    reader.onload = (onLoadEvent) => {
      setImageSrc(onLoadEvent.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if(inputData?.image){
      formData.append("file", inputData?.image);
      formData.append("upload_preset", "nomiupload");
      await axios.post('https://api.cloudinary.com/v1_1/globalnomi/image/upload', formData)
      .then((res) => dispatch(createPost({ ...inputData, userId: _id, image: res?.data.url })));
    }else {
      dispatch(createPost({ ...inputData, userId: _id}))
    }
    setInputData({});
    setInputData({
      userId: '',
      post: '',
      image: '',
    })
    dispatch(togglePostModal())
  }


  return (
    <div className='absolute flex z-40 w-full h-full items-center backdrop-blur-[67px] justify-center'>
      <div className="relative bg-bg_alt pt-10 pb-4 w-[500px] rounded-lg">
        <div onClick={() => dispatch(togglePostModal())}  className="absolute top-4 right-4 cursor-pointer">
          <MdClose size={20} />
        </div>
        <p className='text-center font-bold text-3xl pb-4'>Create new post</p>
        <p className="text-center text-lighter text-md">Bring Your Ideas to Life - Write Your Next Post Today!</p>
        <div className="flex flex-col gap-4 mb-3 w-full p-10">
          <div>
            {imageSrc ? (
                <div className="h-full] py-4">
                  <input className='absolute bg-transparent cursor-pointer text-transparent' type="file" onChange={uploadImage} name="image" />
                  <img src={imageSrc} alt="profile" className='w-full h-[300px] rounded-md object-contain' />
                </div>
                ) :
                (<div className="relative flex items-center text-base gap-2 bg-bg_cl rounded-full">
                  <div className="flex items-center justify-center w-12 h-12 cursor-pointer bg-bg_light rounded-full ">
                    <AiOutlineCloudUpload size={22} />
                  </div>
                  <p className='mr-4'>Cover image</p>
                  <input className='absolute bg-transparent cursor-pointer text-transparent' type="file" onChange={uploadImage} name="image" />
                </div>)
                }
          </div>
          <p className="font-bold text-lighter text-md">POST</p>
            <textarea name="post" onChange={(e) => setInputData({...inputData, post: e.target.value})} rows={2} placeholder='Enter post...' className='flex flex-1 h-8 text-base rounded-lg bg-bg_light p-4 w-full' />
          <button onClick={handleSubmit} className="rounded-md mt-4 text-[18px] py-4 px-4  bg-bg_cl text-white hover:bg-green duration-300">Create Post</button>
        </div>
      </div>
    </div>
  )
}

export default PostListPopup
