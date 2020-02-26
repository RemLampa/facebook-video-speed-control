# facebook-video-speed-control

Facebook currently has no speed playback controls for their videos to speed or slow them down, much like how YouTube does it.

Until Facebook itself implements the feature, may this Chrome extension serve as your interim solution.

## Installation

The Chrome extension is available now from the [Chrome Web Store](https://chrome.google.com/webstore/detail/facebook-video-speed-cont/mkpjcmkameikplglemncielacjijggoe)

## Or if you want to compile from source:

```
git clone https://github.com/RemLampa/facebook-video-speed-control.git
cd facebook-video-speed-control
yarn install
yarn upgrade
npm run dist
```
Then you can visit chrome://extensions/ in Chrome and enable "Developer mode" and then click "Load unpacked" and choose the `facebook-video-speed-control\dist` folder.

## Contributing

I will update this document to detail how interested people can contribute to the code. But everyone is free to file feature requests and bug reports on this repo's Issues page.

## License

Refer to the [license file](LICENSE).
