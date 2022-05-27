# video-first-frame
The silent state captures the first frame of the video （采集视频首帧）

## npm install

```
npm install video-first-frame
```

## npm use

```
import videoFirstFrame from 'video-first-frame'

const result = await videoFirstFrame('movie.mp4', {
  // width: 200,
  // height: 200,
  // crossOrigin: false,
})

console.log(result) // 输出首帧截图的base64字符串形式
```
