<template>
  <div class="site-overlay">
    <div class="screen-bottom">
      <div class="line">
        <div class="red"></div>
        <div class="white"></div>
        <div class="green"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.site-overlay {
  position: absolute;
  width: 100vw;
  height: 100vh;
  filter: opacity(0.3);
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  -webkit-animation: blue-me 5ms infinite;
  animation: blue-me 5ms infinite;
  pointer-events: none;
}
@keyframes blue-me {
  28% {
    background: #2a2b2c;
    pointer-events: none;
  }
  30% {
    background: rgba(54, 54, 56, 0.95);
    pointer-events: none;
  }
  33% {
    background: #292a2c;
  }
  34% {
    background: rgba(31, 31, 32, 0.9);
    pointer-events: none;
  }
  35% {
    background: #1f1f20;
    pointer-events: none;
  }
}
body {
  background: rgba(50, 50, 50, 1);
  overflow: hidden;
  color: white;
  font-family: helvetica, sans-serif;
  font-weight: 300;
}

.screen-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.line {
  width: 100%;
  height: 3px;
  position: relative;
  -webkit-animation: appear 1s infinite, flick 1s infinite,
    big-jump 5ms infinite;
  animation: appear 1s infinite, flick 1s infinite, big-jump 5ms infinite;
}

.line .white {
  background: white;
  position: relative;
  top: 0;
  left: 0;
  height: 4px;
}

.line .red {
  background: red;
  position: relative;
  top: 0;
  left: 0;
  height: 1px;
}

.line .green {
  background: green;
  position: relative;
  top: 0;
  left: 0;
  height: 1px;
}

@keyframes appear {
  0% {
    -webkit-filter: blur(5px);
    filter: blur(5px);
    opacity: 0.85;
  }
  50% {
    -webkit-filter: blur(3px);
    filter: blur(3px);
    opacity: 0.85;
  }
  100% {
    -webkit-filter: blur(4px);
    filter: blur(4px);
    opacity: 0.85;
  }
}

@keyframes big-jump {
  0% {
    top: 0;
  }
  10% {
    top: -100px;
  }
  12% {
    top: 0;
  }
  54% {
    top: 0;
  }
  55% {
    top: -300px;
  }
  56% {
    top: 0;
  }
  86% {
    top: 0;
  }
  87% {
    top: -600px;
  }
  88% {
    top: 0;
  }
}
</style>