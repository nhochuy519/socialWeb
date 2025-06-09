import axios from "axios";
import { AxiosResponse } from "axios";
const uploadPromises = (
  fileMedia: File[]
): Promise<AxiosResponse<unknown>>[] => {
  const res = fileMedia.map((file) => {
    const formData = new FormData();
    const isVideo = file.type.startsWith("video/");
    const folder = isVideo ? "postsVideo" : "postsImg";
    const url = isVideo
      ? "https://api.cloudinary.com/v1_1/dktv8u8n9/video/upload"
      : "https://api.cloudinary.com/v1_1/dktv8u8n9/image/upload";
    formData.append("file", file);
    formData.append("upload_preset", "hyuu123");
    formData.append("cloud_name", "dktv8u8n9");
    formData.append("folder", folder);
    return axios.post(url, formData);
  });
  return res;
};

export default uploadPromises;
