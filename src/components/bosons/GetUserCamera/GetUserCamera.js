const unsupportedError = 'Browser API navigator.mediaDevices.getUserMedia not available. Try again using Firefox, Chrome or Safari.'

const GetUserCamera = async ({
  element = undefined,
  options = {}
}) => {
  if (!element ||
      !Object.keys(options).length) {
    return undefined
  }

  if (!navigator.mediaDevices ||
    !navigator.mediaDevices.getUserMedia) {
    return unsupportedError
  }

  if (options.video &&
    options.video.width) {
    element.width = options.video.width
  }

  if (options.video &&
    options.video.height) {
    element.height = options.video.height
  }

  return navigator.mediaDevices.getUserMedia(options)
}

export default GetUserCamera
