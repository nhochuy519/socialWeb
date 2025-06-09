export const generateVideoThumbnail = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.muted = true;
    video.crossOrigin = "anonymous";

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const fileURL = URL.createObjectURL(file);
    video.src = fileURL;

    video.addEventListener("loadeddata", () => {
      video.currentTime = 0.1; // Lấy khung hình tại 0.1 giây
    });

    video.addEventListener("seeked", () => {
      if (!ctx) {
        reject("Không thể lấy context của canvas");
        return;
      }

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const thumbnail = canvas.toDataURL("image/jpeg", 0.8);
      URL.revokeObjectURL(fileURL);
      resolve(thumbnail);
    });

    video.addEventListener("error", (e) => {
      reject("Lỗi khi tải video");
    });
  });
};
