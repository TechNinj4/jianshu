import { createGlobalStyle } from 'styled-components'
createGlobalStyle`
  @font-face {
    font-family: "iconfont"; /* Project id 4170937 */
    src: url('iconfont.woff2?t=1690014831096') format('woff2'),
    url('iconfont.woff?t=1690014831096') format('woff'),
    url('iconfont.ttf?t=1690014831096') format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-spin:before {
    content: "\\e851";
  }

  .icon-yongyan:before {
    content: "\\e600";
  }

  .icon-zitifont5:before {
    content: "\\e76a";
  }

  .icon-search:before {
    content: "\\e63a";
  }

`