const logo = "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";

const render = body => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
<style>
  body {
    background: #222;
  }
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo img {
    opacity: 0.1;
    max-height: calc(75vh);
    max-width: calc(75vw);
  }
  .logo code {
    color: #707070;
    font-size: 1.5rem;
  }
</style>
  </head>
  <body>
    <div class="logo">
      <img src="data:image/png;base64, ${logo}" />
      <code style="color: white">0xK.co</code>
      <code>${body}</code>
    </div>
  </body>
</html>`;

export const home = render('URL Shortener');

export const error = render('Not Found');
