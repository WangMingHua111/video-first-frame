/**
 * 视频首帧配置项
 */
interface VideoFirstFrameOptions {
  /**
   * 视频首帧宽度，未设置是取本身宽度
   */
  width?: number
  /**
   * 视频首帧高度，未设置是取本身高度
   */
  height?: number
  /**
   * 是否进行跨域配置，默认值true
   */
  crossOrigin?: boolean
}

function captureImage(video: HTMLVideoElement, resolve: any, options: VideoFirstFrameOptions) {
  let canvas = document.createElement('canvas');
  const width = options.width || video.videoWidth;
  const height = options.height || video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  let ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, width, height);
  const base64Image = canvas.toDataURL('image/png')
  resolve && resolve(base64Image)
}
/**
 * 视频取首帧
 * @param videoSrc 视频地址
 * @param options 视频取首帧选项
 * @returns 
 */
function VideoFirstFrame (videoSrc: string, options?: VideoFirstFrameOptions) {
  return new Promise((resolve, reject) => {
    try {
      const opts: VideoFirstFrameOptions = {
        crossOrigin: true, 
        ...(options || {})
      }
      // 创建video标签
      const video = document.createElement('video')
      video.addEventListener('loadeddata', () => {
        requestAnimationFrame(() => captureImage(video, resolve, opts))
      })
      video.autoplay = true
      video.muted = true
      video.preload = "metadata"
      if (opts.crossOrigin) {
        video.crossOrigin = "anonymous"
      }
      video.src = videoSrc
    } catch (e) {
      reject(e.message)
    }
  })
}

module.exports = VideoFirstFrame
