export default {
  context: null,
  canvas: null,

  mountCanvas ({
    canvas = undefined,
    width = 0,
    height = 0,
    type = '2d',
    attributes = {
      alpha: false,
      desynchronized: false
    }
  }) {
    if (!canvas ||
      width === undefined ||
      height === undefined) {
      throw new Error('mountCanvas')
    }

    const context = canvas.getContext(type, attributes)

    canvas.width = width
    canvas.height = height

    return context
  },

  setContext (context) {
    this.context = context
    this.canvas = context.canvas

    return this
  },

  clearFrame () {
    this.context.save()
    // this.context.setTransform(1, 0, 0, 1, 0, 0)
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.restore()

    return this
  },

  drawLine ({
    startX = 0,
    startY = 0,
    stopX = 0,
    stopY = 0,
    stroke = 2,
    color = '#FF0000'
  }) {
    this.context.beginPath()
    this.context.moveTo(startX, startY)
    this.context.lineTo(stopX, stopY)
    this.context.lineWidth = stroke
    this.context.strokeStyle = color
    this.context.stroke()

    return this
  },

  drawPolygon ({
    points = [[]],
    color = '#FF0000',
    border = {
      color: '#FF0000',
      width: 0
    }
  }) {
    if (!Array.isArray(points) ||
      !points.length < 3) {
      throw new Error('$yoo.draw.polygon')
    }

    this.context.fillStyle = color
    this.context.beginPath()
    this.context.moveTo(points[0][0], points[0][1])

    points
      .forEach((point) =>
        this.context.lineTo(point[0], point[1])
      )

    this.context.closePath()

    if (border.width) {
      this.context.lineWidth = border.width
      this.context.strokeStyle = border.color
      this.context.stroke()
    }

    this.context.fill()

    return this
  },

  drawPoint ({
    x,
    y,
    radius = 3,
    color,
    border = {
      color: '#FF0000',
      width: 0
    }
  }) {
    this.context.beginPath()
    this.context.arc(
      x,
      y,
      radius,
      0,
      2 * Math.PI
    )

    if (color) {
      this.context.fillStyle = color
      this.context.fill()
    }

    if (border.width) {
      this.context.lineWidth = border.width
      this.context.strokeStyle = border.color
      this.context.stroke()
    }

    return this
  },

  drawRoundRect ({
    x,
    y,
    width,
    height,
    radius = 0,
    stroke = undefined,
    color = '#FF0000'
  }) {
    if (x === undefined ||
      y === undefined ||
      width === undefined ||
      height === undefined) {
      throw new Error('drawRoundRect')
    }

    const r = x + width
    const b = y + height
    this.context.lineCap = 'round'
    this.context.beginPath()
    this.context.moveTo(x + radius, y)
    this.context.lineTo(r - radius, y)
    this.context.quadraticCurveTo(r, y, r, y + radius)
    this.context.lineTo(r, y + height - radius)
    this.context.quadraticCurveTo(r, b, r - radius, b)
    this.context.lineTo(x + radius, b)
    this.context.quadraticCurveTo(x, b, x, b - radius)
    this.context.lineTo(x, y + radius)
    this.context.quadraticCurveTo(x, y, x + radius, y)

    if (stroke !== undefined) {
      this.context.strokeStyle = color
      this.context.lineWidth = stroke
      this.context.stroke()
    }

    this.context.closePath()

    return this
  },

  drawRect ({
    x,
    y,
    width,
    height,
    stroke = 2,
    color = '#FF0000'
  }) {
    if (x === undefined ||
      y === undefined ||
      width === undefined ||
      height === undefined) {
      throw new Error('drawRect')
    }

    this.context.beginPath()
    this.context.strokeStyle = color
    this.context.lineWidth = stroke
    this.context.strokeRect(
      x,
      y,
      width,
      height
    )
    this.context.closePath()

    return this
  },

  drawBox ({
    x,
    y,
    width,
    height,
    color = '#FF0000'
  }) {
    if (x === undefined &&
      y === undefined &&
      width === undefined &&
      height === undefined) {
      throw new Error('drawBox')
    }

    this.context.beginPath()
    this.context.fillStyle = color
    this.context.fillRect(
      x,
      y,
      width,
      height
    )
    this.context.closePath()

    return this
  },

  drawText ({
    x,
    y,
    text = 'NO TEXT',
    size = '14px',
    font = 'Arial',
    color = '#FF0000',
    align = 'left',
    baseline = 'bottom'
  }) {
    if (x === undefined ||
      y === undefined) {
      throw new Error('drawText')
    }

    size = size.replace('px', '')
    this.context.beginPath()
    this.context.font = `${size}px ${font}`
    this.context.fillStyle = color
    this.context.textAlign = align
    this.context.textBaseline = baseline
    this.context.fillText(
      text,
      x,
      y
    )
    this.context.closePath()

    this.calcTextSize({
      text,
      size
    })

    return this
  },

  drawFrame ({
    image = null,
    invert = false,
    blackAndWhite = false,
    luminance = null,
    sharpness = null,
    rotate = 0,
    source: {
      sX = null,
      sY = null,
      sWidth = null,
      sHeight = null
    },
    destination: {
      dX,
      dY,
      dWidth,
      dHeight
    }
  }) {
    if (
      !image ||
      (
        !(image instanceof HTMLImageElement) &&
        !(image instanceof HTMLVideoElement) &&
        !(image instanceof HTMLCanvasElement) &&
        !(image instanceof String)
      )
    ) {
      throw new Error('drawFrame')
    }

    if (invert) {
      this.context.translate(dWidth, 0)
      this.context.scale(-1, 1)
      rotate = rotate - 360
    }

    if (rotate) {
      this.context.translate(dX + dWidth / 2, dY + dHeight / 2)
      this.context.rotate(rotate * Math.PI / 180)
      this.context.translate(-dX - dWidth / 2, -dY - dHeight / 2)
    }

    if (
      (
        sX !== null &&
        sX !== undefined
      ) &&
      (
        sY !== null &&
        sY !== undefined
      ) &&
      (
        sWidth !== null &&
        sWidth !== undefined
      ) &&
      (
        sHeight !== null &&
        sHeight !== undefined
      )
    ) {
      this.context.drawImage(
        image,
        sX,
        sY,
        sWidth,
        sHeight,
        dX,
        dY,
        dWidth,
        dHeight
      )
    } else {
      this.context.drawImage(
        image,
        dX,
        dY,
        dWidth,
        dHeight
      )
    }

    if (blackAndWhite) {
      blackAndWhite = this.blackAndWhite({
        x: dX,
        y: dY,
        width: dWidth,
        height: dHeight
      })

      this.context.putImageData(blackAndWhite.image, dX, dY)
    }

    if (sharpness) {
      if (!blackAndWhite.matrix) {
        blackAndWhite = this.blackAndWhite({
          x: dX,
          y: dY,
          width: dWidth,
          height: dHeight
        })
      }

      sharpness = this.getSharpness({
        width: dWidth,
        height: dHeight,
        pixels: blackAndWhite.matrix
      })
    }

    if (luminance) {
      if (!blackAndWhite.matrix) {
        blackAndWhite = this.blackAndWhite({
          x: dX,
          y: dY,
          width: dWidth,
          height: dHeight
        })
      }

      luminance = this.getLuminance({
        width: dWidth,
        height: dHeight,
        pixels: blackAndWhite.matrix
      })
    }

    return {
      ...luminance,
      sharpness
    }
  },

  // drawFrameBase64 ({
  //   base64,
  //   blackAndWhite,
  //   invert,
  //   canvas
  // }) {
  //   const regex = /data:image\/(jpeg|gif|png|pdf);base64,/g
  //   let base64Header = 'data:image/jpeg;base64,'
  //
  //   if (base64.match(regex)) {
  //     base64Header = ''
  //   }
  //
  //   const newBase64 = `${base64Header}${base64}`
  //
  //   if (this.image.src === newBase64) {
  //     return
  //   }
  //
  //   this.image.src = newBase64
  //   this.image.onload = () => this.doDraw(this.image, blackAndWhite, invert, canvas)
  // },

  drawTag ({
    x = 0,
    y = 0,
    color = 'red',
    title = 'NO TITLE',
    content = 'NO CONTENT',
    padding = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }) {
    const titleSize = 10
    const contentSize = 20
    const width = Math.max(
      this.calcTextSize({
        text: title,
        size: titleSize
      }),
      this.calcTextSize({
        text: content,
        size: contentSize
      })
    ) + this.padding(padding).width
    const height = this.padding(padding).height + titleSize + 2 + contentSize

    this.context.clearRect(x, y, width, height)

    this.drawBox({
      x,
      y,
      width,
      height,
      color
    })

    this.drawText({
      x: x + padding.left,
      y: y + padding.top,
      text: title,
      align: 'left',
      baseline: 'top',
      size: `${titleSize}px`,
      font: 'Arial',
      color: 'white'
    })

    this.drawText({
      x: x + padding.left,
      y: y + titleSize + 2 + padding.top,
      text: content,
      align: 'left',
      baseline: 'top',
      size: `${contentSize}px`,
      font: 'Arial',
      color: 'white'
    })

    return width
  },

  clipMasking ({
    mask = {
      points: [],
      color: '#FF0000',
      border: {
        color: '#FF0000',
        width: 0
      }
    },
    picture = {
      object: null,
      invert: false,
      blackAndWhite: false,
      source: {
        sX: null,
        sY: null,
        sWidth: null,
        sHeight: null
      },
      destination: {
        dX: null,
        dY: null,
        dWidth: null,
        dHeight: null
      }
    }
  }) {
    if (!mask.points ||
      !picture.object ||
      (
        !(picture.object instanceof HTMLImageElement) &&
        !(picture.object instanceof HTMLVideoElement) &&
        !(picture.object instanceof HTMLCanvasElement)
      )
    ) {
      throw new Error('clipMasking')
    }

    this.context.save()

    this.drawPolygon({
      points: mask.points,
      color: 'rgba(255, 255, 255, 0)',
      border: {
        color: 'rgba(255, 255, 255, 0)',
        width: 0
      }
    })

    this.context.clip()

    this.drawFrame({
      image: picture.object,
      invert: picture.invert,
      blackAndWhite: picture.blackAndWhite,
      source: {
        sX: picture.source.sX,
        sY: picture.source.sY,
        sWidth: picture.source.sWidth,
        sHeight: picture.source.sHeight
      },
      destination: {
        dX: picture.destination.dX,
        dY: picture.destination.dY,
        dWidth: picture.destination.dWidth,
        dHeight: picture.destination.dHeight
      }
    })

    this.drawPolygon({
      points: mask.points,
      color: mask.color,
      border: {
        color: mask.border.color,
        width: mask.border.width
      }
    })

    this.context.restore()

    return this
  },

  blackAndWhite ({
    x = 0,
    y = 0,
    width = 0,
    height = 0
  }) {
    if (!x &&
        !y &&
        !width &&
        !height) {
      return
    }

    const image = this.context.getImageData(x, y, width, height)
    const pixels = image.data
    const grayscaleMatrix = []

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i]
      const g = pixels[i + 1]
      const b = pixels[i + 2]

      const grayscale = Math.floor(((r * 0.299) + (g * 0.587) + (b * 0.114)))

      pixels[i] = grayscale
      pixels[i + 1] = grayscale
      pixels[i + 2] = grayscale
      grayscaleMatrix.push(grayscale)
    }

    return {
      image,
      matrix: grayscaleMatrix
    }
  },

  sumArray: array =>
    array
      .reduce(
        (acc, elm) =>
          (acc + elm),
        0),

  avgArray (array) {
    return this.sumArray(array) / array.length
  },

  getLuminance ({
    width = null,
    height = null,
    pixels = [],
    mask = null
  }) {
    /*
    Translated algorithm from Android Yoonit Camera:
    https://github.com/Yoonit-Labs/android-yoonit-camera/blob/81e726249a6b19644ae61f6d5b0623f521ca9e1a/yoonit-camera/src/main/java/ai/cyberlabs/yoonit/camera/controllers/ImageQualityController.kt#L58
     */

    // calculate histogram of pixels inside bit mask
    const hist = Array(256).fill(0)

    for (let y = 0; y <= height; y++) {
      for (let x = 0; x <= width; x++) {
        if (
          (
            mask !== null &&
            mask.includes(x) &&
            mask.includes(y)
          ) ||
          (
            mask === null
          )
        ) {
          const pixel = pixels[y * width + x]
          hist[pixel] += 1
        }
      }
    }

    // calculate percentage of bright and dark pixels based on histogram "tails"
    // one measure of image quality (or image balance) is to quantify how many pixels
    // lie in the tails of the histogram, indicating the image is unbalanced
    const sumHist = this.sumArray(hist)
    const darkTail = this.sumArray(hist.slice(0, 63))
    const darkness = darkTail / sumHist
    const lightTail = this.sumArray(hist.slice(192, 255))
    const lightness = lightTail / sumHist

    return {
      darkness,
      lightness
    }
  },

  getSharpness ({
    width = 0,
    height = 0,
    pixels = []
  }) {
    /*
    Translated algorithm from Android Yoonit Camera:
    https://github.com/Yoonit-Labs/android-yoonit-camera/blob/81e726249a6b19644ae61f6d5b0623f521ca9e1a/yoonit-camera/src/main/java/ai/cyberlabs/yoonit/camera/controllers/ImageQualityController.kt#L83
    */

    if (!Math.clamp) {
      Math.clamp = function (val, min, max) {
        return Math.max(min, Math.min(max, val))
      }
    }

    const kernel = [
      1, 1, 1,
      1, -8, 1,
      1, 1, 1
    ]

    // determine edges (high frequency signals) via convolution with 3x3 LoG kernel
    // conv is the resulting flattened image, the same size as the original
    const conv = new Array(width * height).fill(0)

    // we iterate on every pixel of the image...
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // ...and on every coefficient of the 3x3 kernel...
        let convPixel = 0

        for (let j = -1; j < 2; j++) {
          for (let i = -1; i < 2; i++) {
            // ...and we compute the dot product (the sum of an element-wise multiplication)
            // of the kernel (sliding window) with the current region of the image it is
            // passing through, and store the result on the corresponding pixel of the convoluted image

            // if the image pixel required is "outside" the image, the border pixels will be
            // replicated. otherwise, the sum of indices will point to a valid pixel
            const pixelY = Math.clamp(y + j, 0, height - 1)
            const pixelX = Math.clamp(x + i, 0, width - 1)
            const pixelIndex = pixelY * width + pixelX
            const kernelIndex = (j + 1) * 3 + (i + 1)

            // then, one of the products is computed and accumulated
            convPixel += (pixels[pixelIndex] * kernel[kernelIndex])
          }
        }

        // finally, the sum of the products is stored as a pixel
        conv[y * width + x] = Math.clamp(convPixel, 0, 255)
      }
    }

    // compute the standard deviation of the pixels. it results in a measure of the amount
    // of high frequency signals on the image
    const mean = this.avgArray(conv)
    const accVar = conv.reduce((acc, pixel) => {
      acc += Math.pow(pixel - mean, 2)

      return acc
    }, 0)

    return Math.sqrt(accVar / conv.length) / 128
  },

  calcTextSize ({
    text = '',
    size,
    font = 'Arial'
  }) {
    if (text === undefined ||
      size === undefined) {
      throw new Error('calcTextSize')
    }

    this.context.font = `${size}px ${font}`

    return [...text.toString()]
      .reduce((acc, letter) => {
        return acc + Math.round(
          this.context.measureText(letter).width
        )
      }, 0)
  },

  padding ({
    top = 0,
    right = 0,
    bottom = 0,
    left = 0
  }) {
    return {
      width: left + right,
      height: top + bottom
    }
  },

  getBase64 ({
    mime = 'image/jpeg'
  }) {
    return this.canvas.toDataURL(mime)
  },

  getBlob ({
    mime = 'image/jpeg',
    compression = 0.90
  }) {
    return new Promise(resolve =>
      this.canvas.toBlob(
        blob => resolve(blob),
        mime,
        Number(compression)
      )
    )
  }

}
