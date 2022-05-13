# HTML Images; CSS Color & Text

## HTML & CSS by Jon Ducket

### Chapter 5: Images

- The `<img>` element is used to add images to a web page.
- You must always specify an src attribute to indicate the source of an image and an alt attribute to describe the content of an image
- You should save images at the size you will be using them on the web page and in the appropriate format.
- Photographs are best saved as JPEGs; illustrations or logos that use flat colors are better saved as GIFs

### Chapter 11: Color

- Color not only brings your site to life, but also helps convey the mood and evokes reactions.
- There are three ways to specify colors in CSS:
  1. RGB values
  2. hex codes
  3. color names
- Color pickers help you find the color you want.
- It is important to ensure that there is enough contrast between any text and the background color (otherwise people will not be able to read your content).
- CSS3 has introduced an extra value for RGB colors to indicate opacity known as RGBA.
- CSS3 also allows you to specify colors as HSL values, with an optional opacity value known as HSLA

### Chapter 12: Text

### [JPEG vs PNG vs GIF](https://blog.imagekit.io/jpeg-vs-png-vs-gif-which-image-format-to-use-and-when-c8913ae3e01d)

- Use JPEG format for all images that contain a natural scene or photograph where variation in colour and intensity is smooth.
- Use PNG format for any image that needs transparency or for images with text & objects with sharp contrast edges like logos.
- Use GIF format for images that contain animations.
- Compression can be of two types — lossless and lossy.
  - In lossless compression, it is possible to reconstruct the original image from the compressed image because there is no information loss during compression.
  - in lossy compression i.e. data loss in lossy compression is irreversible. Lossy compression algorithms always have a superior compression ratio (the ratio of size of compressed image to original image)
  - The noticeable reduction in quality or distortion of the image is called compression artefact.

- JPEG is a lossy compression specification that takes advantage of human perception. It can achieve compression ratios of 1:10 without any perceivable difference in quality.
- JPEG images are best suited for photographs and paintings of natural scenes where the variations in colour and intensity are smooth.
- JPEG images don’t support transparency and are hence not usable for such cases.
- JPEG images can support around 16 million colours. This is what makes them suitable for storing images of natural scenes.

- PNG is a lossless image format using DEFLATE compression. No data is lost during compression and no compression artefacts are introduced in the image.
- PNG is a lossless image format using DEFLATE compression. No data is lost during compression and no compression artefacts are introduced in the image.
- PNG images support transparency in two ways — inserting an alpha channel that allows partial transparency or by declaring a single colour as transparent (index transparency). 
- PNG images mainly have two modes — PNG8 and PNG24. PNG8 can support upto 256 colours whereas PNG24 can handle upto 16 million colours like a JPEG image. 

- GIF is also a lossless image format that uses LZW compression algorithm.
- GIF images are now mainly used only if the image contains animations.
- GIF images support transparency by declaring a single colour in the colour palette as transparent (index transparency).
- GIF images are limited to 256 colours. 
