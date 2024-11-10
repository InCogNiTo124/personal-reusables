<div class="loader-parent">
  <div class="loader-content">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>

<style scoped lang="css">
  .loader-parent {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background: none;
  }
  .loader-content {
    width: 200px;
    height: 200px;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  .loader-content div {
    box-sizing: content-box;
  }
  @keyframes loader-content {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .loader-content div {
    left: 94px;
    top: 46px;
    position: absolute;
    animation: loader-content linear 1s infinite;
    background: #da0000;
    width: 12px;
    height: 12px;
    border-radius: 6px / 6px;
    transform-origin: 6px 54px;
  }
  .loader-content div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.9166666666666666s;
    background: #da0000;
  }
  .loader-content div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -0.8333333333333334s;
    background: #da0000;
  }
  .loader-content div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.75s;
    background: #da0000;
  }
  .loader-content div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.6666666666666666s;
    background: #da0000;
  }
  .loader-content div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.5833333333333334s;
    background: #da0000;
  }
  .loader-content div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.5s;
    background: #da0000;
  }
  .loader-content div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.4166666666666667s;
    background: #da0000;
  }
  .loader-content div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.3333333333333333s;
    background: #da0000;
  }
  .loader-content div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.25s;
    background: #da0000;
  }
  .loader-content div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.16666666666666666s;
    background: #da0000;
  }
  .loader-content div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.08333333333333333s;
    background: #da0000;
  }
  .loader-content div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
    background: #da0000;
  }
</style>
